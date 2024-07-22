import datetime

class ProjectModel:
    def __init__(self, name: str, icon: str, banner: str, wallet: str, bio: str, project_type: bool, description: str, amount_collected: float = 0, id: int = None):
        self.id = id
        self.name = name
        self.icon = icon
        self.banner = banner
        self.wallet = wallet
        self.bio = bio
        self.project_type = project_type
        self.description = description
        self.amount_collected = amount_collected

    def get_wallet(self) -> str:
        return self.wallet
