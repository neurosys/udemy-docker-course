
## Automatic creation
The file that describes how to create a Docker image is the Dockerfile (same capitalization and no extension)

### Building the image
From inside the folder that contains the Dockerfile run:
> docker build [-t <docker hub user>/<project name>:<version>] .
-t will specify a tag. You can use the tag in place of the id of the image
'.' is the build context

Example:
docker build -t luckyguy/my-redis:latest


At the ending of the build process we will see something similar to this: 
> Successfully built 3ba93b5bb0b1
> Successfully tagged luckyguy/my-redis:latest
Where 3ba93b5bb0b1 is the ID of the IMAGE (not container) so in order to run it you have to run it like 
> docker run 3ba93b5bb0b1
You can also use the tag name like (version is not required if latest)
> docker run luckyguy/my-redis



## Dockerfile sections (instructions)
### FROM <baseimage>
Describes what image template to use as a starting point

### WORKDIR <path inside image>
Any following command will be executed relative to this path (in the container)
If the folder does not exist inside the container it will be created for us

### COPY <src> <dst>
Copies (recursively) files from our machine to the container
src - source file, path needs to be relative to the build context


### RUN <cmd to run inside base image>
Command to update the image in a meaninfull way for our purposes (install other programs for examples)


### CMD ["<default command>"]
Specifies what command should be run as default when the container starts its execution


## Manual creation of an image
1. Create a running container from an base image and run sh in it
> docker run -it alpine sh

2. Inside the container install redis
> # apk add --update redis

3. Get the id of the running container
> docker ps

4. Create an image out of a running container
> docker commit -c 'CMD ["redis-server"]' <id of the running container>
This outputs a very long id for the image created

5. Assign a tag (version) to an image
> docker tag <id of the image> <docker hub user>/<project name>:<version>
Example:
> docker tag 12334555 luckyguy/my-redis:version1.0
