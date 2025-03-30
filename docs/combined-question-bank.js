const questionBank = [
  {
    "type": "MCQ",
    "question": "What is a container in the context of Docker?",
    "option1": "A virtual machine",
    "option2": "A lightweight, standalone, executable package of software",
    "option3": "A Linux kernel replacement",
    "option4": "A network protocol",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which of the following best describes Docker?",
    "option1": "A programming language",
    "option2": "A hypervisor",
    "option3": "A containerization platform",
    "option4": "A database engine",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the main advantage of Docker over traditional VMs?",
    "option1": "Better GUI",
    "option2": "Requires more resources",
    "option3": "Faster startup and lightweight",
    "option4": "Requires a dedicated OS",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What command is used to check installed Docker version?",
    "option1": "docker check",
    "option2": "docker -v",
    "option3": "docker install version",
    "option4": "docker show",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which component of Docker builds images from a Dockerfile?",
    "option1": "Docker Engine",
    "option2": "Docker Daemon",
    "option3": "Docker Builder",
    "option4": "Docker CLI",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "True or False: Containers include an entire guest operating system.",
    "option1": "True",
    "option2": "False\n\u2705 Answer: B\n\ud83d\udca1 Explanation: Unlike VMs, containers share the host OS kernel and do not include a full OS.\n\nQ7. What is the default base image for most minimal containers?\nA) Ubuntu\nB) CentOS",
    "option3": "Alpine",
    "option4": "BusyBox",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command is used to list all Docker containers (running and stopped)?",
    "option1": "docker ls -a",
    "option2": "docker container show",
    "option3": "docker ps -a",
    "option4": "docker run list",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the name of the Docker component that runs in the background and manages containers?",
    "option1": "Docker CLI",
    "option2": "Docker Client",
    "option3": "Docker Daemon",
    "option4": "Docker Machine",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of the following commands pulls a Docker image from DockerHub?",
    "option1": "docker push",
    "option2": "docker get",
    "option3": "docker pull",
    "option4": "docker fetch",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker run hello-world do?",
    "option1": "Starts a new Docker container with a test image",
    "option2": "Runs the Docker daemon",
    "option3": "Launches a web server",
    "option4": "Displays Docker networking info",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which of the following is NOT true about Docker containers?",
    "option1": "They are lightweight",
    "option2": "They can run isolated services",
    "option3": "They always run on Windows",
    "option4": "They are based on images",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What flag is used with docker run to remove a container after it stops?",
    "option1": "--kill",
    "option2": "--rm",
    "option3": "--clean",
    "option4": "--prune",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is DockerHub?",
    "option1": "A text editor",
    "option2": "A monitoring dashboard",
    "option3": "A public container image registry",
    "option4": "A GUI for Docker Desktop",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command shows Docker system-wide information?",
    "option1": "docker status",
    "option2": "docker show",
    "option3": "docker stats",
    "option4": "docker info",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "What is the minimum supported OS for Docker Engine on Linux?",
    "option1": "Ubuntu 16.04+",
    "option2": "Windows XP",
    "option3": "Fedora CoreOS",
    "option4": "Alpine only",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which command is used to install Docker on Ubuntu from the official repo?",
    "option1": "sudo apt install docker.io",
    "option2": "docker install ubuntu",
    "option3": "apt docker",
    "option4": "docker start",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of docker group on Linux?",
    "option1": "Add GUI support",
    "option2": "Manage Docker networking",
    "option3": "Run Docker as non-root",
    "option4": "Enable Docker Enterprise",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command checks if the Docker service is running?",
    "option1": "docker status",
    "option2": "docker run",
    "option3": "systemctl status docker",
    "option4": "docker-service",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the official method to install Docker Compose v2+?",
    "option1": "Python pip",
    "option2": "Built-in with Docker CLI",
    "option3": "docker-compose install",
    "option4": "Snap store",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command verifies Docker Compose is installed?",
    "option1": "docker-compose -version",
    "option2": "docker compose version",
    "option3": "docker compose -v",
    "option4": "All of the above",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "What file needs to be present to run docker compose up?",
    "option1": "Dockerfile",
    "option2": ".env",
    "option3": "docker-compose.yml",
    "option4": "compose.json",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What port does Docker typically expose for its internal registry?",
    "option1": "8080",
    "option2": "5000",
    "option3": "3000",
    "option4": "443",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is required before installing Docker Compose on CentOS manually?",
    "option1": "Yum update",
    "option2": "Go compiler",
    "option3": "pip3",
    "option4": "curl & Git",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which command installs Docker on Amazon Linux 2?",
    "option1": "yum install docker",
    "option2": "apt install docker",
    "option3": "dnf docker-install",
    "option4": "amazon-linux-docker",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Docker Compose v1 was written in which language?",
    "option1": "Python",
    "option2": "Go",
    "option3": "JavaScript",
    "option4": "Rust",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What command pulls Docker images defined in Compose file without starting containers?",
    "option1": "docker compose pull",
    "option2": "docker-compose images",
    "option3": "docker pull",
    "option4": "compose fetch",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What\u2019s the easiest way to install Docker on macOS?",
    "option1": "Brew install",
    "option2": ".pkg installer",
    "option3": "Docker Desktop",
    "option4": "Build from source",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "After installing Docker, which group must a Linux user join?",
    "option1": "root",
    "option2": "docker",
    "option3": "wheel",
    "option4": "daemon",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which Docker Compose command brings down the services and removes volumes?",
    "option1": "docker compose kill",
    "option2": "docker compose down -v",
    "option3": "docker compose stop",
    "option4": "docker remove",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What are the three core components of Docker architecture?",
    "option1": "Docker Engine, Docker Hub, Docker Swarm",
    "option2": "Docker Client, Docker Daemon, Docker Objects",
    "option3": "Docker Compose, Docker API, Dockerfile",
    "option4": "Docker VM, Docker OS, Docker Agent",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What role does the Docker Daemon (dockerd) play?",
    "option1": "Hosts the Docker GUI",
    "option2": "Builds Docker images only",
    "option3": "Listens to requests from Docker client and manages Docker objects",
    "option4": "Only deploys Swarm services",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is a Docker object?",
    "option1": "An image only",
    "option2": "Any unit of configuration like image, container, volume, or network",
    "option3": "A file on the host",
    "option4": "A log file",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does the command docker images do?",
    "option1": "Lists active containers",
    "option2": "Lists all Docker images stored locally",
    "option3": "Downloads new images",
    "option4": "Runs image stats",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the difference between docker stop and docker kill?",
    "option1": "stop kills instantly; kill exits gracefully",
    "option2": "No difference",
    "option3": "stop sends SIGTERM, kill sends SIGKILL",
    "option4": "kill pauses the container",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker exec allow you to do?",
    "option1": "Create a volume",
    "option2": "Launch a new container",
    "option3": "Run a command inside a running container",
    "option4": "List Docker services",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What flag is used to run a container interactively with a terminal session?",
    "option1": "-d",
    "option2": "--volume",
    "option3": "-it",
    "option4": "-rm",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of the following commands lists all Docker networks?",
    "option1": "docker networks",
    "option2": "docker list network",
    "option3": "docker network ls",
    "option4": "docker show net",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of docker inspect?",
    "option1": "Start container",
    "option2": "See low-level JSON details of containers, networks, volumes, etc.",
    "option3": "Clean image cache",
    "option4": "View log summary",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What command is used to attach your terminal to a running container\u2019s output?",
    "option1": "docker connect",
    "option2": "docker attach",
    "option3": "docker logs",
    "option4": "docker shell",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command permanently deletes a Docker image?",
    "option1": "docker delete",
    "option2": "docker clean",
    "option3": "docker rmi <image>",
    "option4": "docker shutdown",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which Docker command lets you rename an existing container?",
    "option1": "docker rename",
    "option2": "docker tag",
    "option3": "docker alias",
    "option4": "docker label",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What does the docker ps command show by default?",
    "option1": "Running containers",
    "option2": "All containers",
    "option3": "Only stopped containers",
    "option4": "All active volumes",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What command is used to tag an image before pushing to a registry?",
    "option1": "docker mark",
    "option2": "docker tag",
    "option3": "docker push",
    "option4": "docker version",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which component handles building and running containers in Docker\u2019s architecture?",
    "option1": "Docker Registry",
    "option2": "Docker Client",
    "option3": "Docker Daemon",
    "option4": "Docker Container Engine",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is a Dockerfile?",
    "option1": "A binary blob to store containers",
    "option2": "A configuration file used to build Docker images",
    "option3": "A tool to run Kubernetes clusters",
    "option4": "A backup file for container logs",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which instruction in a Dockerfile sets the base image?",
    "option1": "START",
    "option2": "COPY",
    "option3": "FROM",
    "option4": "BASE",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the correct syntax to copy files into an image?",
    "option1": "COPY . to /path",
    "option2": "INTO ./app",
    "option3": "COPY src/ /app/",
    "option4": "ADD src app",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the difference between ADD and COPY in a Dockerfile?",
    "option1": "COPY supports remote URLs",
    "option2": "ADD unpacks tar files and supports URLs",
    "option3": "ADD is deprecated",
    "option4": "COPY is for Windows only",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command in a Dockerfile sets environment variables?",
    "option1": "EXPOSE",
    "option2": "ENV",
    "option3": "RUN",
    "option4": "ARG",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command runs only at build time?",
    "option1": "CMD",
    "option2": "ENTRYPOINT",
    "option3": "RUN",
    "option4": "ENV",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What\u2019s the default command that executes when a container starts?",
    "option1": "RUN",
    "option2": "CMD",
    "option3": "ENTRYPOINT",
    "option4": "ENV",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "True or False: You can use multiple CMD instructions in a Dockerfile.",
    "option1": "True",
    "option2": "False\n\u2705 Answer: B\n\ud83d\udca1 Explanation: Only the last CMD takes effect; earlier ones are overridden.\nQ9. How can you reduce Docker image size?\nA) Use multiple RUN instructions\nB) Use Alpine as base image",
    "option3": "Install everything in separate layers",
    "option4": "Always include GUI tools",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Where is the Docker image stored after build?",
    "option1": "On DockerHub",
    "option2": "In the container",
    "option3": "In the local Docker image cache",
    "option4": "In the .dockerfile folder",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of the following are valid Dockerfile instructions?\n\u2705 FROM\n\u2705 CMD\n\u2705 RUN\n\u274c INIT\n\ud83d\udca1 Explanation: Only FROM, CMD, and RUN are valid instructions.\n\nQ12. In multi-stage builds, which benefits apply?\n\u2705 Smaller final image\n\u2705 Better build-time separation\n\u274c More RAM usage at runtime\n\u2705 Compile-time dependency exclusion\n\ud83d\udca1 Explanation: Multi-stage builds allow optimized final images by excluding unnecessary tools.\n\nQ13. Which files are commonly ignored by .dockerignore?\n\u2705 .git\n\u2705 node_modules/\n\u2705 *.log\n\u274c Dockerfile\n\ud83d\udca1 Explanation: You usually want to exclude large or sensitive files, but not the Dockerfile.\n\nQ14. When using CMD, which form allows overriding at runtime?\n\u2705 CMD [\"python\", \"app.py\"]\n\u2705 CMD app.py\n\u274c CMD {\"run\": \"bash\"}\n\ud83d\udca1 Explanation: Shell and exec form of CMD support override; invalid JSON formats are not allowed.\n\nQ15. Which instructions support variable substitution via ARG?\n\u2705 ENV\n\u2705 RUN\n\u2705 COPY (as destination)\n\u274c FROM (before Docker v17.05)\n\ud83d\udca1 Explanation: Variable substitution works in most layers but FROM support was added in v17.05+.\n\n\nChapter 5: Working with Docker Containers\n\u2705 MCQ Questions\nQ1. What does the docker run command do?",
    "option1": "Starts Docker Engine",
    "option2": "Pulls an image and starts a container",
    "option3": "Installs Docker",
    "option4": "Builds Docker images",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command starts a stopped container?",
    "option1": "docker init",
    "option2": "docker restart",
    "option3": "docker start",
    "option4": "docker create",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "How do you name a container when launching it?",
    "option1": "docker run --title mycontainer",
    "option2": "docker run --container-name mycontainer",
    "option3": "docker run --name mycontainer",
    "option4": "docker create --setname mycontainer",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which flag removes a container once it stops?",
    "option1": "--destroy",
    "option2": "--auto-remove",
    "option3": "--rm",
    "option4": "--exit",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker ps -a show?",
    "option1": "Only running containers",
    "option2": "Only stopped containers",
    "option3": "All containers (running and stopped)",
    "option4": "Only system containers",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What command allows executing a command inside a running container?",
    "option1": "docker bash",
    "option2": "docker exec",
    "option3": "docker attach",
    "option4": "docker load",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "How do you stop a running container gracefully?",
    "option1": "docker kill",
    "option2": "docker stop",
    "option3": "docker pause",
    "option4": "docker delete",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What happens when you run docker container prune?",
    "option1": "Restarts containers",
    "option2": "Shows logs",
    "option3": "Removes all stopped containers",
    "option4": "Deletes volumes",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker logs <container> display?",
    "option1": "Docker CLI history",
    "option2": "Container event stream",
    "option3": "STDOUT and STDERR of the container",
    "option4": "System logs",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "How do you list all volumes on your system?",
    "option1": "docker show volumes",
    "option2": "docker volumes",
    "option3": "docker volume ls",
    "option4": "docker logs --volumes",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What flags can be used with docker run?\n\u2705 --rm\n\u2705 --name\n\u2705 -d\n\u274c --compose\n\ud83d\udca1 Explanation: These are valid container options; --compose is not a valid run flag.\n\nQ12. Which of the following are valid container lifecycle commands?\n\u2705 docker start\n\u2705 docker stop\n\u2705 docker restart\n\u274c docker repeat\n\ud83d\udca1 Explanation: docker repeat is not a real command.\n\nQ13. Which of these help debug a running container?\n\u2705 docker logs\n\u2705 docker exec\n\u2705 docker top\n\u274c docker rename\n\ud83d\udca1 Explanation: logs, exec, and top help inspect containers; rename does not.\n\nQ14. Which commands remove a container permanently?\n\u2705 docker rm\n\u2705 docker container rm\n\u274c docker delete\n\u274c docker stop\n\ud83d\udca1 Explanation: docker rm variants remove containers; stop only halts them.\n\nQ15. What can you do with docker attach?\n\u2705 Reconnect to a container's STDOUT/STDERR\n\u2705 View interactive processes\n\u274c Execute new commands\n\u274c Attach to a stopped container\n\ud83d\udca1 Explanation: attach connects you to the container\u2019s live output.\n\n\nChapter 6: Data Management \u2013 Volumes and Networks\n\u2705 MCQ Questions (1\u201310)\n\nQ1. Which command creates a named volume in Docker?",
    "option1": "docker create volume myvol",
    "option2": "docker volume create myvol",
    "option3": "docker volume --new myvol",
    "option4": "docker new volume myvol",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the default mount path for Docker volumes inside containers?",
    "option1": "/docker",
    "option2": "/mnt",
    "option3": "/var/lib/docker/volumes",
    "option4": "/data",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of the following are types of Docker volumes?",
    "option1": "Bind Mounts, Named Volumes, tmpfs",
    "option2": "USB Mounts, Logs, RAMFS",
    "option3": "S3 Buckets, Git Mounts, Swap",
    "option4": "Hard Links, Symlinks, ISO",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which flag is used to mount a volume when running a container?",
    "option1": "--bind",
    "option2": "--mount",
    "option3": "--volume or -v",
    "option4": "Both B and C",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "How would you inspect a volume named mydata?",
    "option1": "docker volume ls mydata",
    "option2": "docker inspect volume mydata",
    "option3": "docker volume inspect mydata",
    "option4": "docker info volume mydata",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What happens when you delete a volume in use by a container?",
    "option1": "The container crashes",
    "option2": "The volume is marked deleted but not removed",
    "option3": "Docker throws an error",
    "option4": "The container deletes itself",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of these is a use case for bind mounts?",
    "option1": "Sharing configuration files from the host",
    "option2": "Logging metrics into Elasticsearch",
    "option3": "Isolating container memory",
    "option4": "Running GPU workloads",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which command lists all Docker networks?",
    "option1": "docker networks",
    "option2": "docker net show",
    "option3": "docker network ls",
    "option4": "docker list networks",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which network driver is used by default in Docker?",
    "option1": "overlay",
    "option2": "host",
    "option3": "bridge",
    "option4": "none",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker network inspect <network> show?",
    "option1": "Only running containers",
    "option2": "Low-level details like connected containers and configs",
    "option3": "Docker registry logs",
    "option4": "Kubernetes node list",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What are valid volume types in Docker?\n\u2705 Named Volumes\n\u2705 Bind Mounts\n\u2705 tmpfs\n\u274c Cloud Block Volumes\n\ud83d\udca1 Explanation: Only the first three are supported natively.\n\nQ12. What can you do with docker volume subcommands?\n\u2705 Create a volume\n\u2705 Inspect a volume\n\u2705 Remove a volume\n\u274c List container ports\n\ud83d\udca1 Explanation: Port listing is unrelated to volume commands.\n\nQ13. Which actions will not persist data after container restart?\n\u274c Use bind mount\n\u274c Use named volume\n\u2705 Use anonymous volume without reference\n\u2705 Store data inside container FS\n\ud83d\udca1 Explanation: Anonymous and in-container storage are ephemeral.\n\nQ14. Which of the following are valid --mount usage keys?\n\u2705 type=\n\u2705 source=\n\u2705 target=\n\u274c input=\n\ud83d\udca1 Explanation: Docker uses type=volume|bind, source=, target=.\n\nQ15. Which drivers support multi-host networking (Swarm)?\n\u2705 overlay\n\u274c bridge\n\u274c host\n\u2705 macvlan\n\ud83d\udca1 Explanation: overlay supports multi-host connectivity in Docker Swarm.\n\nQ16. What are effects of --network=host?\n\u2705 Bypasses container NAT\n\u2705 Shares host's network stack\n\u274c Isolates all ports\n\u2705 Used in performance-sensitive setups\n\ud83d\udca1 Explanation: --network=host lets containers use host's networking directly.\n\nQ17. Docker volumes are useful for:\n\u2705 Persisting databases\n\u2705 Sharing files between containers\n\u274c Setting CPU limits\n\u2705 Backing up data\n\ud83d\udca1 Explanation: Volumes are essential for persistence and backup use cases.\n\nQ18. What can be defined in a custom Docker network?\n\u2705 Subnet and IP range\n\u2705 Network driver\n\u2705 Gateway address\n\u274c Container filesystem layout\n\ud83d\udca1 Explanation: Networking options can be customized using --subnet, --gateway, and driver.\n\nQ19. What happens when you remove a network in use?\n\u2705 Docker throws an error\n\u274c It removes the network silently\n\u274c It stops all containers\n\u274c It switches to bridge network\n\ud83d\udca1 Explanation: You can\u2019t remove a network that is in use by active containers.\n\nQ20. Which of the following will you typically find in a docker-compose.yml volume config?\n\u2705 volumes: section\n\u2705 External volume flag\n\u2705 Named volume references\n\u274c IP address bindings\n\ud83d\udca1 Explanation: Volumes are defined for service sharing and persistence, not for IP config.\n\n\nChapter 7: Introduction to Docker Compose\nIncludes both MCQ (Multiple Choice) and DOMC (Discrete Option Multiple Choice) formats.\n\n\u2705 MCQ Questions (1\u201310)\n\nQ1. What is the primary purpose of Docker Compose?",
    "option1": "Managing Docker Swarm nodes",
    "option2": "Configuring container networking",
    "option3": "Defining and running multi-container Docker applications",
    "option4": "Building Docker images",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the default filename Docker Compose looks for?",
    "option1": "compose.yml",
    "option2": "docker-compose.json",
    "option3": "composefile.yaml",
    "option4": "docker-compose.yml",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "Which command starts all services in a Compose file?",
    "option1": "docker-compose up",
    "option2": "docker-compose start",
    "option3": "docker-compose run",
    "option4": "docker start-compose",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "How do you run Docker Compose in detached mode?",
    "option1": "docker-compose start",
    "option2": "docker-compose run -d",
    "option3": "docker-compose up -d",
    "option4": "docker-compose deploy",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker-compose down do?",
    "option1": "Stops services only",
    "option2": "Stops and removes containers, networks, and volumes",
    "option3": "Deletes all images",
    "option4": "Updates running containers",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "In a docker-compose.yml, what section defines services?",
    "option1": "containers:",
    "option2": "docker:",
    "option3": "services:",
    "option4": "apps:",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which file is used to define environment-specific overrides?",
    "option1": "docker-compose.override.yml",
    "option2": ".env",
    "option3": "env_config.yml",
    "option4": "config.json",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What does the depends_on keyword do?",
    "option1": "Runs containers in sequence",
    "option2": "Links to another image",
    "option3": "Sets resource limits",
    "option4": "Creates named volumes",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "How can you scale a service using Docker Compose?",
    "option1": "docker-compose scale service=3",
    "option2": "docker-compose --replicas 3",
    "option3": "docker-compose replicate",
    "option4": "docker-compose deploy",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What format is used for writing Compose files?",
    "option1": "JSON",
    "option2": "INI",
    "option3": "YAML",
    "option4": "XML",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which commands are valid for Docker Compose?\n\u2705 docker-compose up\n\u2705 docker-compose down\n\u2705 docker-compose ps\n\u274c docker-compose mount\n\ud83d\udca1 Explanation: Mounting is handled in YAML; no direct CLI command exists.\n\nQ12. What can be defined inside a docker-compose.yml service?\n\u2705 image:\n\u2705 build:\n\u2705 volumes:\n\u274c firewall:\n\ud83d\udca1 Explanation: Services can define build context, image, ports, networks, and volumes.\n\nQ13. What are effects of using docker-compose stop?\n\u2705 Stops all running containers\n\u274c Deletes networks and volumes\n\u274c Removes images\n\u2705 Keeps containers on disk\n\ud83d\udca1 Explanation: stop only halts containers without removing resources.\n\nQ14. Which options can be passed to docker-compose up?\n\u2705 --build\n\u2705 --remove-orphans\n\u274c --save\n\u2705 --force-recreate\n\ud83d\udca1 Explanation: Compose supports many options for rebuilding, cleaning, or recreating services.\n\nQ15. What behaviors are defined in docker-compose.override.yml?\n\u2705 Environment overrides\n\u2705 Dev-time volume mounts\n\u274c Registry replication\n\u2705 Logging adjustments\n\ud83d\udca1 Explanation: It allows fine-tuning config per environment.\n\nQ16. Which sections can define volumes in Compose?\n\u2705 volumes: root section\n\u2705 services.volumes:\n\u274c services.env:\n\u274c volumes.datafiles:\n\ud83d\udca1 Explanation: Volumes can be declared globally and assigned per service.\n\nQ17. What are reasons to use Docker Compose?\n\u2705 Simplified orchestration\n\u2705 Infrastructure-as-code\n\u2705 Easy dev/test workflows\n\u274c Fine-grained RBAC\n\ud83d\udca1 Explanation: RBAC is handled by Kubernetes, not Compose.\n\nQ18. Compose files can include...\n\u2705 Custom networks\n\u2705 Logging configs\n\u2705 Environment variables\n\u274c Host BIOS settings\n\ud83d\udca1 Explanation: Compose supports network, logging, envs \u2014 not hardware-level configs.\n\nQ19. What happens if a volume is not declared in Compose?\n\u2705 It is created as an anonymous volume\n\u274c The service fails\n\u274c It points to /tmp\n\u2705 A warning is printed\n\ud83d\udca1 Explanation: Docker will auto-create an unnamed volume if one isn't declared.\n\nQ20. Compose environments can be made dynamic by:\n\u2705 Using .env files\n\u2705 Variable substitution ${}\n\u2705 Multiple Compose files\n\u274c Editing Docker source code\n\ud83d\udca1 Explanation: Compose supports .env, dynamic configs, and layering YAMLs.\n\n\nChapter 8: Advanced Docker Compose\n\u2705 MCQ Questions (1\u201310)\nQ1. What does the build: keyword in a Compose file define?",
    "option1": "Image name",
    "option2": "Location of Dockerfile or build context",
    "option3": "Run command",
    "option4": "Volume mount",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which version of Docker Compose supports long syntax like deploy: and resources:?",
    "option1": "v1 only",
    "option2": "v2 only",
    "option3": "v3 and above",
    "option4": "All versions",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of docker-compose.override.yml?",
    "option1": "Stores override logic for deployments",
    "option2": "Used to override service definitions in docker-compose.yml",
    "option3": "Overrides the Dockerfile",
    "option4": "Overrides CLI options",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which keyword sets memory limits in a Compose service?",
    "option1": "cpu_quota",
    "option2": "mem_limit",
    "option3": "deploy.resources.limits.memory",
    "option4": "runtime.memory",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "In Compose v3+, which deployment mode supports scaling?",
    "option1": "single",
    "option2": "global",
    "option3": "replicated",
    "option4": "rolling",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "How do you define a shared network in Compose?",
    "option1": "Inside services: only",
    "option2": "In networks: root section",
    "option3": "With dns: tag",
    "option4": "Using cluster: option",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What flag can you use with docker-compose to apply multiple YAML files?",
    "option1": "--file",
    "option2": "--config",
    "option3": "--compose",
    "option4": "--context",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which Compose feature allows environment substitution like ${PORT}?",
    "option1": "Interpolation",
    "option2": "Parameter injection",
    "option3": "Dynamic binding",
    "option4": "Container templating",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What is the function of secrets: in Docker Compose?",
    "option1": "Secure shell access",
    "option2": "Build environment injection",
    "option3": "Secure distribution of sensitive data like passwords",
    "option4": "Encrypt Docker volumes",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of these is NOT a supported key under deploy: in Compose v3?",
    "option1": "mode",
    "option2": "resources",
    "option3": "restart",
    "option4": "placement",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which are valid ways to scale services in Compose?\n\u2705 Use --scale with docker-compose up\n\u2705 Define deploy.replicas in YAML\n\u274c Add replicas: under volumes:\n\u274c Use --replicate flag\n\ud83d\udca1 Explanation: Only --scale CLI and deploy.replicas in YAML are valid.\n\nQ12. In advanced Compose networking, what can you define per service?\n\u2705 Static IP within subnet\n\u2705 Network alias\n\u2705 Custom bridge\n\u274c Router table routes\n\ud83d\udca1 Explanation: Docker allows IP, aliases, and driver options but not host-level routing.\n\nQ13. How can Compose improve environment management?\n\u2705 .env file support\n\u2705 Per-service environment: blocks\n\u2705 Variable substitution using ${}\n\u274c Terraform integration\n\ud83d\udca1 Explanation: Compose supports multiple environment approaches, not direct Terraform.\n\nQ14. What are benefits of using named volumes in Compose?\n\u2705 Data persistence\n\u2705 Reusability across services\n\u274c GPU acceleration\n\u2705 Volume lifecycle control\n\ud83d\udca1 Explanation: Named volumes are essential for persistent and shared storage.\n\nQ15. Which deployment-related fields exist in Compose v3 Swarm mode?\n\u2705 restart_policy\n\u2705 placement.constraints\n\u2705 update_config\n\u274c rollback_delay\n\ud83d\udca1 Explanation: Swarm services support placement, restart, and update control.\n\nQ16. Which features can be layered via multiple Compose files?\n\u2705 Development overrides\n\u2705 CI/CD adjustments\n\u2705 Dynamic port mappings\n\u274c Kernel-level parameters\n\ud83d\udca1 Explanation: Docker Compose supports configuration layering.\n\nQ17. What advanced features can you enable under build: in Compose?\n\u2705 Context path\n\u2705 Target stage (multi-stage build)\n\u2705 Dockerfile name\n\u274c Kernel swap control\n\ud83d\udca1 Explanation: Advanced builds can define context, target, and Dockerfile override.\n\nQ18. What\u2019s true about external: in volumes: or networks:?\n\u2705 It links to a pre-existing resource\n\u274c It always creates a new volume\n\u2705 Can be shared across Compose projects\n\u274c Required in all cases\n\ud83d\udca1 Explanation: external: true attaches to an existing object (volume/network).\n\nQ19. What happens when two Compose files define the same service?\n\u2705 Fields are merged with override preference\n\u274c Both services are ignored\n\u274c Compose crashes\n\u2705 Last defined file has higher precedence\n\ud83d\udca1 Explanation: Later files override fields from earlier ones.\n\nQ20. What options are available to run different environments using Compose?\n\u2705 Use -f to load different YAML files\n\u2705 Inject different .env files\n\u2705 Use profiles (v3.9+)\n\u274c Use BIOS firmware tagging\n\ud83d\udca1 Explanation: Compose supports custom profiles and file chaining for different environments.\n\n\nChapter 9: Docker in Production\n\u2705 MCQ Questions (1\u201310)\n\nQ1. What is a common method to limit CPU usage for a production container?",
    "option1": "--cpu-cores",
    "option2": "--cpus",
    "option3": "--cpu-limit",
    "option4": "--cores",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which logging driver would you typically use for production observability?",
    "option1": "json-file",
    "option2": "none",
    "option3": "syslog",
    "option4": "random",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What command ensures a container restarts automatically in production?",
    "option1": "--keep-alive",
    "option2": "--restart always",
    "option3": "--loop",
    "option4": "--resurrect",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which of these should be avoided in production Dockerfiles?",
    "option1": "FROM alpine",
    "option2": "COPY . . without .dockerignore",
    "option3": "RUN apk add",
    "option4": "EXPOSE 443",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the benefit of multi-stage builds in production?",
    "option1": "Faster run time",
    "option2": "Auto-scaling",
    "option3": "Smaller final image size",
    "option4": "Reduced network latency",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of a read-only root filesystem for containers?",
    "option1": "Prevent container logs",
    "option2": "Increase CPU performance",
    "option3": "Improve security by restricting write access",
    "option4": "Disable container access",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does the docker stats command show?",
    "option1": "Volume usage",
    "option2": "Network errors",
    "option3": "Live resource usage of running containers",
    "option4": "Build history",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of these is NOT a recommended way to store secrets in production?",
    "option1": "Environment variables",
    "option2": "Docker Swarm secrets",
    "option3": "Docker Volumes",
    "option4": "Hardcoded in Dockerfile",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "What happens when you use docker system prune in production?",
    "option1": "Restarts the container",
    "option2": "Cleans all unused data (containers, networks, images)",
    "option3": "Installs updates",
    "option4": "Performs backup",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which component is most commonly used for container orchestration in production?",
    "option1": "Docker Compose",
    "option2": "Kubernetes",
    "option3": "GitHub",
    "option4": "Jenkins",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which practices help reduce Docker image size?\n\u2705 Use Alpine or minimal base images\n\u2705 Combine RUN instructions\n\u2705 Clean up unnecessary packages\n\u274c Store data in container rootfs\n\ud83d\udca1 Explanation: Reducing layers and cleaning temp files leads to smaller images.\n\nQ12. Which restart policies are valid for production containers?\n\u2705 always\n\u2705 unless-stopped\n\u2705 on-failure\n\u274c on-success\n\ud83d\udca1 Explanation: Docker supports three restart options for fault tolerance.\n\nQ13. What should be monitored continuously in Docker production environments?\n\u2705 CPU and memory usage\n\u2705 Container health status\n\u2705 Container logs\n\u274c Docker Desktop license\n\ud83d\udca1 Explanation: Resource usage and logs help detect failures and optimize operations.\n\nQ14. What are some container hardening practices?\n\u2705 Run containers as non-root\n\u2705 Limit capabilities\n\u2705 Use read-only filesystem\n\u274c Mount / from host\n\ud83d\udca1 Explanation: Dropping privileges and filesystem lockdowns reduce attack surface.\n\nQ15. What options are available to log Docker container activity?\n\u2705 Use docker logs\n\u2705 Redirect logs to fluentd, ELK, or Loki\n\u274c Embed logs in images\n\u2705 Use centralized log drivers\n\ud83d\udca1 Explanation: Production setups require external log aggregation.\n\nQ16. What does docker update --memory allow you to do?\n\u2705 Change container memory limit\n\u274c Restart the container\n\u274c Remove all volumes\n\u2705 Apply runtime memory updates\n\ud83d\udca1 Explanation: docker update adjusts container resource limits.\n\nQ17. What mechanisms can prevent container compromise?\n\u2705 Seccomp profiles\n\u2705 AppArmor/SELinux policies\n\u2705 Read-only mounts\n\u274c Allowing all capabilities\n\ud83d\udca1 Explanation: Security modules like seccomp/AppArmor enforce strict access control.\n\nQ18. Where should image scanning be done in CI/CD pipelines?\n\u2705 Before pushing to registry\n\u2705 Before production deploy\n\u274c After rollout\n\u2705 As a security gate\n\ud83d\udca1 Explanation: Image scanning should occur early to catch vulnerabilities before deploy.\n\nQ19. Why is docker image prune dangerous in production?\n\u2705 Can delete unused but needed images\n\u274c Stops all containers\n\u2705 May break builds or rollbacks\n\u274c Deletes host OS\n\ud83d\udca1 Explanation: You risk removing images that aren\u2019t tagged but still in use.\n\nQ20. What are some production-ready logging best practices?\n\u2705 Use centralized log collectors\n\u2705 Add labels for log filtering\n\u2705 Use structured logs (JSON)\n\u274c Pipe logs to /dev/null\n\ud83d\udca1 Explanation: Logging should be secure, searchable, and structured.\n\n\nChapter 10: Advanced Docker Topics\nTopics include multi-stage builds, Docker Swarm, custom plugins, resource management, system tuning, and advanced runtime configuration. A mix of MCQ and DOMC formats.\n\n\u2705 MCQ Questions (1\u201310)\n\nQ1. What is the main use of multi-stage builds in Docker?",
    "option1": "Reduce image size by excluding build-time dependencies",
    "option2": "Create multi-node clusters",
    "option3": "Split Dockerfiles into multiple files",
    "option4": "Run containers in parallel",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What is the role of Docker Swarm?",
    "option1": "Build Docker images",
    "option2": "Distribute containerized apps across multiple nodes",
    "option3": "Manage GitHub workflows",
    "option4": "Monitor CPU usage",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does the docker plugin install command do?",
    "option1": "Creates a container",
    "option2": "Installs a third-party volume or network plugin",
    "option3": "Updates the Docker CLI",
    "option4": "Compiles a Dockerfile",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which of the following is true about tmpfs volumes?",
    "option1": "Stored permanently",
    "option2": "Shared between containers",
    "option3": "Stored in memory (RAM) only",
    "option4": "Saved to Docker Hub",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the effect of the --ulimit flag in Docker?",
    "option1": "Limits log file size",
    "option2": "Controls CPU priority",
    "option3": "Sets resource limits like max file descriptors",
    "option4": "Enables GPU",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command is used to encrypt secrets in Docker Swarm?",
    "option1": "docker secret encrypt",
    "option2": "docker secret create",
    "option3": "docker login",
    "option4": "docker swarm encrypt",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What flag enables GPU access in Docker (with NVIDIA runtime)?",
    "option1": "--gpu",
    "option2": "--enable-gpu",
    "option3": "--runtime=nvidia",
    "option4": "--docker-gpu",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the maximum number of overlay networks Docker Swarm can support by default?",
    "option1": "Unlimited",
    "option2": "10",
    "option3": "256",
    "option4": "1000",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the function of the docker context command?",
    "option1": "Change base images",
    "option2": "Switch between multiple Docker environments (local, remote, cloud)",
    "option3": "Run containers in Swarm",
    "option4": "Build in Kubernetes",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which file configures Docker daemon-level settings like log driver and default runtime?",
    "option1": "docker-compose.yml",
    "option2": "Dockerfile",
    "option3": "/etc/docker/daemon.json",
    "option4": "/var/run/docker.sock",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which are valid options in docker run to restrict resource usage?\n\u2705 --memory\n\u2705 --cpus\n\u2705 --pids-limit\n\u274c --cores\n\ud83d\udca1 Explanation: You can control memory, CPU shares, and max processes.\n\nQ12. What advanced networking modes exist in Docker?\n\u2705 macvlan\n\u2705 overlay\n\u2705 host\n\u274c clustered\n\ud83d\udca1 Explanation: macvlan, overlay, host, and none are Docker networking modes.\n\nQ13. What are the features of Docker Swarm?\n\u2705 Service discovery\n\u2705 Load balancing\n\u2705 Multi-host networking\n\u274c Kubernetes API\n\ud83d\udca1 Explanation: Swarm includes built-in service orchestration features.\n\nQ14. What does docker stack deploy do?\n\u2705 Deploys Compose-defined services to a Swarm cluster\n\u274c Builds Docker images\n\u2705 Runs a production workload\n\u274c Updates host OS\n\ud83d\udca1 Explanation: This is the preferred method to deploy in Swarm mode using Compose v3+ files.\n\nQ15. What components can be monitored using docker events?\n\u2705 Image pull/push\n\u2705 Container stop/start\n\u2705 Volume creation\n\u274c BIOS boot sequence\n\ud83d\udca1 Explanation: Docker events help track real-time system activity.\n\nQ16. What are characteristics of multi-host networking with overlay driver?\n\u2705 Encrypts traffic\n\u2705 Uses VXLAN\n\u2705 Requires Swarm mode\n\u274c Available in standalone mode\n\ud83d\udca1 Explanation: Overlay networking requires Swarm for service-to-service communication.\n\nQ17. Which of these are considered Docker runtimes?\n\u2705 runc\n\u2705 nvidia-container-runtime\n\u274c rundocker\n\u2705 kata-runtime\n\ud83d\udca1 Explanation: Docker supports pluggable runtimes for containers.\n\nQ18. Which scenarios justify using Docker plugins?\n\u2705 External storage drivers\n\u2705 Custom network drivers\n\u274c Web server extensions\n\u2705 Volume encryption\n\ud83d\udca1 Explanation: Plugins extend core Docker functionality like storage/network.\n\nQ19. What are the benefits of using Docker Context?\n\u2705 Seamless switch between environments (e.g., Docker Desktop, remote, EKS)\n\u2705 Better dev/prod separation\n\u274c Modify system kernel\n\u2705 Simplifies remote deployments\n\ud83d\udca1 Explanation: Context allows switching Docker targets without setting DOCKER_HOST manually.\n\nQ20. How does Swarm handle service scaling?\n\u2705 Uses replicas config\n\u2705 Automatically rebalances containers\n\u274c Requires manual migration\n\u2705 Supports docker service scale\n\ud83d\udca1 Explanation: Scaling in Swarm is declarative and easy via replicas and CLI commands.\n\ud83d\udcd8 Chapter 11: Docker Security \u2014 From Basics to Advanced\n\u2705 MCQ Questions (1\u201315)\n\nQ1. What Linux feature does Docker use to isolate containers?",
    "option1": "Systemd",
    "option2": "iptables",
    "option3": "Namespaces",
    "option4": "CRON",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does Docker's --cap-drop=ALL flag do?",
    "option1": "Drops image layers",
    "option2": "Disables all default Linux capabilities in the container",
    "option3": "Removes user privileges",
    "option4": "Enables GPU",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which command runs Docker containers as a non-root user?",
    "option1": "docker run --rootless",
    "option2": "docker run --user 1001",
    "option3": "docker secure",
    "option4": "docker drop-root",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does the read-only filesystem option do?",
    "option1": "Deletes log files",
    "option2": "Prevents writing inside the container",
    "option3": "Encrypts the container",
    "option4": "Prevents container start",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is Docker Content Trust (DCT)?",
    "option1": "Container restart policy",
    "option2": "Image signing and verification",
    "option3": "Trusted volumes",
    "option4": "Overlay encryption",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What tool scans Docker images for known CVEs?",
    "option1": "Nmap",
    "option2": "Trivy",
    "option3": "Ansible",
    "option4": "GParted",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the function of AppArmor or SELinux in Docker?",
    "option1": "Limit network ports",
    "option2": "Enforce mandatory access controls (MAC)",
    "option3": "Allocate memory",
    "option4": "Enable logging",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which Docker runtime offers lightweight VM isolation?",
    "option1": "runc",
    "option2": "kata-runtime",
    "option3": "nvidia-container-runtime",
    "option4": "hyperdocker",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does a USER instruction in Dockerfile do?",
    "option1": "Installs packages",
    "option2": "Sets the user for container processes",
    "option3": "Logs in as root",
    "option4": "Changes directory",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What type of secret storage is supported in Docker Swarm?",
    "option1": "Encrypted file mounts",
    "option2": "TLS secret store",
    "option3": "docker secret objects",
    "option4": "IAM tokens",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which flag restricts the number of processes inside a container?",
    "option1": "--proc-limit",
    "option2": "--pid-limit",
    "option3": "--pids-limit",
    "option4": "--max-proc",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of these is NOT a default Docker security feature?",
    "option1": "Linux namespaces",
    "option2": "Seccomp filters",
    "option3": "Firewall whitelist",
    "option4": "Control groups (cgroups)",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does docker scan do?",
    "option1": "Compresses containers",
    "option2": "Checks for image vulnerabilities",
    "option3": "Monitors CPU",
    "option4": "Kills malware",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What should .dockerignore always exclude for security?",
    "option1": "node_modules",
    "option2": ".env, .git, secrets",
    "option3": "/tmp",
    "option4": "All logs",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which behavior should be avoided in production containers?",
    "option1": "Read-only volumes",
    "option2": "--privileged flag",
    "option3": "Multi-stage builds",
    "option4": "Disabling root access",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which of the following enhance Docker container security?\n\u2705 Non-root users (--user or USER)\n\u2705 AppArmor/SELinux profiles\n\u2705 Dropping capabilities (--cap-drop)\n\u274c Always running as root\n\ud83d\udca1 Explanation: Principle of least privilege should always be followed.\n\nQ17. What are valid seccomp actions in a profile?\n\u2705 SCMP_ACT_ERRNO\n\u2705 SCMP_ACT_ALLOW\n\u274c SCMP_ACT_KILLALL\n\u2705 SCMP_ACT_TRAP\n\ud83d\udca1 Explanation: Seccomp defines fine-grained syscall rules for containers.\n\nQ18. What should a secure Dockerfile include?\n\u2705 USER instruction\n\u2705 Minimal base image\n\u274c ADD https://... instead of COPY\n\u2705 Cleanup of build-time dependencies\n\ud83d\udca1 Explanation: Small images + non-root users = better security posture.\n\nQ19. When should you scan images for vulnerabilities?\n\u2705 At build-time\n\u2705 Before pushing to registry\n\u2705 In CI/CD pipelines\n\u274c Only after production deployment\n\ud83d\udca1 Explanation: Earlier scanning prevents CVEs from entering production.\n\nQ20. What benefits do rootless containers offer?\n\u2705 Prevent daemon-level privilege escalation\n\u2705 Use UID namespaces\n\u274c Faster GPU performance\n\u2705 Safer multi-tenant environments\n\ud83d\udca1 Explanation: Rootless mode minimizes damage in case of container compromise.\n\nQ21. Which hardening techniques apply to Docker networks?\n\u2705 Disable inter-container communication\n\u2705 Use --icc=false\n\u2705 Isolate networks with firewalls\n\u274c Use host network everywhere\n\ud83d\udca1 Explanation: Avoid exposing unnecessary open networks in production.\n\nQ22. Which --cap-drop options are safe for production?\n\u2705 ALL\n\u2705 Specific dangerous caps like SYS_ADMIN, NET_ADMIN\n\u274c CHOWN, SETUID in all cases\n\u274c Drop everything in dev containers\n\ud83d\udca1 Explanation: Drop only what's not needed and avoid dangerous ones.\n\nQ23. Where are Docker Swarm secrets mounted?\n\u2705 Inside container at /run/secrets/\n\u274c Directly into ENV\n\u274c On the host OS\n\u2705 Ephemeral memory filesystem\n\ud83d\udca1 Explanation: Swarm secrets are mounted as tmpfs (RAM only) for added safety.\n\nQ24. What are signs of a compromised container?\n\u2705 Unknown outbound traffic\n\u2705 CPU/memory spikes\n\u2705 File system tampering\n\u274c Normal logs\n\ud83d\udca1 Explanation: Monitoring is key to detecting abnormal behavior.\n\nQ25. How can you test container security during development?\n\u2705 Lint Dockerfile\n\u2705 Use Trivy/Snyk\n\u2705 Enable DCT\n\u274c Disable all runtime limits\n\ud83d\udca1 Explanation: Use static/dynamic analysis early in the dev cycle.\n\nQ26. What runtime flags enhance Docker security?\n\u2705 --read-only\n\u2705 --pids-limit=100\n\u2705 --cap-drop=ALL\n\u274c --privileged\n\ud83d\udca1 Explanation: These reduce container attack surface.\n\nQ27. How does Docker isolate network interfaces by default?\n\u2705 Uses bridge network\n\u2705 NATs IP traffic\n\u2705 Requires EXPOSE + -p to allow traffic\n\u274c Exposes everything automatically\n\ud83d\udca1 Explanation: Containers are isolated unless explicitly published.\n\nQ28. Which base images are considered secure?\n\u2705 alpine\n\u2705 Official debian-slim\n\u2705 distroless\n\u274c random:latest\n\ud83d\udca1 Explanation: Smaller, verified images reduce surface area and risk.\n\nQ29. What tools help enforce security policies in CI/CD for containers?\n\u2705 Docker Bench for Security\n\u2705 Trivy\n\u2705 Open Policy Agent (OPA)\n\u274c SSH remote bash scripts\n\ud83d\udca1 Explanation: Use scanners and policy enforcers to catch insecure builds.\n\nQ30. What role does audit logging play in container security?\n\u2705 Tracks unauthorized access\n\u2705 Helps in incident response\n\u2705 Logs container events\n\u274c Speeds up builds\n\ud83d\udca1 Explanation: Proper logging is essential for auditing and detection.\n\ud83d\udcd8 Chapter 12: Docker Networking \u2014 From Basics to Advanced\n\u2705 MCQ Questions (1\u201315)\n\nQ1. What is Docker's default network driver?",
    "option1": "host",
    "option2": "overlay",
    "option3": "bridge",
    "option4": "none",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does the docker network ls command do?",
    "option1": "Shows connected volumes",
    "option2": "Lists all Docker networks",
    "option3": "Displays current container IPs",
    "option4": "Starts the network service",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does the --network=host flag do?",
    "option1": "Assigns an external IP",
    "option2": "Binds container directly to the host network stack",
    "option3": "Blocks all networking",
    "option4": "Creates a virtual bridge",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is required to create a custom bridge network?",
    "option1": "docker network create --driver bridge <name>",
    "option2": "Use the host\u2019s IP",
    "option3": "Edit /etc/docker/bridge.conf",
    "option4": "Compose override file",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which network mode provides container-level isolation?",
    "option1": "host",
    "option2": "none",
    "option3": "bridge",
    "option4": "overlay",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of docker inspect <network>?",
    "option1": "Create VLANs",
    "option2": "Show DNS cache",
    "option3": "Display network details in JSON",
    "option4": "Delete subnets",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "How can you connect a container to multiple networks?",
    "option1": "Define --multinet",
    "option2": "Use docker network connect",
    "option3": "Use --multi on run",
    "option4": "Use Dockerfile",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which Docker network allows containers on different hosts to communicate?",
    "option1": "bridge",
    "option2": "host",
    "option3": "overlay",
    "option4": "none",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the default subnet for Docker's bridge network?",
    "option1": "172.17.0.0/16",
    "option2": "10.0.0.0/8",
    "option3": "192.168.0.0/16",
    "option4": "127.0.0.0/8",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What does the --publish flag do when running a container?",
    "option1": "Connects to Swarm",
    "option2": "Assigns container to a named network",
    "option3": "Exposes container ports to the host",
    "option4": "Pushes to Docker Hub",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which DNS method does Docker use by default?",
    "option1": "External system resolver",
    "option2": "Container-level /etc/hosts",
    "option3": "Embedded DNS server (127.0.0.11)",
    "option4": "Google DNS",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the function of the --internal flag when creating networks?",
    "option1": "Allows access to the internet",
    "option2": "Disables inter-container communication",
    "option3": "Restricts network to internal communication only",
    "option4": "Connects to the default bridge",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What happens when you don\u2019t expose any ports in Docker?",
    "option1": "Container is unreachable externally",
    "option2": "All ports are open",
    "option3": "Container is assigned random ports",
    "option4": "Docker opens ports automatically",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What Docker command creates an overlay network?",
    "option1": "docker network deploy",
    "option2": "docker network create --driver overlay",
    "option3": "docker bridge overlay",
    "option4": "docker overlay enable",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What driver connects a container directly to a physical interface?",
    "option1": "host",
    "option2": "bridge",
    "option3": "macvlan",
    "option4": "overlay",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which of the following are Docker network drivers?\n\u2705 bridge\n\u2705 overlay\n\u2705 macvlan\n\u274c tunnel\n\ud83d\udca1 Explanation: These are all native Docker drivers; tunnel is not.\n\nQ17. What are valid port publishing formats?\n\u2705 -p 80:80\n\u2705 --publish 443:8443\n\u2705 -p 127.0.0.1:8080:80\n\u274c --expose-port 80\n\ud83d\udca1 Explanation: Docker allows IP binding, host:container format.\n\nQ18. Which tools help monitor Docker networking in production?\n\u2705 docker network inspect\n\u2705 netstat, ss\n\u2705 cAdvisor\n\u274c nano\n\ud83d\udca1 Explanation: Network monitoring tools are essential in secure deployments.\n\nQ19. Which Swarm network features are enabled by default in overlay mode?\n\u2705 Service discovery\n\u2705 Built-in DNS resolution\n\u2705 Multi-host encrypted traffic\n\u274c External NAT routing\n\ud83d\udca1 Explanation: Swarm overlay offers secure multi-node communication.\n\nQ20. When is host networking useful?\n\u2705 For performance-critical workloads\n\u2705 When exact host port access is needed\n\u274c When multi-tenancy is needed\n\u274c When isolation is critical\n\ud83d\udca1 Explanation: Host network gives the best performance but least isolation.\n\nQ21. Which docker-compose.yml fields support network configuration?\n\u2705 networks: (root section)\n\u2705 services:<svc>.networks:\n\u274c services:<svc>.bridge:\n\u2705 driver: under networks\n\ud83d\udca1 Explanation: Compose supports custom network drivers and scoped attachments.\n\nQ22. What can docker network disconnect be used for?\n\u2705 Detach a container from a network\n\u274c Block IP traffic\n\u2705 Change container\u2019s active network\n\u274c Attach container to a volume\n\ud83d\udca1 Explanation: It removes a container\u2019s network association.\n\nQ23. What limitations exist for macvlan networks?\n\u2705 Works only with static IPs\n\u2705 Not available on Docker Desktop by default\n\u2705 Requires physical NIC or bridge\n\u274c Supports Swarm overlay\n\ud83d\udca1 Explanation: macvlan is powerful but hardware-restricted.\n\nQ24. What makes overlay network secure for production?\n\u2705 Encrypted VXLAN tunnels\n\u2705 Mutual TLS between nodes\n\u274c Firewall bypass\n\u2705 DNS-based service discovery\n\ud83d\udca1 Explanation: All traffic is encrypted and routed securely in overlay networks.\n\nQ25. What flags are used with docker run for networking?\n\u2705 --network=host\n\u2705 --network=none\n\u2705 --ip\n\u274c --vlan\n\ud83d\udca1 Explanation: IP-level customization is supported with proper flags.\n\nQ26. Which components use embedded DNS in Docker?\n\u2705 Containers on user-defined bridge networks\n\u2705 Swarm services\n\u2705 Overlay networks\n\u274c Containers on legacy bridge\n\ud83d\udca1 Explanation: Embedded DNS is available in user-defined and overlay networks.\n\nQ27. What can go wrong with duplicated port mappings?\n\u2705 Conflict errors\n\u2705 Container start failures\n\u274c Silent pass-through\n\u2705 Port collision on host\n\ud83d\udca1 Explanation: Ports must be unique on the host unless using different IP bindings.\n\nQ28. What are signs of network misconfiguration in Docker?\n\u2705 Containers can't resolve names\n\u2705 DNS failures\n\u2705 Unreachable containers across nodes\n\u274c Running logs only\n\ud83d\udca1 Explanation: Swarm networking requires DNS + routing to work correctly.\n\nQ29. How do containers communicate across custom networks?\n\u2705 By name (Docker DNS)\n\u2705 Via IP\n\u274c MAC-only\n\u2705 If on the same user-defined network\n\ud83d\udca1 Explanation: Docker provides service discovery over user networks.\n\nQ30. Which Compose version supports advanced network config?\n\u2705 v2.1+\n\u2705 v3+ (for Swarm)\n\u274c v1.0 only\n\u2705 v3.8 for profiles\n\ud83d\udca1 Explanation: Use newer Compose versions for Swarm, secrets, networks, profiles.\n\nChapter 13: Best Practices and Container Hardening\nMCQ Questions (1\u201315)\n\nQ1. What is the recommended base image type for secure, minimal containers?",
    "option1": "Ubuntu Full",
    "option2": "Node:latest",
    "option3": "Alpine or Distroless",
    "option4": "ArchLinux",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Why should you avoid using latest as the image tag in production?",
    "option1": "It is faster",
    "option2": "latest is not always predictable",
    "option3": "It breaks volume mounts",
    "option4": "It increases container size",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of .dockerignore in image builds?",
    "option1": "Prevent secrets and unnecessary files from entering images",
    "option2": "Mount volumes",
    "option3": "Add metadata",
    "option4": "Define user accounts",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What is one benefit of combining RUN commands in Dockerfile?",
    "option1": "Lower container port",
    "option2": "Fewer image layers",
    "option3": "Adds logging",
    "option4": "Supports GPU",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What\u2019s the risk of leaving a container with root privileges?",
    "option1": "None",
    "option2": "It can escape and control host resources",
    "option3": "It consumes more memory",
    "option4": "It disables DNS",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which instruction in Dockerfile switches from root to non-root user?",
    "option1": "LOGIN",
    "option2": "USER",
    "option3": "RUN drop-root",
    "option4": "CMD",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What should be done with unused Docker images on production hosts?",
    "option1": "Retag them",
    "option2": "Leave them for backups",
    "option3": "Prune or remove them",
    "option4": "Export as tar",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What Dockerfile instruction is preferred over ADD for copying files?",
    "option1": "RUN",
    "option2": "COPY",
    "option3": "EXPOSE",
    "option4": "USER",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is a container \"healthcheck\"?",
    "option1": "Checks memory limits",
    "option2": "Defines a command that determines container\u2019s health",
    "option3": "Launches the container",
    "option4": "Prunes images",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Why should you scan images in CI/CD pipelines?",
    "option1": "To check performance",
    "option2": "To reduce logging",
    "option3": "To detect known vulnerabilities before deployment",
    "option4": "To install Docker",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What does the --read-only flag do at container runtime?",
    "option1": "Enables DNS",
    "option2": "Prevents write access inside container",
    "option3": "Deletes volumes",
    "option4": "Sets restart policy",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Why is multi-stage Dockerfile better in production?",
    "option1": "Automatically creates containers",
    "option2": "Reduces image size by separating build-time and run-time environments",
    "option3": "Allows multiple ports",
    "option4": "Builds in RAM",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the role of a non-root user in container hardening?",
    "option1": "Saves memory",
    "option2": "Reduces access to host system resources",
    "option3": "Speeds up startup",
    "option4": "Disables container logs",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What should be done with sensitive environment variables in Docker?",
    "option1": "Hardcode in Dockerfile",
    "option2": "Use .env and inject at runtime",
    "option3": "Publish in README",
    "option4": "Ignore them",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is the benefit of labels in Dockerfiles and containers?",
    "option1": "GPU support",
    "option2": "Better UI",
    "option3": "Metadata tagging for tracking, scanning, automation",
    "option4": "Networking",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What improves image build performance and security?\n\u2705 Using multi-stage builds\n\u2705 Using COPY instead of ADD\n\u2705 Clean up build tools with RUN apt-get remove\n\u274c Installing build dependencies at runtime\n\ud83d\udca1 Explanation: You should always remove unneeded build dependencies.\n\nQ17. What are valid flags for limiting container resources?\n\u2705 --memory=512m\n\u2705 --cpus=1.5\n\u2705 --pids-limit=100\n\u274c --disk-speed=fast\n\ud83d\udca1 Explanation: CPU, memory, and PIDs can be limited at runtime.\n\nQ18. What are effects of --cap-drop=ALL?\n\u2705 Removes all Linux kernel capabilities\n\u2705 Improves isolation\n\u274c Grants root by default\n\u2705 You can selectively re-add only what's required\n\ud83d\udca1 Explanation: Fewer capabilities = better security.\n\nQ19. What causes image bloat in Dockerfiles?\n\u2705 Unnecessary dependencies\n\u2705 Copying large files\n\u274c Specifying ENTRYPOINT\n\u2705 Failing to clean package manager caches\n\ud83d\udca1 Explanation: Always clean with apt-get clean, rm -rf /var/lib/apt/lists/*.\n\nQ20. What are examples of sensitive files that must be in .dockerignore?\n\u2705 .env\n\u2705 .git/\n\u2705 id_rsa or SSH keys\n\u274c README.md\n\ud83d\udca1 Explanation: Prevent secrets and credentials from ending up in built images.\n\nQ21. What security scanners are available for Docker images?\n\u2705 Trivy\n\u2705 Grype\n\u2705 Docker Scan (Snyk)\n\u274c tcpdump\n\ud83d\udca1 Explanation: These tools scan for CVEs, tcpdump is a packet analyzer.\n\nQ22. Why should containers be ephemeral?\n\u2705 To simplify lifecycle and avoid state management\n\u274c To speed up the internet\n\u2705 Stateless design improves scalability\n\u274c To allow privilege escalation\n\ud83d\udca1 Explanation: Stateless containers follow microservices best practices.\n\nQ23. Which instructions should be minimized or avoided in Dockerfiles?\n\u2705 ADD (unless required)\n\u2705 RUN apt-get upgrade -y\n\u2705 RUN curl | bash\n\u274c USER appuser\n\ud83d\udca1 Explanation: Avoid anything that downloads unknown content at build-time.\n\nQ24. What behaviors reduce container attack surface?\n\u2705 Remove unnecessary tools\n\u2705 Use Distroless base images\n\u2705 Enable seccomp or AppArmor\n\u274c Allow --privileged flag\n\ud83d\udca1 Explanation: Only grant what\u2019s needed \u2014 follow least privilege principle.\n\nQ25. Where should image vulnerabilities be fixed?\n\u2705 In base image updates\n\u2705 In app dependencies\n\u2705 By removing outdated packages\n\u274c Ignored until incidents\n\ud83d\udca1 Explanation: Patch at the source before pushing images.\n\nQ26. What are best practices for volumes?\n\u2705 Mount only what's needed\n\u2705 Avoid writing to root filesystem\n\u2705 Restrict volume access\n\u274c Use host root (/) as bind mount\n\ud83d\udca1 Explanation: Never bind mount sensitive parts of host into a container.\n\nQ27. Which are safe practices for credentials?\n\u2705 Use secrets managers (Vault, Swarm Secrets)\n\u2705 Inject at runtime\n\u274c Add via ENV in Dockerfile\n\u2705 Rotate secrets regularly\n\ud83d\udca1 Explanation: Never store secrets in build layers.\n\nQ28. What can be audited using docker events or logs?\n\u2705 Image pulls\n\u2705 Container starts/stops\n\u2705 Volume usage\n\u274c Kernel logins\n\ud83d\udca1 Explanation: Docker events track Docker-level actions.\n\nQ29. What are common hardening steps for production containers?\n\u2705 Disable inter-container traffic\n\u2705 Use minimal images\n\u2705 Use non-root users\n\u274c Enable SSH inside containers\n\ud83d\udca1 Explanation: SSH adds risk; avoid unless absolutely necessary.\n\nQ30. What are goals of container hardening?\n\u2705 Reduce attack surface\n\u2705 Ensure runtime integrity\n\u2705 Enforce least privilege\n\u274c Increase image size\n\ud83d\udca1 Explanation: Smaller, minimal, and secure containers reduce risk.\n\n\u2705 You're now covered with security best practices + container hardening!\nNext Steps:\n\ud83d\udcd8 Proceed to Chapter 14: Docker CI/CD Automation\n\ud83d\udce4 Export full MCQ pack to Word/PDF\n\ud83e\uddea Generate a hardened container lab setup\nLet me know how you'd like to continue!\nGreat! Here\u2019s your full 30-question set for:\n\n\ud83d\udcd8 Chapter 14: Backup and Recovery in Docker\nThis chapter focuses on strategies, commands, best practices, and tooling for backup, disaster recovery, and state management in Docker environments. Includes MCQ and DOMC questions.\n\n\u2705 MCQ Questions (1\u201315)\n\nQ1. Which Docker component requires backup to preserve container state?",
    "option1": "Dockerfile",
    "option2": "Image tags",
    "option3": "Volumes",
    "option4": "Bridge network",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What command is used to export a running container's filesystem?",
    "option1": "docker backup",
    "option2": "docker export",
    "option3": "docker save",
    "option4": "docker archive",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which Docker command is used to back up an image for transport?",
    "option1": "docker export",
    "option2": "docker load",
    "option3": "docker save",
    "option4": "docker pull",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What\u2019s the primary difference between docker export and docker save?",
    "option1": "export backs up volumes",
    "option2": "save includes image history and layers; export is for containers only",
    "option3": "save compresses logs",
    "option4": "export is used for clusters",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What tool is recommended to back up Docker volumes?",
    "option1": "rsync, tar, or volume plugins",
    "option2": "docker save",
    "option3": "docker diff",
    "option4": "df -h",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which folder stores Docker volume data by default on Linux?",
    "option1": "/home/docker",
    "option2": "/var/docker/volumes",
    "option3": "/var/lib/docker/volumes/",
    "option4": "/etc/docker/",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command allows you to restore an exported container image?",
    "option1": "docker restore",
    "option2": "docker run",
    "option3": "docker import",
    "option4": "docker start",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command loads a saved image back into Docker?",
    "option1": "docker build",
    "option2": "docker import",
    "option3": "docker run",
    "option4": "docker load",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "What\u2019s a common use case for docker commit in backups?",
    "option1": "Capture live state of a running container as a new image",
    "option2": "Version control",
    "option3": "Back up logs",
    "option4": "Schedule jobs",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Why are bind mounts difficult to back up?",
    "option1": "Not persistent",
    "option2": "Tied to host path structure",
    "option3": "Encrypted",
    "option4": "Use secrets",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What are recommended best practices for Docker backup?",
    "option1": "Automate, test restores, encrypt archives",
    "option2": "Manual copy/paste",
    "option3": "Only back up logs",
    "option4": "Restart containers daily",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which file types should NOT be included in image backups?",
    "option1": ".env, .pem",
    "option2": "Secrets",
    "option3": "Config files",
    "option4": "Application binaries",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "In Docker Swarm, how are secrets backed up?",
    "option1": "Using docker secret backup",
    "option2": "Via docker inspect",
    "option3": "Secrets are not retrievable\u2014must be re-created",
    "option4": "docker cp",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of snapshotting Docker volumes?",
    "option1": "Shrink size",
    "option2": "Real-time backups for rollback",
    "option3": "Reduce RAM",
    "option4": "Clone image",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Why is it important to backup docker-compose.yml files?",
    "option1": "They store logs",
    "option2": "They define infrastructure and state",
    "option3": "They're encrypted",
    "option4": "They replace Dockerfile",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What are reliable ways to back up Docker volumes?\n\u2705 Use docker run with volume bind and tar\n\u2705 Use rsync to archive the volume path\n\u2705 Use Docker Volume plugins (e.g., Convoy, NetApp)\n\u274c Use docker save\n\ud83d\udca1 Explanation: Volumes must be archived manually or via plugins.\n\nQ17. What are the limitations of docker export?\n\u2705 It doesn\u2019t save volumes\n\u2705 It doesn\u2019t preserve history/layers\n\u274c It saves logs\n\u274c It includes secrets\n\ud83d\udca1 Explanation: Use it only for basic FS export.\n\nQ18. What are features of docker save/docker load?\n\u2705 Saves full image and metadata\n\u2705 Can be used across air-gapped systems\n\u2705 Supports offline transfer\n\u274c Stores container logs\n\ud83d\udca1 Explanation: Use for images, not logs or running state.\n\nQ19. When should you use docker commit?\n\u2705 Emergency snapshot of container\n\u274c Regular CI builds\n\u2705 Testing intermediate states\n\u274c Replace Dockerfile entirely\n\ud83d\udca1 Explanation: Commit is for exceptional snapshots.\n\nQ20. What should be included in disaster recovery plans?\n\u2705 Volume backup strategy\n\u2705 Image registry redundancy\n\u2705 Compose/YAML/Infra as code\n\u274c Random image pulls\n\ud83d\udca1 Explanation: Disaster recovery relies on planned, reproducible infra.\n\nQ21. What file format results from docker save?\n\u2705 .tar\n\u274c .img\n\u2705 Compressed tarball\n\u274c .yml\n\ud83d\udca1 Explanation: Docker save creates tar archives.\n\nQ22. What happens if you lose /var/lib/docker entirely?\n\u2705 Images, volumes, containers, and networks are lost\n\u274c Only logs disappear\n\u274c Auto-recovers from cloud\n\u2705 Requires full restore\n\ud83d\udca1 Explanation: It's Docker\u2019s working directory.\n\nQ23. What are benefits of automatic backup scheduling for Docker?\n\u2705 Reduced data loss\n\u2705 Regular rollback points\n\u2705 Supports compliance\n\u274c Slower containers\n\ud83d\udca1 Explanation: Automated backups are essential in production.\n\nQ24. What is a safe way to move a volume to another host?\n\u2705 Tar and transfer /var/lib/docker/volumes/<vol>\n\u2705 Use volume plugins with remote support\n\u274c Use docker push\n\u274c Use docker cp\n\ud83d\udca1 Explanation: Volumes must be manually or plugin-transferred.\n\nQ25. What should be tested during backup validation?\n\u2705 Can it be restored?\n\u2705 Data integrity (e.g., checksum)\n\u2705 Application boot post-restore\n\u274c Only file count\n\ud83d\udca1 Explanation: Always test real-world recovery scenarios.\n\nQ26. What tools support backup automation for Docker?\n\u2705 cron + bash scripts\n\u2705 Restic, Duplicity, Velero\n\u2705 CI/CD jobs\n\u274c docker logs\n\ud83d\udca1 Explanation: Automate via trusted backup tools.\n\nQ27. Which of the following are common causes of data loss in Docker environments?\n\u2705 Unmounted volumes\n\u2705 Bind mounts pointing to wrong path\n\u2705 No backup before container rebuild\n\u274c Having multiple .env files\n\ud83d\udca1 Explanation: Misconfigured mounts cause silent data loss.\n\nQ28. When backing up a live database volume, what should you do?\n\u2705 Lock or snapshot the DB\n\u2705 Use mysqldump or DB-native tools\n\u2705 Backup during low-traffic times\n\u274c Use docker cp blindly\n\ud83d\udca1 Explanation: Databases need consistent snapshots or exports.\n\nQ29. Where can you store Docker image backups securely?\n\u2705 S3 or MinIO\n\u2705 Encrypted drives\n\u2705 Cloud object storage\n\u274c Public GitHub repos\n\ud83d\udca1 Explanation: Security matters\u2014use encrypted and private storage.\n\nQ30. What defines a successful Docker recovery process?\n\u2705 Data integrity\n\u2705 Minimal downtime\n\u2705 Repeatable restoration steps\n\u274c Changing image IDs\n\ud83d\udca1 Explanation: Backup is only as good as the restore.\n\n\u2705 Done with Chapter 14!\nWould you like to:\n\ud83d\udcd8 Proceed to Chapter 15: Monitoring, Logging & Troubleshooting\n\ud83d\udce4 Export all questions (1\u201314) to Word or PDF\n\ud83e\uddea Generate a Docker backup & recovery checklist or lab script?\nLet me know!\nAbsolutely! Here's your full 30-question set for:\n\n\ud83d\udcd8 Chapter 15: Troubleshooting and Debugging in Docker\nCovers container diagnostics, logs, network issues, resource constraints, image failures, and debugging tools.\n\n\u2705 MCQ Questions (1\u201315)\n\nQ1. What command shows the live logs of a running container?",
    "option1": "docker monitor",
    "option2": "docker logs <container>",
    "option3": "docker watch",
    "option4": "docker debug",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What flag follows logs in real-time?",
    "option1": "--stream",
    "option2": "-f or --follow",
    "option3": "--tail",
    "option4": "--monitor",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What command enters an interactive shell in a running container?",
    "option1": "docker ssh",
    "option2": "docker access",
    "option3": "docker exec -it <container> sh",
    "option4": "docker run --debug",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which command lists all running containers?",
    "option1": "docker show",
    "option2": "docker ps",
    "option3": "docker ls",
    "option4": "docker status",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What command shows system-wide resource usage by containers?",
    "option1": "docker inspect",
    "option2": "docker stats",
    "option3": "docker logs",
    "option4": "docker resource",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "How do you find the IP address of a running container?",
    "option1": "docker ip",
    "option2": "docker inspect <container>",
    "option3": "docker address",
    "option4": "docker net ip",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What Docker command shows detailed info about a container, network, or volume?",
    "option1": "docker logs",
    "option2": "docker system",
    "option3": "docker inspect",
    "option4": "docker config",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What tool shows low-level Docker host info?",
    "option1": "docker sysinfo",
    "option2": "docker system info",
    "option3": "docker info",
    "option4": "docker version",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the effect of docker events?",
    "option1": "Shows log history",
    "option2": "Starts audit logging",
    "option3": "Streams real-time Docker event messages (e.g., start/stop)",
    "option4": "Rebuilds container",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What\u2019s a common reason a container exits immediately?",
    "option1": "Image not pulled",
    "option2": "No volume mounted",
    "option3": "Entrypoint or CMD exits after execution",
    "option4": "Logs are full",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What happens if you use an incorrect port with -p?",
    "option1": "Nothing happens",
    "option2": "Container crashes",
    "option3": "Port binding error",
    "option4": "Volume disappears",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "How do you restart a stopped container?",
    "option1": "docker start <container>",
    "option2": "docker reset",
    "option3": "docker up",
    "option4": "docker relaunch",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which command shows the last exit code of a container?",
    "option1": "docker logs",
    "option2": "docker inspect",
    "option3": "docker ps -a",
    "option4": "docker restart",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which Dockerfile mistake commonly causes build failures?",
    "option1": "Multiple COPY instructions",
    "option2": "Not specifying FROM as the first line",
    "option3": "Having comments",
    "option4": "Using lowercase keywords",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What does docker-compose logs do?",
    "option1": "Shows container metadata",
    "option2": "Launches containers",
    "option3": "Displays logs from all services in Compose",
    "option4": "Restores volumes",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What are reasons a container becomes unresponsive?\n\u2705 Exceeded memory limit\n\u2705 App crashed inside\n\u274c Unused volume\n\u2705 Port conflict\n\ud83d\udca1 Explanation: Resource issues or crashes can freeze containers.\n\nQ17. What steps help debug a broken container?\n\u2705 docker logs\n\u2705 docker exec into it\n\u2705 Inspect exit code via docker ps -a\n\u274c Delete and recreate immediately\n\ud83d\udca1 Explanation: Always inspect before replacing.\n\nQ18. What can you find in docker inspect output?\n\u2705 IP address\n\u2705 Mounts and volumes\n\u2705 Entry point\n\u274c Terminal logs\n\ud83d\udca1 Explanation: inspect provides config metadata, not log data.\n\nQ19. Which of these can be analyzed using docker stats?\n\u2705 CPU %\n\u2705 Memory usage\n\u2705 Network throughput\n\u274c Dockerfile content\n\ud83d\udca1 Explanation: stats is live metrics only.\n\nQ20. What causes Image not found errors?\n\u2705 Image doesn't exist locally or in registry\n\u2705 Image tag is incorrect\n\u274c Host is offline\n\u2705 Registry requires login\n\ud83d\udca1 Explanation: Name, version, and access issues can cause this.\n\nQ21. How can you troubleshoot DNS resolution in containers?\n\u2705 Use docker exec + nslookup\n\u2705 Check embedded DNS (127.0.0.11)\n\u274c Restart the Docker daemon blindly\n\u2705 Inspect /etc/resolv.conf inside the container\n\ud83d\udca1 Explanation: Inspect container-level DNS settings.\n\nQ22. What are signs of a failing container healthcheck?\n\u2705 STATUS: unhealthy\n\u2705 Repeated restarts\n\u2705 Healthcheck log output\n\u274c High CPU\n\ud83d\udca1 Explanation: Docker marks healthcheck-failing containers as unhealthy.\n\nQ23. What commands help identify container crashes?\n\u2705 docker logs\n\u2705 docker ps -a\n\u2705 docker inspect\n\u274c docker build\n\ud83d\udca1 Explanation: Use logs + inspect + history.\n\nQ24. What causes permission denied errors in containers?\n\u2705 Wrong UID/GID\n\u2705 Files copied as root\n\u2705 Read-only filesystem\n\u274c Correct volume name\n\ud83d\udca1 Explanation: File ownership matters in mounted volumes.\n\nQ25. Which flags make docker run helpful for debugging?\n\u2705 -it\n\u2705 --rm\n\u2705 --entrypoint /bin/sh\n\u274c --detach\n\ud83d\udca1 Explanation: Run interactively to debug before daemonizing.\n\nQ26. When would docker events be useful?\n\u2705 Trace container lifecycle\n\u2705 Audit network changes\n\u274c View CPU usage\n\u2705 Track restart loops\n\ud83d\udca1 Explanation: Events stream useful operational metadata.\n\nQ27. What problems might incorrect bind mounts cause?\n\u2705 App can't find files\n\u2705 Permission errors\n\u274c Network latency\n\u2705 Overwrite host paths\n\ud83d\udca1 Explanation: Bind mount path and permissions must be managed carefully.\n\nQ28. What is the output of docker system df?\n\u2705 Image and volume disk usage\n\u2705 Total reclaimable space\n\u2705 Container storage\n\u274c File descriptor leaks\n\ud83d\udca1 Explanation: Use it to analyze space utilization.\n\nQ29. What happens if you restart the Docker daemon?\n\u2705 Running containers continue\n\u2705 Docker resets internal state\n\u274c All volumes are deleted\n\u2705 May clear logs depending on driver\n\ud83d\udca1 Explanation: Containers can persist, but logs may rotate.\n\nQ30. What can help identify Docker network issues?\n\u2705 docker network inspect\n\u2705 docker exec ping\n\u2705 tcpdump inside the container\n\u274c Only docker ps\n\ud83d\udca1 Explanation: Combine Docker network commands + internal tools.\n\n\u2705 Done with Chapter 15: Troubleshooting and Debugging!\nWould you like to:\n\ud83d\udcd8 Proceed to Bonus Chapter 16: CI/CD Pipeline with GitHub Actions + DockerHub\n\ud83d\udce4 Export all MCQ + DOMC to Word/PDF\n\ud83e\uddea Generate a real-world lab troubleshooting checklist\nLet me know your next move!\n\n\n\n\nAbsolutely! Here's a set of 30 advanced-level MCQ & DOMC questions derived from real-world case studies across Docker use cases discussed in your book \u2014 including Netflix, Amazon, Flipkart, DevSecOps, Infrastructure Ops, Blockchain, and others.\n\n\ud83d\udcd8 Chapter 16: Real-World Case Study Questions \u2014 Docker in Action\nBased on actual deployments, best practices, failure recoveries, scaling strategies, and architecture design decisions.\n\n\u2705 MCQ Questions (1\u201315)\n\nQ1. How does Netflix leverage containers in its architecture?",
    "option1": "To run monolithic workloads",
    "option2": "To manage video streaming CDN",
    "option3": "For microservices scalability and deployment automation",
    "option4": "Only for internal dev tools",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "In Amazon's case, what feature enables secure multi-tenant deployments using Docker?",
    "option1": "Shared host mount",
    "option2": "AWS Fargate with container-level IAM roles",
    "option3": "Privileged mode",
    "option4": "EC2 shell scripts",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Flipkart reduced deployment time using which Docker-native feature?",
    "option1": "Docker Secrets",
    "option2": "Docker Compose",
    "option3": "Multi-stage builds with CI pipelines",
    "option4": "Remote debugging",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "In DevSecOps pipelines, what tool is commonly used for Docker image vulnerability scanning?",
    "option1": "Docker logs",
    "option2": "Trivy or Grype",
    "option3": "Kubernetes",
    "option4": "Prometheus",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What challenge did Flipkart face before adopting Docker?",
    "option1": "Frequent app crashes",
    "option2": "Infrastructure provisioning delays",
    "option3": "Image version conflicts",
    "option4": "Too many microservices",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "How does DevSecOps improve response to containerized malware threats?",
    "option1": "Using reverse proxies",
    "option2": "Continuous scanning + signature-based rules",
    "option3": "Secrets hardcoding",
    "option4": "Sudo inside containers",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What is a key Docker feature used in blockchain applications (Hyperledger, Ethereum)?",
    "option1": "Bridge network",
    "option2": "Volume encryption",
    "option3": "Containerized node replication",
    "option4": "Dockerfile caching",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "Which Docker technique allows Netflix to do reliable chaos testing?",
    "option1": "Immutable containers",
    "option2": "Canary deployments",
    "option3": "Healthchecks",
    "option4": "Simulated container failures",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "Which DevSecOps principle helps prevent vulnerable Docker images in production?",
    "option1": "Post-deploy scans",
    "option2": "Pre-commit scanning and blocking",
    "option3": "Always use :latest",
    "option4": "Embed credentials in image",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "How did Flipkart use Docker Compose to improve testing?",
    "option1": "Manual service launching",
    "option2": "Grouped services for end-to-end integration testing",
    "option3": "CI/CD log streaming",
    "option4": "Volume rollback",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What container orchestration platform is commonly integrated in large-scale setups like Amazon\u2019s backend?",
    "option1": "Apache Mesos",
    "option2": "Docker Swarm",
    "option3": "Kubernetes",
    "option4": "Vagrant",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "In infrastructure operations, how is container memory leak identified?",
    "option1": "docker logs",
    "option2": "docker stats",
    "option3": "docker ps -a",
    "option4": "docker load",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "How is container rollback achieved in disaster recovery scenarios?",
    "option1": "Volume snapshots and restored image",
    "option2": "Using docker logs",
    "option3": "SSH access",
    "option4": "Updating the Dockerfile",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What hardening step did DevSecOps pipelines introduce to prevent runtime privilege escalation?",
    "option1": "Use --privileged",
    "option2": "Apply SELinux policies",
    "option3": "Use root user",
    "option4": "Turn off firewall",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "In blockchain environments, why are isolated networks used for containers?",
    "option1": "To reduce log noise",
    "option2": "For privacy and consensus isolation",
    "option3": "For faster builds",
    "option4": "No reason",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What are valid CI/CD tools integrated with Docker pipelines (e.g., Flipkart)?\n\u2705 Jenkins\n\u2705 GitHub Actions\n\u2705 GitLab CI\n\u274c Notepad++\n\ud83d\udca1 Explanation: DevOps tools automate image builds and deployments.\n\nQ17. What monitoring techniques are used by Amazon for Docker clusters?\n\u2705 Prometheus + Grafana\n\u2705 AWS CloudWatch\n\u2705 Container-level alerts\n\u274c Cron logs\n\ud83d\udca1 Explanation: Amazon uses native and open-source observability tools.\n\nQ18. What container failure conditions are simulated by Netflix Chaos Monkey?\n\u2705 Random shutdowns\n\u2705 Service crashes\n\u2705 Network delays\n\u274c Backup restore\n\ud83d\udca1 Explanation: Chaos Engineering ensures resilience by simulating failures.\n\nQ19. In DevSecOps pipelines, where are secrets stored securely?\n\u2705 Vault\n\u2705 Docker Swarm Secrets\n\u2705 AWS Secrets Manager\n\u274c Dockerfile ENV variables\n\ud83d\udca1 Explanation: Secrets must be managed externally and injected at runtime.\n\nQ20. How is container scaling managed in Flipkart\u2019s setup?\n\u2705 Docker Swarm\n\u2705 Kubernetes Horizontal Pod Autoscaler (HPA)\n\u2705 CI-triggered scaling\n\u274c Static memory allocation\n\ud83d\udca1 Explanation: Flipkart scales using dynamic orchestration + autoscalers.\n\nQ21. What type of containers did the Blockchain case study use?\n\u2705 Stateless + stateful hybrid\n\u2705 Ethereum-based node clusters\n\u274c Lambda functions\n\u2705 Signed base images\n\ud83d\udca1 Explanation: Full nodes with persistent volumes were used.\n\nQ22. What key metrics are monitored in infrastructure-heavy Docker environments?\n\u2705 Container uptime\n\u2705 CPU/memory/network\n\u2705 Healthcheck status\n\u274c Terminal background color\n\ud83d\udca1 Explanation: Resource-level metrics drive auto-remediation.\n\nQ23. What challenge does Docker solve in decentralized finance (DeFi) apps?\n\u2705 Node containerization for fast onboarding\n\u2705 GPU optimization\n\u274c Centralized logging\n\u2705 Multi-chain compatibility\n\ud83d\udca1 Explanation: Docker accelerates blockchain node deployment and upgrades.\n\nQ24. What is the goal of Canary deployments in CI/CD pipelines?\n\u2705 Gradual rollout to detect issues\n\u2705 Faster rebuilds\n\u274c Simulate outages\n\u2705 A/B testing\n\ud83d\udca1 Explanation: Canary strategy minimizes risk by exposing a subset of users first.\n\nQ25. What command helps investigate blocked ports in production Docker setups?\n\u2705 docker ps\n\u2705 netstat or ss inside container\n\u2705 docker inspect\n\u274c docker logs\n\ud83d\udca1 Explanation: Use container shell + system commands for port issues.\n\nQ26. What best practices from DevSecOps are used for image validation?\n\u2705 Signature verification\n\u2705 Digest pinning\n\u2705 DCT (Docker Content Trust)\n\u274c Using latest tag\n\ud83d\udca1 Explanation: Always lock and sign images.\n\nQ27. What disaster recovery strategies were applied in the case studies?\n\u2705 Volume backup + recovery\n\u2705 GitOps-based redeploy\n\u2705 Registry sync\n\u274c Docker commit in prod\n\ud83d\udca1 Explanation: Automated recovery flows ensure resilience.\n\nQ28. What architecture layer is often containerized in blockchain apps?\n\u2705 Smart contract runner\n\u2705 Ledger node (Geth, Fabric Peer)\n\u2705 API gateway\n\u274c Browser extension\n\ud83d\udca1 Explanation: Nodes and services are containerized for modular scaling.\n\nQ29. What scheduling strategy is used by DevSecOps to test containers periodically?\n\u2705 Cron-based scanners\n\u2705 GitOps merge triggers\n\u2705 Sidecar scanning containers\n\u274c Manual rebuilds\n\ud83d\udca1 Explanation: Automation keeps images compliant over time.\n\nQ30. What combination of tools supports full-stack container ops in Flipkart or Amazon?\n\u2705 Docker + Kubernetes + Helm\n\u2705 Grafana + Prometheus\n\u2705 GitHub Actions + Snyk + Vault\n\u274c PHPMyAdmin only\n\ud83d\udca1 Explanation: Production stacks use orchestrators, scanners, secrets, and CI tools together.\n\n\u2705 Let me know if you'd like to:\n\ud83d\udce4 Export all questions to Word/PDF\n\ud83e\uddea Generate an interactive practice exam\n\ud83d\udcd8 Proceed to Certification Readiness & Bonus Labs\nShall we continue?\nAwesome! Here's your full 30-question set for:\n\n\ud83d\udcd8 Chapter 17: CI/CD Pipeline with GitHub Actions + DockerHub\nThis chapter covers automating Docker builds, testing, pushing to DockerHub, integrating GitHub Actions, secrets handling, and end-to-end CI/CD best practices.\n\n\u2705 MCQ Questions (1\u201315)\n\nQ1. What is the purpose of GitHub Actions in a CI/CD pipeline?",
    "option1": "Store Docker images",
    "option2": "Manage cloud hosting",
    "option3": "Automate workflows such as testing, building, and deploying",
    "option4": "View Docker logs",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What GitHub file triggers a Docker build and push workflow?",
    "option1": ".dockerignore",
    "option2": "dockerfile.yml",
    "option3": ".github/workflows/<workflow>.yml",
    "option4": "docker-compose.yml",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is required to push to DockerHub from GitHub Actions?",
    "option1": "Dockerfile in a repo",
    "option2": "Manual login",
    "option3": "DockerHub credentials stored as GitHub secrets",
    "option4": "Kubernetes YAML",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What command logs into DockerHub in GitHub Actions workflows?",
    "option1": "docker login -u $USER -p $PASS",
    "option2": "gh login docker",
    "option3": "kubectl push",
    "option4": "dockerhub login",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What GitHub Action step builds the Docker image?",
    "option1": "run: make docker",
    "option2": "run: docker build -t your-image-name .",
    "option3": "image: build",
    "option4": "build: docker.yml",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which of the following is a valid GitHub Action trigger for CI/CD?",
    "option1": "on: push",
    "option2": "on: pull_request",
    "option3": "on: schedule",
    "option4": "All of the above",
    "answer": 4
  },
  {
    "type": "MCQ",
    "question": "What is the benefit of multi-stage Docker builds in CI/CD pipelines?",
    "option1": "Supports Kubernetes",
    "option2": "Reduces image size",
    "option3": "Auto-deploys YAMLs",
    "option4": "Adds health checks",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What GitHub Action keyword is used to define secrets?",
    "option1": "env:",
    "option2": "with:",
    "option3": "secrets:",
    "option4": "docker:",
    "answer": 3
  },
  {
    "type": "MCQ",
    "question": "What is the purpose of the uses: keyword in GitHub Actions?",
    "option1": "Run shell script",
    "option2": "Invoke an existing GitHub Action or Docker action",
    "option3": "Pull image",
    "option4": "Create a new branch",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What step ensures your image is pushed to DockerHub only on main branch commits?",
    "option1": "if: github.ref == 'refs/heads/main'",
    "option2": "run: git branch",
    "option3": "trigger: manual",
    "option4": "docker: validate",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What does jobs: define in a workflow file?",
    "option1": "Git branches",
    "option2": "Job names, steps, environments",
    "option3": "YAML syntax",
    "option4": "Deployment region",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "What action does docker/build-push-action perform?",
    "option1": "Creates Dockerfile",
    "option2": "Builds and optionally pushes Docker image",
    "option3": "Runs shell",
    "option4": "Adds logging",
    "answer": 2
  },
  {
    "type": "MCQ",
    "question": "Which base image is recommended for GitHub Actions Docker builds?",
    "option1": "ubuntu-latest",
    "option2": "debian",
    "option3": "node",
    "option4": "github/image",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "Which file should NOT be pushed to DockerHub?",
    "option1": "Secrets",
    "option2": ".dockerignore",
    "option3": "Dockerfile",
    "option4": "App source",
    "answer": 1
  },
  {
    "type": "MCQ",
    "question": "What happens if you don\u2019t log in to DockerHub before docker push?",
    "option1": "Docker auto-authenticates",
    "option2": "Image is saved locally",
    "option3": "Push fails with 401 Unauthorized",
    "option4": "GitHub builds a new token",
    "answer": 3
  },
  {
    "type": "DOMC",
    "question": "Which of the following are valid Dockerfile instructions?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "In multi-stage builds, which benefits apply?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which files are commonly ignored by .dockerignore?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When using CMD, which form allows overriding at runtime?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which instructions support variable substitution via ARG?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What flags can be used with docker run?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of the following are valid container lifecycle commands?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of these help debug a running container?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which commands remove a container permanently?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can you do with docker attach?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid volume types in Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can you do with docker volume subcommands?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which actions will not persist data after container restart?",
    "correct": false
  },
  {
    "type": "DOMC",
    "question": "Which of the following are valid --mount usage keys?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which drivers support multi-host networking (Swarm)?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are effects of --network=host?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Docker volumes are useful for:",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can be defined in a custom Docker network?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens when you remove a network in use?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of the following will you typically find in a docker-compose.yml volume config?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which commands are valid for Docker Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can be defined inside a docker-compose.yml service?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are effects of using docker-compose stop?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which options can be passed to docker-compose up?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What behaviors are defined in docker-compose.override.yml?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which sections can define volumes in Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are reasons to use Docker Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Compose files can include...",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens if a volume is not declared in Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Compose environments can be made dynamic by:",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which are valid ways to scale services in Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "In advanced Compose networking, what can you define per service?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How can Compose improve environment management?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are benefits of using named volumes in Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which deployment-related fields exist in Compose v3 Swarm mode?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which features can be layered via multiple Compose files?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What advanced features can you enable under build: in Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What\u2019s true about external: in volumes: or networks:?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens when two Compose files define the same service?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What options are available to run different environments using Compose?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which practices help reduce Docker image size?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which restart policies are valid for production containers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What should be monitored continuously in Docker production environments?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are some container hardening practices?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What options are available to log Docker container activity?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What does docker update --memory allow you to do?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What mechanisms can prevent container compromise?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Where should image scanning be done in CI/CD pipelines?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Why is docker image prune dangerous in production?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are some production-ready logging best practices?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which are valid options in docker run to restrict resource usage?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What advanced networking modes exist in Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are the features of Docker Swarm?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What does docker stack deploy do?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What components can be monitored using docker events?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are characteristics of multi-host networking with overlay driver?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of these are considered Docker runtimes?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which scenarios justify using Docker plugins?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are the benefits of using Docker Context?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How does Swarm handle service scaling?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of the following enhance Docker container security?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid seccomp actions in a profile?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What should a secure Dockerfile include?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When should you scan images for vulnerabilities?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What benefits do rootless containers offer?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which hardening techniques apply to Docker networks?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which --cap-drop options are safe for production?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Where are Docker Swarm secrets mounted?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are signs of a compromised container?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How can you test container security during development?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What runtime flags enhance Docker security?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How does Docker isolate network interfaces by default?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which base images are considered secure?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What tools help enforce security policies in CI/CD for containers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What role does audit logging play in container security?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of the following are Docker network drivers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid port publishing formats?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which tools help monitor Docker networking in production?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which Swarm network features are enabled by default in overlay mode?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When is host networking useful?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which docker-compose.yml fields support network configuration?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can docker network disconnect be used for?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What limitations exist for macvlan networks?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What makes overlay network secure for production?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What flags are used with docker run for networking?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which components use embedded DNS in Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can go wrong with duplicated port mappings?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are signs of network misconfiguration in Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How do containers communicate across custom networks?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which Compose version supports advanced network config?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What improves image build performance and security?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid flags for limiting container resources?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are effects of --cap-drop=ALL?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What causes image bloat in Dockerfiles?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are examples of sensitive files that must be in .dockerignore?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What security scanners are available for Docker images?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Why should containers be ephemeral?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which instructions should be minimized or avoided in Dockerfiles?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What behaviors reduce container attack surface?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Where should image vulnerabilities be fixed?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are best practices for volumes?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which are safe practices for credentials?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can be audited using docker events or logs?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are common hardening steps for production containers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are goals of container hardening?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are reliable ways to back up Docker volumes?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are the limitations of docker export?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are features of docker save/docker load?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When should you use docker commit?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What should be included in disaster recovery plans?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What file format results from docker save?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens if you lose /var/lib/docker entirely?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are benefits of automatic backup scheduling for Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What is a safe way to move a volume to another host?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What should be tested during backup validation?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What tools support backup automation for Docker?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of the following are common causes of data loss in Docker environments?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When backing up a live database volume, what should you do?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Where can you store Docker image backups securely?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What defines a successful Docker recovery process?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are reasons a container becomes unresponsive?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What steps help debug a broken container?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can you find in docker inspect output?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which of these can be analyzed using docker stats?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What causes Image not found errors?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How can you troubleshoot DNS resolution in containers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are signs of a failing container healthcheck?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What commands help identify container crashes?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What causes permission denied errors in containers?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Which flags make docker run helpful for debugging?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "When would docker events be useful?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What problems might incorrect bind mounts cause?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What is the output of docker system df?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens if you restart the Docker daemon?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What can help identify Docker network issues?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid CI/CD tools integrated with Docker pipelines (e.g., Flipkart)?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What monitoring techniques are used by Amazon for Docker clusters?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What container failure conditions are simulated by Netflix Chaos Monkey?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "In DevSecOps pipelines, where are secrets stored securely?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "How is container scaling managed in Flipkart\u2019s setup?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What type of containers did the Blockchain case study use?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What key metrics are monitored in infrastructure-heavy Docker environments?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What challenge does Docker solve in decentralized finance (DeFi) apps?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What is the goal of Canary deployments in CI/CD pipelines?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What command helps investigate blocked ports in production Docker setups?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What best practices from DevSecOps are used for image validation?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What disaster recovery strategies were applied in the case studies?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What architecture layer is often containerized in blockchain apps?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What scheduling strategy is used by DevSecOps to test containers periodically?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What combination of tools supports full-stack container ops in Flipkart or Amazon?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are examples of GitHub Actions runners?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are key elements of a DockerHub CI/CD pipeline?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What steps improve security in GitHub Action pipelines?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are common triggers for DockerHub CI/CD pipelines?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What\u2019s the purpose of semantic versioning in CI/CD image tagging?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid GitHub Actions best practices?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What tools can enhance Docker CI/CD debugging?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What is a multi-tag DockerHub push useful for?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What happens if you omit the Dockerfile path in the docker build step?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What does GITHUB_REF contain?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "Why use docker tag before pushing in CI/CD?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are valid registry destinations for GitHub Docker workflows?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What are ways to trigger image build when Dockerfile changes?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What should you validate post-push in DockerHub?",
    "correct": true
  },
  {
    "type": "DOMC",
    "question": "What makes a CI/CD Docker pipeline production-grade?",
    "correct": true
  }
];