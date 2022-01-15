from typing import Optional
from .plan_entry import PlanEntry

class User():
    username: str
    password: str
    plan_entries: Optional[PlanEntry] = []
    
    def __init__(self, username, password):
        self.username = username
        self.password = password
        
    def get_username(self):
        return self.username
        
    def get_password(self):
        return self.password