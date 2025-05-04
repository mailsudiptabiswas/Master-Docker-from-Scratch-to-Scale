# Lab 37: Private Docker Registry with Auth – Lab

## Objective:
Set up a private Docker registry with basic auth.

## Tasks:
1. Create htpasswd file:
```bash
docker run --rm --entrypoint htpasswd httpd:2 -Bbn user pass > htpasswd
```

2. Run private registry with auth:
```bash
docker run -d -p 5000:5000 --restart=always --name registry   -v $(pwd)/auth:/auth   -e "REGISTRY_AUTH=htpasswd"   -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"   -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd"   registry:2
```

3. Login and push:
```bash
docker login localhost:5000
docker tag alpine localhost:5000/alpine
docker push localhost:5000/alpine
```
