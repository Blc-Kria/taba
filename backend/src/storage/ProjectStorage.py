import sqlite3
import datetime
from typing import List, Optional
from model.ProjectModel import ProjectModel

# Registrando adaptadores e conversores de datetime
def adapt_datetime(ts):
    return ts.strftime('%Y-%m-%d %H:%M:%S')

def convert_datetime(s):
    try:
        return datetime.datetime.strptime(s.decode('utf-8'), '%Y-%m-%d %H:%M:%S.%f')
    except ValueError:
        return datetime.datetime.strptime(s.decode('utf-8'), '%Y-%m-%d %H:%M:%S')

sqlite3.register_adapter(datetime.datetime, adapt_datetime)
sqlite3.register_converter("timestamp", convert_datetime)

class ProjectStorage:
    def __init__(self, db_name: str = "project.db"):
        self.db_name = db_name
        self._create_table()

    def _create_table(self):
        with sqlite3.connect(self.db_name, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
            cursor = conn.cursor()
            cursor.execute("""
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                icon TEXT,
                banner TEXT,
                wallet TEXT NOT NULL,
                bio TEXT,
                project_type BOOLEAN NOT NULL,
                description TEXT,
                amount_collected float, 
                created_at TIMESTAMP ,
                updated_at TIMESTAMP
            )
            """)
            conn.commit()

    def add_project(self, project: ProjectModel) -> int:
        with sqlite3.connect(self.db_name, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO projects (name, icon, banner, wallet, bio, project_type, description, amount_collected)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, (project.name, project.icon, project.banner, project.wallet, project.bio, project.project_type, project.description, project.amount_collected))
            conn.commit()
            return cursor.lastrowid

    def get_project_id(self, project_id: int) -> Optional[ProjectModel]:
        with sqlite3.connect(self.db_name, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, name, icon, banner, wallet, bio, project_type, description, amount_collected FROM projects WHERE id = ?", (project_id,))
            row = cursor.fetchone()
            print(row)
            if row:
                
                return ProjectModel(
                    id=row[0],
                    name=row[1],
                    icon=row[2],
                    banner=row[3],
                    wallet=row[4],
                    bio=row[5],
                    project_type=row[6],
                    description=row[7],
                    amount_collected=row[8],
                )
            return None

    def update_amount_collected(self, value, project: ProjectModel):
        with sqlite3.connect(self.db_name, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
            cursor = conn.cursor()
            cursor.execute("""
            UPDATE projects
            SET amount_collected = ?
            WHERE id = ?
            """, (value, project.id))
            conn.commit()
            
