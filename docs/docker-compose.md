## docker compose commands

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ALL THE COMMANDS HERE NEED TO BE RUN INSIDE THE FOLDER THAT CONTAINS THE docker-compose.yml
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

### docker-compose up [--build] [-d]
Alone Will run all images specified in the docker-compose.yml
It's the equivalent of one or multiple docker run commands

--build will will rebuild all the images before running

-d launch in the background


### docker-compose down
Will stop all the docker containers

### docker-compose ps
Show status of the containers inside docker-compose

## docker-compose.yml
    This specifies how a group of docker containers will be build and run.
    Using docker-compose has the advantage that all the docker containers
        specified in it will automatically have network access to each other
        without having to specify any kind of configuration for this

## File sections
    In here we will describe the sections inside docker-compose.yml

### version: '3'
    Specify the version of docker-compose we require to run the docker-compose.yml

### services:
    The section of services
    A service can be viewed as a type of container
    Inside this section the services are enumerated like sections
    like <service name>:
    OBS: note that the <service name> can be used later as an FQDN to connect
        to the container.

### structure inside a service section
    OBS: note that the <service name> can be used later as an FQDN to connect
        to the container.

#### image: <source image>
    specifies an image to be used as it is, no other changes made to it

#### build: <path to context>
    In case we do need to make some changes to an image we give the path to a
    Dockerfile so that docker-compose can build it
    build can have sub sections as follows:

#### context: <path to context>
#### dockerfile: <path to the dockerfile>

#### ports:
    A list of port mappings of the form "- <host port>:<docker port>"
    This declaration is only to open ports on the host machine.
    ALL the containers specified in docker-compose.yml will have network
        access to each other implicitly

#### volumes:
    A list of paths that can have two forms
    - <host path>:<guest path> 
    - <guest path>
    First one mean that the host path should be mounted on the guest path
    Second one is used to specify a path where the guest path should be left untouched 
    If the first command is similar to linux mount command, the second would be
        as if inside the folder that has been mounted we will still be able to see
        the guest path

#### command: ["<my cmd>"]
    A section that can override the default command the Dockerfile is specifying.
    OBS: each parameter is set in double quotes separated by comma
    Example:
        ["grep", "-Rn", "--include=*.java", "TODO", "."]


#### restart:
    Defines a policy regarding the conditions in which a container should be
        restarted
    OBS: notice that the "no" policy has double quotes around, to distinguish
        from no which in yml markup means false

+----------------+------------------------------------------------------------+
| "no"           | Don't restart the container                                |
+----------------+------------------------------------------------------------+
| always         | If the container stops for any reason it will be restarted |
|                | (this includes a manual stop from someone)                 |
+----------------+------------------------------------------------------------+
| on-failure     | Restart if exit code from process is != 0                  |
+----------------+------------------------------------------------------------+
| unless-stopped | Always restart unless manually stopped                     |
+----------------+------------------------------------------------------------+
