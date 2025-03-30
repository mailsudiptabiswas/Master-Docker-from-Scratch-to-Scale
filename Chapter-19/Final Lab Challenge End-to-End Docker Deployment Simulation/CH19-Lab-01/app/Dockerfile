FROM python:3.10-slim
WORKDIR /app
COPY app.py .
RUN pip install flask
HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1
CMD ["python", "app.py"]
