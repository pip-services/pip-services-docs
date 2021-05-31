---
type: docs
no_list: true
title: "Email Settings Microservice"
linkTitle: "Email Settings" 
---

Keeps settings of email recipients.

- Server implementations: [NodeJS](https://github.com/pip-services-users/pip-services-emailsettings-node), [Dart](https://github.com/pip-services-users/pip-services-emailsettings-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-users/pip-clients-emailsettings-node), [Golang](https://github.com/pip-services-users/pip-clients-emailsettings-go), [Dart](https://github.com/pip-services-users/pip-clients-emailsettings-dart)

This microservice has optional dependencies on the following microservices:

- [Party activities](../party_activities) - to log user activities
- [Message Templates](../../content/messagetemplates) - to get message templates
- [Email Delivery](../../infrastructure/email_delivery) - to send email messages