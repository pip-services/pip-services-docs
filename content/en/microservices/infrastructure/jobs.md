---
type: docs
no_list: true
title: "Jobs Microservice"
linkTitle: "Jobs" 
---

Keeps list of working jobs.
The service allows you to manage tasks in those cases when the generation (statement) of the task is performed in a separate microservice, and direct execution is implemented in one way or another.

- Server implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-services-jobs-node), [Dart](https://github.com/pip-services-infrastructure/pip-services-jobs-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-clients-jobs-node), [Dart](https://github.com/pip-services-infrastructure/pip-clients-jobs-dart)
