
# 🐳 Docker Certified Associate Lab Kit

This lab kit is designed to accompany the book **“Mastering Docker from Scratch to Scale”** and help you prepare for the **Docker Certified Associate (DCA)** exam through hands-on practice.

Each lab maps to core domains of the DCA blueprint and includes:
- 🧪 Real-world Dockerfiles and Compose stacks
- 📜 Scripts for automation, backup, and monitoring
- 🔐 Security profiles and air-gapped recovery samples
- ✅ Validation tips and bonus challenges

---

## 📚 Labs Included

| Lab # | Title                             | Description |
|-------|-----------------------------------|-------------|
| 01    | Multi-Stage Builds                | Learn how to reduce image size and layers |
| 02    | Volume Backup & Restore           | Backup and recover Docker volumes |
| 03    | CI/CD Backup to S3                | Automate backups using GitHub Actions |
| 04    | Rootless Docker & Seccomp         | Secure containers with least privilege |
| 05    | Compose Stack Volume Recovery     | Manage and restore full app stack data |
| 06    | Monitor Backups in Grafana        | View backup success in real-time dashboards |
| 07    | Image Signing with Cosign         | Sign and verify container image trust |
| 08    | Air-Gapped Encrypted Restore      | Use GPG for offline disaster recovery |
| 09    | Docker Networking Fundamentals    | Practice container DNS and network communication |
| 10    | Network Troubleshooting           | Debug connectivity and firewall issues |

---

## ✅ Prerequisites

Please install the following tools before beginning:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) *(for Lab 3)*
- [Cosign](https://docs.sigstore.dev/cosign/overview) *(for Lab 7)*
- [GPG](https://gnupg.org) *(for Lab 8)*
- [Grafana + Loki](https://grafana.com/oss/loki/) *(for Lab 6)*

---

## 🚀 How to Use This Kit

1. Clone or unzip the kit:
   ```bash
   unzip docker_dca_lab_kit_final_ready.zip
   cd docker_dca_lab_kit
   ```

2. Pick any lab folder:
   ```bash
   cd lab01-multistage-image
   ```

3. Follow instructions in `README.md`, run commands, and try the `challenge.md`.

4. Track your progress with the included lab tracker (optional).

---

## 🎯 Certification Alignment

These labs map directly to the official [Docker Certified Associate exam blueprint](https://docs.docker.com/certify/dca/), covering:
- Installation & Configuration
- Image Creation & Management
- Orchestration (Docker Compose/Swarm)
- Security
- Networking
- Storage & Volumes

For full study guidance, see **Appendix D: Preparing for the DCA Exam** in the book.

---

Good luck with your DCA preparation — and enjoy becoming a Docker pro! 🧠🔥
