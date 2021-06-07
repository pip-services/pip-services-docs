---
type: docs
no_list: true
title: "Change Scopes Microservice"
linkTitle: "Change Scopes" 
---

Detects changes made in a particular scope or element of a scope.
Intended to implement change detection using simple pull mechanism. For instance: multiple configuration microservices change the scope, and business logic that depends on those configurations periodically reads it to check if anything was changed.

- Server implementations: [NodeJS](https://github.com/pip-services-integration/pip-services-changescopes-node)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-integration/pip-clients-changescopes-node), [.NET](https://github.com/pip-services-infrastructure/pip-clients-changescopes-dotnet)