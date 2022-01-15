from pymongo import MongoClient


class Database:
    def __init__(self):
        client = MongoClient("mongodb+srv://admin:gBAfgUTGbabNr7XW@cluster0.4aixl.mongodb.net/General?retryWrites=true")
        self.db = client["General"]

    def return_db(self):
        return self.db
