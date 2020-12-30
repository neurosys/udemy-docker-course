

### docker commit
When doing a 
docker commit -c 'CMD ["redis-server"]' CONTAINERID

If you are a Windows user you may get an error like "/bin/sh: [redis-server]: not found" or "No Such Container"

Instead, try running the command like this:

docker commit -c "CMD 'redis-server'" CONTAINERID


### docker ip
On windows, because docker runs inside a small virtual machine, the ip of the docker file is not the same as the windows machine
In order to obtain the ip of the docker container run
> docker-machine ip
