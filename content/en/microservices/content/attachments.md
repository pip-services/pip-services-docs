---
type: docs
no_list: true
title: "Blob Attachments Microservice"
linkTitle: "Blob Attachments" 
---

Records all documents that attached to a particilar blob. When last document is disattached, the blob gets removed.

- Server implementations: [NodeJS](https://github.com/pip-services-content/pip-services-attachments-node), [Dart](https://github.com/pip-services-content/pip-services-attachments-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-content/pip-clients-attachments-node), [Dart](https://github.com/pip-services-content/pip-clients-attachments-dart)