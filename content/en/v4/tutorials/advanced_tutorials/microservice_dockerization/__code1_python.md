Python is an interpreted language and does not require compilation. But to save an identical pipeline, a stub script is used.

To perform the build process for a Python project, we'll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:      

```bash
FROM python:3

# set working directory
WORKDIR /usr/src/app

# copy project file
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# copy all project
COPY . .

```
This file, along with the others we will be creating, should be placed in the docker folder at the root of the project.

Let's have a look at what this Docker script will be doing. The standard Python v.3 image is going to be used as the base image, and Python is going to be installed on top of it. Next, /app is set as the working directory and our project's requirements.txt file is copied there. This file contains a list of dependencies that are required to build the project, which are installed using the **pip install -r requirements.txt** command. The last steps of the script simply copies the rest of the project to the image.
