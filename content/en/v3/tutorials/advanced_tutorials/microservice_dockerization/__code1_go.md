
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
