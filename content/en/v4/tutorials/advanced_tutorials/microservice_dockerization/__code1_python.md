
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
