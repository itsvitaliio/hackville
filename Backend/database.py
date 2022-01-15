from pymongo import MongoClient


class Database:
    def __init__(self, path_to_database, database_name):
        client = MongoClient(path_to_database)
        self.db = client[database_name]
        #

    def return_db(self):
        return self.db
