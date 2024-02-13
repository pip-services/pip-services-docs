---
type: docs
no_list: true
title: "Metrics Microservice"
linkTitle: "Metrics" 
---

Keeps list of metrics.
This microservice is designed to manage various metrics characterizing the operation of a process. Each metric has the following characteristics:

- metric name
- up to 3 types of measurements (in string format)
- date and time is a numerical value characterizing the metric

When adding or updating a metric, statistics on the metric are automatically calculated for different time horizons (you can specify the depth of the horizon) with the calculation of the average, maximum, minimum and accumulated values ​​within each of them.
Data access is provided through a set of API functions.

- Server implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-services-metrics-node), [Dart](https://github.com/pip-services-infrastructure/pip-services-metrics-dart)
- Communication protocols: Direct, Commandable HTTP, Commandable GRPC, GRPC
- Persistence: Memory, Flat Files, MongoDB, Couchbase
- Deployment options: Monolith, Process, [Docker](https://hub.docker.com/u/pipdevs), AWS Lambda
- Client implementations: [NodeJS](https://github.com/pip-services-infrastructure/pip-clients-metrics-node), [Dart](https://github.com/pip-services-infrastructure/pip-clients-metrics-dart)