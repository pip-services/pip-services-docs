---
type: docs
no_list: true
title: "Announcements Microservice"
linkTitle: "Announcements" 
---

Allows system administrators and product owners to communicate to users key system events and product updates. Each announcement:

- Can be written in multiple languages
- Can include pictures and document attachments
- Supports editing lifecycle via status tracking

- Server implementations: [NodeJS](https://github.com/pip-services-support/pip-services-announcements-node)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-support/pip-clients-announcements-node)

This microservice has dependencies on the following microservices:

- [Blobs Attachments](../../content/attachments) - to reference pictures and documents associates with announcements