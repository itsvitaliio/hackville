import json
from datetime import date, datetime
from typing import Optional



class PlanEntry():
    name: str
    description: Optional[str] = None
    date: datetime
    type: str    
    
    def __init__(self, name: str, type: str):
        self.name = name
        self.type = type
    
    def __init__(self, name: str, description: str, type: str):
        self.name = name
        self.description = description
        self.type = type
    
    def __init__(self, name: str, description: str, type: str, date: datetime):
        self.name = name
        self.description = description
        self.type = type
        self.date = date
    
    def get_json(self):
        return json.dumps({
            "name": self.name,
            "description": self.description,
            "type": self.type,
            "date": self.date
        })