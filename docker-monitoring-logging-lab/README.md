# 📦 Docker Monitoring + Logging Lab

[![Docker](https://img.shields.io/badge/Docker-Engine-blue?logo=docker)](https://www.docker.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-orange?logo=prometheus)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Dashboards-yellow?logo=grafana)](https://grafana.com/)
[![Loki](https://img.shields.io/badge/Loki-Logs-blueviolet?logo=grafana)](https://grafana.com/oss/loki/)
[![Fluent Bit](https://img.shields.io/badge/Fluent--Bit-Log%20Collector-green?logo=fluentbit)](https://fluentbit.io/)

---

## 📖 Overview

This project provides a **production-grade** hands-on lab to monitor, log, and alert on your Docker containers and host systems using:
- **Prometheus** (metrics collection)
- **Grafana** (visualization)
- **Loki** (logs aggregation)
- **Fluent Bit** (log shipper)
- **Alertmanager** (notifications via Email/Slack)

It follows **real-world DevOps standards** for microservice observability.

---

## 🖼️ Architecture

> *(Visual)*

![Architecture Diagram](A_digital_graphic_design_showcases_promotional_con.png)

---

## 🎯 Features

- 🔥 Auto-deploy Prometheus, Grafana, Loki, Fluent Bit, Node Exporter, cAdvisor
- 🔥 Centralized container logging with Loki + Fluent Bit
- 🔥 Host and Container Metrics via Node Exporter and cAdvisor
- 🔥 Grafana dashboards for host health, container metrics, and logs
- 🔥 Prometheus Alerts → Alertmanager → Email/Slack
- 🔥 Healthcheck monitoring with auto-restart watchdog
- 🔥 Fluent Bit filtering (capture only Errors/Warnings)

---

## 🛠️ Prerequisites

- Ubuntu 20.04/22.04 recommended
- Docker 20.10+ installed
- Docker Compose plugin installed
- Ports open: 3000, 9090, 9100, 8081, 3100, 9093, 8080, 2020
- SMTP and Slack webhook for alerts (optional)

---

## 🚀 How to Run

```bash
git clone https://github.com/mailsudiptabiswas/Master-Docker-from-Scratch-to-Scale.git
cd docker-monitoring-logging-lab
docker compose up -d --build
```

Access URLs:
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090
- Node Exporter: http://localhost:9100/metrics
- cAdvisor: http://localhost:8081/metrics
- Loki: http://localhost:3100
- App: http://localhost:8080

---

## 📈 Prebuilt Grafana Dashboards

- Docker Host Overview
- Container Metrics Overview
- Loki Log Explorer

---

## 🔥 Fluent Bit Queries

- `{job="fluent-bit"}` — All logs
- `{severity="detected"}` — Only Errors/Warnings

---

## 📩 Alerts

Alertmanager sends:
- Email Notifications
- Slack Notifications

---

## 📂 Folder Structure

```
/docker-monitoring-logging-lab/
├── docker-compose.yml
├── .env
├── prometheus/
├── grafana/
├── loki/
├── fluent-bit/
├── sample-app/
├── scripts/
├── alertmanager/
├── README.md
```

---

## 📝 License

MIT License © 2025 Sudipta Biswas

---