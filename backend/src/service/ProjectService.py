# service/ProjectService.py
from typing import List, Optional
from model.ProjectModel import ProjectModel
from storage.ProjectStorage import ProjectStorage
import datetime
import re

class ProjectService:
    
    storage = ProjectStorage()
    
    def is_valid_ethereum_address(self,address: str) -> bool:
        pattern = r'^0x[a-fA-F0-9]{40}$'
        if re.match(pattern, address):
            return True
        else:
            return False
    
     # FUNÇÃO QUE VALIDA OS DADOS DE INSERÇÃO DO PROJETO NÃO PERMITINDO QUE OS VALORES SEJAM INSERIDOS EM BRANCO
    def validate_project(self, project: ProjectModel) -> bool:
        sucess = self.is_valid_ethereum_address(project.wallet)
        if not sucess:
            raise ValueError("Invalid Adress ethereum")
        if not project.wallet:
            raise ValueError("Wallet address is required")
        if not project.name:
            raise ValueError("Name is required")
        if not project.bio:
            raise ValueError("Bio is required")
        if not project.description:
            raise ValueError("Description is required")
        return True
    
    def create_project(self, name: str, icon: str, banner: str, wallet: str, bio: str, project_type: bool, description: str, amount_collected=0) -> int:
        project = ProjectModel(
            name=name,
            icon=icon,
            banner=banner,
            wallet=wallet,
            bio=bio,
            project_type=project_type,
            description=description,
            amount_collected=amount_collected
        )
        self.validate_project(project)
        return self.storage.add_project(project)

    def get_project(self, project_id: int) -> Optional[ProjectModel]:
        return self.storage.get_project_id(project_id)
    
    def DonationContract(self, project_id, value_donate):
        project = self.storage.get_project_id(project_id)
        print(project.id)
        if value_donate > 0:
            new_value = project.amount_collected + value_donate
            self.storage.update_amount_collected(new_value, project)