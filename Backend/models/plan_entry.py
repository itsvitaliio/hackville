import json
from datetime import date, datetime
from typing import Optional



class PlanEntry():
    subject: str
    date: Optional[datetime] = None
    type: str    
    
    def __init__(self, subject: str, type: str):
        self.subject = subject
        self.type = type
        
    def __init__(self, subject: str, type: str, date: datetime):
        self.subject = subject
        self.type = type
        self.date = date
    
    def get_json(self):
        return json.dumps({
            "subject": self.subject,
            "type": self.type,
            "date": self.date
        })