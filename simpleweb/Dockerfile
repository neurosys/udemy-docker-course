
# This syntax would be used when specifing a specific version
# FROM node:6.14
# The following can also be used <something>:alpine and it means this would be the smallest (to be read as striped) image possible
FROM node:alpine

# Define the place in the container that we're going to use
WORKDIR /usr/app

# Copy just the package.json file so we can run the npm install
# by doing this separately from the copy of the application files we
# ensure that npm install won't be run each time we update an application file,
# thus reducing the build time
COPY ./package.json ./

# Download and install dependency
RUN npm install 

# Copy all the files
COPY ./ ./


# Tell the image what to do when it starts as container
CMD ["npm", "start"]
