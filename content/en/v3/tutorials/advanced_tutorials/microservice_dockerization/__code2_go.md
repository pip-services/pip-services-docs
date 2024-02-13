
```dockerfile
# Start with the golang v1.13 image
FROM golang:1.13

# set working directory
WORKDIR /app

# Copy project file
COPY go.mod go.sum ./

# Install all go_modules
RUN go mod download

# Copy the entire projectCOPY . .

# Specify the command from running tests
CMD go test -v ./test/...

```
