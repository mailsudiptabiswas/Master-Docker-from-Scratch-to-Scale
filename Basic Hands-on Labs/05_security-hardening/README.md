# Lab 05: Security Hardening
## Objectives:
- Run containers as non-root
- Drop Linux capabilities
- Use read-only filesystem

## Instructions:
1. Build:
   ```bash
   docker build -t secure-image .
   ```
2. Run:
   ```bash
   docker run --read-only --cap-drop ALL secure-image
   ```
