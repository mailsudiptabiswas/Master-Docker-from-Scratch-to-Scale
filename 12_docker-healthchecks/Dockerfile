FROM python:3.9-slim
RUN pip install flask
COPY - <<EOF /app.py
from flask import Flask
app = Flask(__name__)
@app.route("/") 
def hello(): return "OK"
app.run(host="0.0.0.0", port=5000)
EOF
HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1
CMD ["python", "/app.py"]
