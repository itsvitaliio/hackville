# Bring your packages onto the path
import sys, os

from models.plan_entry import PlanEntry
sys.path.append(os.path.abspath(os.path.join('..', 'config')))
from pymongo import collection, MongoClient
from models.user import User


class UserCollection:
    def __init__(self, db: MongoClient):
        self.collection: collection = db["users"]

    def return_collection(self):
        return self.collection

    def create_user(self, user: User):
        schema = {
            "username": user.get_username(),
            "password": user.get_password(),
            "plan_entries": []
        }
        self.collection.insert_one(schema)

    async def get_user_by_username(self, username: str):
        return self.collection.find_one({"username": username}, {"projection": {"_id": 0}})

    async def verify_password(self, username: str, password: str):
        user_password = self.collection.find_one({"username": username}, {"_id": False, "username": False})["password"]
        return password == user_password
    
    async def add_plan_entry(self, username, plan_entry:PlanEntry):
        plan = plan_entry.get_json()
        self.collection.update_one({"username": username}, {'$push': {'plan_entries' : plan}})
        print("added plan")
    
    async def update_plan_entry_name(self, index: int, username: str, plan_entry: PlanEntry):
        plan = plan_entry.get_json()
        self.collection.update_one({"username": username}, {"$set": {"plan_entries." + str(index): plan}})
        print("updated plan")
        print(plan)
    
    def get_plan_entries(self, username):
        return self.collection.find_one({"username": username}, {"_id": 0, "plan_entries": 1})
    
    async def delete_plan_entry(self, username: str, index: int):
        self.collection.update_one({"username": username}, {"$unset" : {"plan_entries." + str(index) : 1 }})
        self.collection.update_one({"username": username}, {"$pull" : {"plan_entries": None}})
