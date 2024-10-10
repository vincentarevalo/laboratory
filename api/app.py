from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(message="Hello, World!")

@app.route('/api/data', methods=['POST'])
def get_data():
    data = request.json
    return jsonify(data)

def handler(req):
    # Convert the Vercel request into a Flask request context
    with app.test_request_context(req.path, method=req.method, data=req.data):
        response = app.full_dispatch_request()
        return {
            "statusCode": response.status_code,
            "body": response.get_data(as_text=True),
            "headers": {key: value for key, value in response.headers.items()},
        }
