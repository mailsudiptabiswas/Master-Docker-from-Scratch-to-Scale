# Lab 08: Backup and Restore
## Objectives:
- Backup volumes using `tar`
- Export/import container data

## Instructions:
1. Run a container with named volume:
```bash
docker run -v data-vol:/data --name target-container busybox sh -c "echo Backup > /data/file.txt"
```

2. Run backup:
```bash
./backup_volume.sh
```
