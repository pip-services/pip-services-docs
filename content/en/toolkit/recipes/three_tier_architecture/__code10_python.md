
```
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

# Controller
- descriptor: "hello-friend:controller:default:default:1.0"
  default_name: "Friend"

# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: 8080

# HTTP Service V1
- descriptor: "hello-friend:service:http:default:1.0"

# Heartbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"

# Status service
- descriptor: "pip-services:status-service:http:default:1.0"

# Persistnece - MySQL
- descriptor: "hello-friend:persistence:mysql:default:1.0"
  connection:
    host: 'localhost'
    port: '3306'
    database: 'pip'
  credential:
    username: 'root'
    password: ''
```
