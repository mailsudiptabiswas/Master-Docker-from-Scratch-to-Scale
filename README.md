
# 🐳 Mastering Docker from Scratch to Scale – Lab Collection for DevOps, DCA Certification & Production Readiness

Welcome to the **Master Lab Repository** that accompanies the book **“Mastering Docker from Scratch to Scale”**. This repo contains 50+ hands-on labs including:

- 🧪 Docker CLI, Compose, Networking, and Storage
- 🔐 Security Hardening, Secrets Management
- ⚙️ CI/CD with GitHub Actions
- 📦 Backup, Recovery, and Volume Strategies
- 📊 Monitoring with Grafana, Loki
- 🧾 Capstone Lab (Production-ready Deployment)
- 🎓 Docker Certified Associate (DCA) Exam Lab Kit

> This lab suite is a complete learning journey for **DevOps engineers, SREs, platform teams, and DCA aspirants**.

---

## 📘 How to Use

1. **Clone this repository**:
```bash
git clone https://github.com/yourname/docker-lab-kit.git
cd docker-lab-kit
```

2. Navigate into any lab folder:
```bash
cd lab03-volume-backup
```

3. Follow the `README.md` inside each lab.

4. Try the optional `challenge.md` to push yourself further.

---

## 📚 Lab Categories & Topics

### ✅ Docker Basics (Labs 01–10)
| Lab | Topic                     |
|-----|---------------------------|
| 01  | Docker CLI Essentials     |
| 02  | Dockerfile Fundamentals   |
| 03  | Image Layers & Tagging    |
| 04  | Volumes and Bind Mounts   |
| 05  | .dockerignore Usage       |
| 06  | Container Lifecycle Mgmt  |
| 07  | Inspect, Logs, Exec       |
| 08  | Healthchecks              |
| 09  | ENV, ARG, CMD, ENTRYPOINT |
| 10  | Custom Entry Scripts      |

### 🛠️ Intermediate (Labs 11–30)
| Lab | Topic                          |
|-----|--------------------------------|
| 11  | Multi-Stage Builds             |
| 12  | Named Volumes & Backup         |
| 13  | Networking Modes               |
| 14  | Docker Compose Basics          |
| 15  | Override Files & Profiles      |
| 16  | CI/CD GitHub Actions for Builds|
| 17  | BuildKit and Build Secrets     |
| 18  | Rootless Docker                |
| 19  | Docker Swarm                   |
| 20  | Compose Stack Recovery         |
| 21–30 | Logging, Metrics, Promtail   |

### 🔐 Advanced Security (Labs 31–40)
| Lab | Topic                         |
|-----|-------------------------------|
| 31  | Docker Content Trust (DCT)    |
| 32  | Seccomp Profile               |
| 33  | AppArmor and SELinux          |
| 34  | Read-Only FS, Cap Drop        |
| 35  | Secrets with Swarm            |
| 36  | Signed Images (Cosign)        |
| 37  | CVE Scanning (Trivy, Snyk)    |
| 38  | Air-Gapped Restore (GPG)      |
| 39  | Supply Chain Attestation      |
| 40  | SBOM & Dependency Graphs      |

### 🧪 Observability, Resilience, Backup (Labs 41–45)
| Lab | Topic                          |
|-----|--------------------------------|
| 41  | Docker Events and Hooks        |
| 42  | Grafana Dashboards             |
| 43  | Loki Log Integration           |
| 44  | Alerting with Prometheus       |
| 45  | Resilience Testing with Chaos  |

---

## 🎓 DCA Exam Lab Kit

📂 `/dca-lab-kit/`  
This special folder includes 10 core labs mapped to Docker Certified Associate domains:

- 🏗️ Multi-Stage Builds
- 🔁 Volume Backup & Recovery
- 🔐 Seccomp + Rootless Mode
- 🔄 Compose Stack Restore
- 🧾 GitHub Actions CI/CD
- 🔎 Monitoring Backups in Grafana
- ✅ Signed Image Verification
- ☁️ Cloud-based S3 Backups
- 🧊 Air-Gapped Restore
- 🌐 Network Troubleshooting

See `dca-lab-kit/README.md` for details.

---

## 🧠 Capstone Lab: Docker in Production

📁 `/capstone-lab/`  
Design, deploy, secure, and monitor a **multi-container full-stack app**:
- Node.js + PostgreSQL + Nginx
- SSL/TLS + CI/CD + Grafana
- Daily backup + rollback validation

Bonus: Generate SBOM, scan images, and push to private registry.

---

## ✅ Lab Tracker

📁 `/Lab-Tracker.xlsx` or `/Lab-Tracker.pdf`  
Track your progress across all labs, mark completed ones, and rate confidence per topic.

---

## 🧩 Contributing

Have ideas or improvements? Feel free to:
- Fork the repo
- Submit PRs with new labs
- File issues for bugs or suggestions

---

## 📖 Related Book

This lab series supports the book:  
**“Mastering Docker from Scratch to Scale: DevSecOps, CI/CD, and Production-Grade Labs for Engineers”**

📗 [Available here](https://github.com/yourname/docker-book)

---

Happy Docking! 🐳🔥
