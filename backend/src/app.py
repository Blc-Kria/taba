from flask import Flask, request, jsonify
from service.ProjectService import ProjectService
from collections import OrderedDict

app = Flask(__name__)
service = ProjectService()

def format_project(project):
    return OrderedDict([
        ('name', project.name),
        ('icon', project.icon),
        ('banner', project.banner),
        ('wallet', project.wallet),
        ('bio', project.bio),
        ('project_type', project.project_type),
        ('description', project.description),
        ('amount_collected', project.amount_collected)
    ])

@app.route('/projects', methods=['POST'])
def create_project():
    data = request.json
    try:
        project_id = service.create_project(
            name=data['name'],
            icon=data.get('icon', ''),
            banner=data.get('banner', ''),
            wallet=data['wallet'],
            bio=data.get('bio', ''),
            project_type=data['project_type'],
            description=data.get('description', ''),
            
        )
        return jsonify({'id': project_id}), 201
    except Exception as e:
        return jsonify({'error': f'An unexpected error occurred: {str(e)}'}), 400
    
@app.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = service.get_project(project_id)
    if project:
        return jsonify(format_project(project)), 200
    return jsonify({'error': 'Project not found'}), 404

@app.route('/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    data = request.json

    # Verifica se o valor 'value_donate' está presente no JSON da requisição
    if 'value_donate' not in data:
        return {"error": "Missing 'value_donate' in request body"}, 400

    try:
        service.DonationContract(
            project_id=project_id,
            value_donate=data['value_donate'],
        )
    except Exception as e:
        return {"error": str(e)}, 500

    return {"message": "Donation successful"}, 200

if __name__ == '__main__':
    app.run(debug=True)

