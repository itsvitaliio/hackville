import imp
import json
from pydoc import plain
from fastapi import FastAPI, Request
from database.database import Database
from database.user_collection import UserCollection
from models.plan_entry import PlanEntry
from models.user import User

app = FastAPI()
db = Database()
users: UserCollection = UserCollection(db.return_db())

@app.get('/')
async def home():
    return {'response': 'success'}

@app.get('/api/register')
async def register(request: Request):
    data = await request.json()
    user = User(data['username'], data['password'])
    users.create_user(user)
    return await request.json()

@app.get('/api/login')
async def login(request: Request):
    data = await request.json()
    if(users.verify_password(data['username'], data["password"])):
        return {"response": 200, "status": "Password is OK"}
    else:
        return {"response": 400, "status": "Bad password"}

@app.get('/api/plan/add')
async def register(request: Request):
    data = await request.json()
    plan = PlanEntry(data["name"], data["description"], data["type"], data["date"])
    await users.add_plan_entry(data["username"], plan)
    return {'response': 400, "status": "Password is Ok"}

@app.get('/api/plan/update')
async def register(request: Request):
    data = await request.json()
    username = data["username"]
    index = data["index"]
    plan = PlanEntry(data["name"], data["description"], data["type"], data["date"])
    await users.update_plan_entry_name(index, username, plan)
    return {'response': 'add'}

@app.get('/api/plan/read')
async def register(request: Request):
    data = await request.json()
    username = data["username"]
    return {'response': 'add', "plans": users.get_plan_entries(username)["plan_entries"]}

@app.get('/api/plan/delete')
async def register(request: Request):
    data = await request.json()
    username = data["username"]
    index = data["index"]
    await users.delete_plan_entry(username, index)
    return {'response': 'add'}