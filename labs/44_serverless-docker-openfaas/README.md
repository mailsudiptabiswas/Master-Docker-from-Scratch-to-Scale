# Lab 44: Docker & Serverless with OpenFaaS – Lab

## Objective:
Deploy a function with OpenFaaS using Docker.

## Tasks:
1. Install faas-cli:
```bash
curl -sL https://cli.openfaas.com | sudo sh
```

2. Deploy function:
```bash
faas-cli new hello-python --lang python3
faas-cli up
```

_Note: Requires OpenFaaS deployed on local or cloud environment_
