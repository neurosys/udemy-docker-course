# udemy-docker-course

1. my-redis-image
    Shows how to create a docker file

2. simpleweb
    - Dockerfile shows a more complex Dockerfile where you copy your project files into the image
    - build.sh shows how to build with a tag (version)
    - run.sh  shows how to map external ports to internal ones

3. visits
    Shows a setup with more than one container (one redis and one nodejs app) using docker compose
    Also shows the restart policy of a container (see the process.exit(0) in the index.js) and the
        restart mention in the docker-compose.yml
