
```
---
# Container descriptor
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "mydata"
  description: "MyData microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Controller
- descriptor: "service-mydata:controller:default:default:1.0"

# Common GRPC endpoint
- descriptor: "pip-services:endpoint:grpc:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8090

# Commandable GRPC endpoint version 1.0
- descriptor: "service-mydata:service:commandable-grpc:default:1.0"
```
