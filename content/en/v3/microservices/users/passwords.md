---
type: docs
no_list: true
title: "Passwords Microservice"
linkTitle: "Passwords" 
---

Password authentication microservice.

- Sets user passwords and authenticate
- Safely change passwords
- Reset and recover passwords via emails

- Server implementations: [NodeJS](https://github.com/pip-services-users/pip-services-passwords-node), [Dart](https://github.com/pip-services-users/pip-services-passwords-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-users/pip-clients-passwords-node), [Golang](https://github.com/pip-services-users/pip-clients-passwords-go), [Dart](https://github.com/pip-services-users/pip-clients-passwords-dart)

This microservice has optional dependencies on the following microservices:

- [Party Activities](../party_activities) - to log user activities
- [Email Delivery](../../infrastructure/email_delivery) - to send email notifications to users