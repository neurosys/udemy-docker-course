
## Automatic creation
The file that describes how to create a Docker image is the Dockerfile (same capitalization and no extension)
Inside a Docker file can be more than one image they are separated by FROM

### Building the image
From inside the folder that contains the Dockerfile run:
> docker build [-t <docker hub user>/<project name>:<version>] [-f <path to dockerfile>] . 
-t will specify a tag. You can use the tag in place of the id of the image
-f <custon named dockerfile> so we can build using a dockerfile that is not named "Dockerfile"
'.' is the build context (the place from where all files and folders will be taken when creating the image)

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
### FROM <baseimage> [as <stage>]
Describes what image template to use as a starting point
stage is a name of the image that can be used in other places

### WORKDIR <path inside image>
Any following command will be executed relative to this path (in the container)
If the folder does not exist inside the container it will be created for us

### COPY [--from=<stage>] <src> <dst>
Copies (recursively) files from our machine to the container
src - source file, path needs to be relative to the build context
--from=<stage> will set the source to be another container, you still need to
    specify the source path of the files you want to copy
    in siutations where the "as" modifier is not supported use the nr of the step (# of the image in that docker file starting from 0)
    so --from=0 in case we're copying something from the first image


### RUN <cmd to run inside base image>
Command to update the image in a meaninfull way for our purposes (install other programs for examples)


### CMD ["<default command>"]
Specifies what command should be run as default when the container starts its execution.
If no CMD is specified the default command of the image will be used
The command is splitted into words like this:
["grep", "-Rn", "--include=*.java", "TODO", "."]


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
