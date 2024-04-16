
```dockerfile
FROM python:3

# set working directory
WORKDIR /usr/src/app

# copy project file
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# copy all project
COPY . .

ENV HTTP_PORT=8080
ENV MONGO_SERVICE_HOST=mongo
ENV MONGO_SERVICE_PORT=27017
EXPOSE "8080:8080"

# run 
CMD [ "python", "./bin/run.py" ]

```
