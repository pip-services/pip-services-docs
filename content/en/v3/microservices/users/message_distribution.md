---
type: docs
no_list: true
title: "Message Distribution Microservice"
linkTitle: "Message Distribution" 
---

Distributes messages to one or many recipients using their configured delivery methods: email or sms.

- Server implementations: [NodeJS](https://github.com/pip-services-users/pip-services-msgdistribution-node), [Dart](https://github.com/pip-services-users/pip-services-msgdistribution-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-users/pip-clients-msgdistribution-node), [Golang](https://github.com/pip-services-users/pip-clients-msgdistribution-go), [Dart](https://github.com/pip-services-users/pip-clients-msgdistribution-dart)

This microservice has optional dependencies on the following microservices:

- [Email Settings](../email_settings) - recipient email settings
- [SMS Settings](../sms_settings) - recipient sms settings
- [Email](../../infrastructure/email_delivery) - email sending
- [SMS Delivery](../../infrastructure/sms_delivery) - sms sending
- [Message Templates](../../content/messagetemplates) - message templates