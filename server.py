from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def get_data():
    with open('/app/scraped_data.json') as f:
        return jsonify(json.load(f))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)