---
type: docs
no_list: true
title: "Dashboards Microservice"
linkTitle: "Dashboards" 
---

Provides guidance to application users: introduces about application features, tells about new version and so on. Each dashboard:

- Can be written in multiple languages
- Can include one or more pages with title, text and a picture
- Supports editing lifecycle via status tracking

‍
- Server implementations: [NodeJS](https://github.com/pip-services-content/pip-services-dashboards-node)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-content/pip-clients-dashboards-node)

This microservice has dependencies on the following microservices:

- [Blob Attachments](../attachments) - to reference pictures and documents associates with dashboards