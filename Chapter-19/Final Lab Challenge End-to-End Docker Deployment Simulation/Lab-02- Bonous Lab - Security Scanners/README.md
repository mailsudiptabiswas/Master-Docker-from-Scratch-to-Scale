# Lab 11: Docker Image Security Scanning

## Objectives:
- Scan Docker images for vulnerabilities using Trivy and Snyk

---

## 🔍 Tool 1: Trivy (by Aqua Security)

### Install Trivy
```bash
brew install aquasecurity/trivy/trivy     # macOS
sudo apt install trivy                     # Ubuntu/Debian
```

### Run Trivy Scan
```bash
docker build -t insecure-app .
trivy image insecure-app
```

---

## 🔍 Tool 2: Snyk (Developer-focused Security Scanner)

### Install Snyk CLI
```bash
npm install -g snyk
snyk auth
```

### Scan Image
```bash
snyk test --docker insecure-app
```

## Note:
- Trivy works offline after first DB load
- Snyk requires login and account (free tier available)

