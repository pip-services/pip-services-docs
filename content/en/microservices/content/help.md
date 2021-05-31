---
type: docs
no_list: true
title: "Help Microservice"
linkTitle: "Help" 
---

Provides context help to application users broken by topics and articles. Each help:

- Can be written in multiple languages
- Can include one or more blocks of content with title, text and a picture
- Supports editing lifecycle via status tracking


- Server implementations: [NodeJS](https://github.com/pip-services-content/pip-services-help-node), [Dart](https://github.com/pip-services-content/pip-services-help-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-content/pip-clients-help-node), [Dart](https://github.com/pip-services-content/pip-clients-help-dart)


This microservice has dependencies on the following microservices:

- [Blob Attachments](../attachments) - to reference pictures and documents associates with help.