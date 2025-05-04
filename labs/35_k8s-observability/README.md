# Lab 35: Kubernetes Observability – Lab

## Objective:
Deploy Prometheus and Grafana using Helm or YAMLs.

## Tasks:
1. Add Helm repo and install:
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install monitoring prometheus-community/kube-prometheus-stack
```

2. Access:
- Grafana via port-forward:
```bash
kubectl port-forward svc/monitoring-grafana 3000:80
```
