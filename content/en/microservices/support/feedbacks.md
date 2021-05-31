---
type: docs
no_list: true
title: "Feedbacks Microservice"
linkTitle: "Feedbacks" 
---

Allows users to communicate to application support, request help, share ideas or raise copyright issues. When feedbacks are processed by support personnel, user receives a feedback via provided email.

- Server implementations: [NodeJS](https://github.com/pip-services-support/pip-services-feedbacks-node)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-support/pip-clients-feedbacks-node)

This microservice has dependencies on the following microservices:

- [Blobs Attachments](../../content/attachments) - to reference pictures and documents associates with feedbacks