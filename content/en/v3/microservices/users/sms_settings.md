---
type: docs
no_list: true
title: "Sms Settings Microservice"
linkTitle: "Sms Settings" 
---

Keeps settings of sms recipients.

- Server implementations: [NodeJS](https://github.com/pip-services-users/pip-services-smssettings-node), [Dart](https://github.com/pip-services-users/pip-services-smssettings-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-users/pip-clients-smssettings-node), [Dart](https://github.com/pip-services-users/pip-clients-smssettings-dart)

This microservice has optional dependencies on the following microservices:

- [Party Activities](../party_activities) - to log user activities
- [Message Templates](../../content/messagetemplates) - to get message templates
- [SMS Delivery](../../infrastructure/sms_delivery) - to send sms messages