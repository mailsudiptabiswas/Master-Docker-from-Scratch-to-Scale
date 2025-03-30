# Chapter 31: Kubernetes Introduction – Lab

## Objective:
Run a basic Pod and Service in Kubernetes (minikube or kubeadm)

## Files:
- pod.yaml
- service.yaml

## Tasks:
1. Apply resources:
```bash
kubectl apply -f pod.yaml
kubectl apply -f service.yaml
```

2. Access app via NodePort or port-forward:
```bash
kubectl port-forward pod/myapp 8080:80
```
