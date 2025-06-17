from flask import Flask, jsonify, request
app = Flask(__name__)
tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.json.get('task')
    tasks.append({'task': task})
    return jsonify({'message': 'Task added!'}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0')
