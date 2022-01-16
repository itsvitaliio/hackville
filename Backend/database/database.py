from pymongo import MongoClient


class Database:
    def __init__(self):
        client = MongoClient("mongodb+srv://admin:SSywzaemHFtxIR9N@cluster0.or5yb.mongodb.net/myFirstDatabase?retryWrites=true")
        self.db = client["General"]

    def return_db(self):
        return self.db
