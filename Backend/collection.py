from pymongo import collection, MongoClient


class Collection:
    def __init__(self, db: MongoClient, collection_name: str):
        self.collection: collection = db[collection_name]

    def return_collection(self):
        return self.collection

    def create_user(self, username: str, password: str):
        schema = {
            "_id": 0,
            "username": username,
            "password": password
        }
        self.collection.insert_one(schema)

    def get_user_by_username(self, username: str):
        return self.collection.find_one({"username": username}, {"projection": {"_id": 0}})

    def verify_password(self, username: str, password: str):
        user_password = self.collection.find_one({"username": username}, {"_id": False, "username": False})["password"]
        return password == user_password
