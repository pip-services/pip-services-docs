---
type: docs
no_list: true
title: "Blobs Microservice"
linkTitle: "Blobs" 
---

Stores large binary blobs, manages references to them from other entities and serves stored content to users. Most often binary blobs are used to store images and document attachments.

- Server implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-services-blobs-node), [Dart](https://github.com/pip-services-infrastructure/pip-services-blobs-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase, AWS S3
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-clients-blobs-node), [.Net](https://github.com/pip-services-infrastructure/pip-clients-blobs-dotnet), [Golang](https://github.com/pip-services-infrastructure/pip-clients-blobs-go), [Dart](https://github.com/pip-services-infrastructure/pip-clients-blobs-dart)