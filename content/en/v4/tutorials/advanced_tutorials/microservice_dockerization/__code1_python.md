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
