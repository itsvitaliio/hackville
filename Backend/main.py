import imp
import json
from pydoc import plain
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from database.database import Database
from database.user_collection import UserCollection
from models.plan_entry import PlanEntry
from models.user import User

app = FastAPI()
db = Database()
users: UserCollection = UserCollection(db.return_db())

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def home():
    return {'response': 'success'}

@app.post('/api/register')
async def register(request: Request):
    data = await request.json()
    user = User(data['username'], data['password'])
    await users.create_user(user)
    return await request.json()

@app.post('/api/login')
async def login(request: Request):
    data = await request.json()
    if(await users.get_user_by_username(data['username'])):
        if(await users.verify_password(data['username'], data["password"])):
            return {"response": 200, "status": "Password is OK"}
        else:
            return {"response": 400, "status": "Bad password"}    
    else:
        return {"response": 400, "status": "User does not exist"}    
    

@app.post('/api/plan/add')
async def add_plan(request: Request):
    data = await request.json()
    plan = PlanEntry(data["name"], data["description"], data["type"], data["date"])
    await users.add_plan_entry(data["username"], plan)
    return {'response': 200}

@app.post('/api/plan/update')
async def update_plan(request: Request):
    data = await request.json()
    username = data["username"]
    index = data["index"]
    plan = PlanEntry(data["name"], data["description"], data["type"], data["date"])
    await users.update_plan_entry_name(index, username, plan)
    return {"response": 200}

@app.post('/api/plan/read')
async def read_plans(request: Request):
    data = await request.json()
    username = data["username"]
    return {"response": 200}

@app.post('/api/plan/delete')
async def delete_plans(request: Request):
    data = await request.json()
    username = data["username"]
    index = data["index"]
    await users.delete_plan_entry(username, index)
    return {"response": 200}