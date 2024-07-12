To perform the build process for a Golang project, we'll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:      

```dockerfile
FROM golang:1.13

# Set environment variables for Go
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Set a working directory
WORKDIR /app

# Copy the package files
COPY go.mod ./

# Install all go_modules
RUN go mod download

# Copy the package files
COPY . .

# Build the project
RUN go build -o /go/bin/run .


```
This file, along with the others we will be creating, should be placed in the docker folder at the root of the project.

Let's have a look at what this Docker script will be doing. The standard Golang image is going to be used as the base image, and Golang is going to be installed on top of it. Next, /app is set as the working directory and our project's requirements.txt file is copied there. This file contains a list of dependencies that are required to build the project, which are installed using the **RUN go mod download** command. The last steps of the script simply copies the rest of the project to the image.
