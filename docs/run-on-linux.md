
## Linux configuration
    Extracted from here:
    https://docs.docker.com/engine/install/linux-postinstall/

### Login on hub.docker.com from command line
    docker login

### How to run docker as non root
    Create group docker
    > sudo groupadd docker
    Add current user to that 
    > sudo usermod -aG docker $USER
    Activate the changes to the groups
    > newgrp docker
    Check to see that your user is in the newly created docker group
    > groups
    Check to see if this works
    > docker run hello-world
    If you previously run docker with sudo, this will complain about permissions of ~/.docker folder

### Enabling docker service (Arch linux)
    > sudos systemctl enable docker.service
    > sudos systemctl start docker.service
