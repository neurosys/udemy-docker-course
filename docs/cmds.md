
### docker run [-p <src port>:<dst port>] [-v <host path>:<guest path>] [-it] <image name> [alternative command]
Creates a container and then starts it using a default command or the alternative given one
-it run interactively
-p <src port>:<dst port> Everything that is received on <src port> (host machine) will be sent to <dst port> docker container
-v <host path>:<guest path> maps host folder inside docker to guest path
-v <guest path> tells docker that we want to use the folder inside the container, don't map it to anything

Examples
docker run busybox echo "Hi there"
docker run busybox ls


### docker ps
List all the running containers
> docker ps [--all]
The --all shows all the containers that have ever run on this machine even if they're not running right now

### docker create <image name> [alternative command]
Creates a container for the image, the output is a very big ID

### docker start [-a] <ID>
Starts the specified container 
-a attach to the container and show the output generated
<ID> can be the one generated by docker create on the one showed by docker ps --all
You can not specify a different command by doing this. For that you need to create a new container

### docker system prune
Removes the stopped containers (they won't sow in ps -all anymore) and also clears the image cache
This means that you will need to re-download all the images 

### docker logs <ID>
In case you've started a container without attaching to it (-a) you can still see the output it had
In case you start the container twice, you will see the output from both runs

### docker stop <ID>
### docker kill <ID>
Stops a running container by sending SIGTERM or SIGKILL
When issuing a docker sotp, if the process doesn't shut down by itself in 10 seconds, docker automatically sends a kill

### docker exec [-it] <ID> <command>
We attach to the container and run inside it a second command
-it allows us to provide input to the container

### docker attach <ID>
Will attach to the specified container's running command
This means our terminal will be connected to stdin,stdout,stderr of that process allowing us to interact with it

### docker info
Shows info about docker including where it stores the images (/var/lib/docker or C:\ProgramData\DockerDesktop)

### docker inspect <IMG ID>
