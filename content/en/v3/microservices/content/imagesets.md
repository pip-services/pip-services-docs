---
type: docs
no_list: true
title: "ImageSets Microservice"
linkTitle: "ImageSets" 
---

Allows system administrators and product owners to communicate to users key system events and product updates. Each imageset:

- Can be written in multiple languages
- Can include pictures and document attachments
- Supports editing lifecycle via status tracking


- Server implementations: [NodeJS](https://github.com/pip-services-content/pip-services-imagesets-node), [Dart](https://github.com/pip-services-content/pip-services-imagesets-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-content/pip-clients-imagesets-node), [Dart](https://github.com/pip-services-content/pip-clients-imagesets-dart)


This microservice has dependencies on the following microservices:

- [Blob Attachments](../attachments) - to reference pictures and documents associates with imagesets