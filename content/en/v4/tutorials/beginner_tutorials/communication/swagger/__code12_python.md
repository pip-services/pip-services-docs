
```python
---
# Container context
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "hello-friend"
  description: "HelloFriend microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"

# Service
- descriptor: "hello-friend:service:default:default:1.0"
  default_name: "Friend"

# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: 8080

# HTTP controller V1
- descriptor: "hello-friend:controller:http:default:1.0"
  swagger:
    enable: true
    path: './rest_swagger.yml'


- descriptor: "hello-friend:controller:commandable-http1:default:1.0"
  swagger:
    enable: true
    auto: true
    route: swagger
    name: Friends Service
    description: Commandable REST API - Automatic
- descriptor: "hello-friend:controller:commandable-http2:default:1.0"
  swagger:
    enable: true
    auto: false
    route: swagger
    path: './commandable_swagger.yml'

# Heartbeat controller
- descriptor: "pip-services:heartbeat-controller:http:default:1.0"

# Status controller
- descriptor: "pip-services:status-controller:http:default:1.0"

# Swagger controller
- descriptor: "pip-services:swagger-controller:http:default:1.0"
```
