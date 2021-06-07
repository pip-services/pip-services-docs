---
type: docs
no_list: true
title: "User Accounts Microservice"
linkTitle: "User Accounts" 
---

User account management microservice.

- Registers users and creates their accounts
- Keeps key user descriptions and settings (about, location, language, theme, ...)

- Server implementations: [NodeJS](https://github.com/pip-services-users/pip-services-accounts-node), [Dart](https://github.com/pip-services-users/pip-services-accounts-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-users/pip-clients-accounts-node), [.NET](https://github.com/pip-services-users/pip-clients-accounts-dotnet), [Golang](https://github.com/pip-services-users/pip-clients-accounts-go), [Dart](https://github.com/pip-services-users/pip-clients-accounts-dart)


This microservice has optional dependencies on the following microservices:

- [Party Activities](../party_activities) - to log user activities (signup, signin, change settings)