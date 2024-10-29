from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello World</p>"


@app.route("/users")
def get_users():
    r = requests.get("https://random-data-api.com/api/v2/users")
    return jsonify(r.json()), 200


if __name__ == "__main__":
    app.run(debug=True, port=5001)
