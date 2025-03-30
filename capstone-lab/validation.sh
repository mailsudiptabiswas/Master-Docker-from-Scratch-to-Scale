#!/bin/bash
echo "🔍 Checking container health..."
docker ps --format "table {{.Names}}	{{.Status}}	{{.Ports}}"

echo "✅ Verifying app is healthy..."
curl -f http://localhost:5000/health && echo "✔️ App is healthy!" || echo "❌ App healthcheck failed."

echo "📊 Checking Grafana availability..."
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000
