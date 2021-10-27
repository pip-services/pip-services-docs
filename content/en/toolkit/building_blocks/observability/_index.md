---
type: docs
no_list: true
title: "Observability"
linkTitle: "Observabiity"
weight: 1
description: >-
     
---

Microservices, in addition to great strengths, have a few shortcomings. One of them is the difficulty to understand what is going on in a highly distributed system. To address this issue, microservices get to collect information about their operations in the form of logs, traces, and performance metrics in specialized storages. Then, that information can be used for health monitoring, troubleshooting, security protection, and other important maintenance scenarios.

### Correlation (trace) ids
It is not sufficient just to collect logs and traces across multiple microservices. It is critical to connect that information in a logical sequence within the transaction context. To do that Pip.Services employs correlationIds, which are rigorously used as first parameters in all business methods across all microservice components and sent over via all synchronous calls and asynchronous messages. When errors are thrown, logs or traces recorded, correlationIds are always included there.

A correlationId is any value that can uniquely identify business transactions in a system. One way to generate correlationIds is to use natural keys, like “transaction name + timestamp”. Another common way to generate correlationIds is to use string GUIDs. Although, they could be too long and lack meaning, they are unique in the universe and very easy to generate.

Logging
There are myriads of logging libraries in all known programming languages. But Pip.Services includes its own abstractions for logging. Why? There are several reasons for that:
1.	To achieve consistency and symmetry across all languages, as it is the key goal for the toolkit
2.	To use the Pip.Services component model and easily integrate with common patterns like inversion of control or configurations
3.	To enforce the use of correlationIds, as without them the collected information has less value for analysis

The ILogger interface looks pretty standard. It allows logging messages at different levels: FATAL, ERROR, WARNING, INFO, DEBUG and TRACE. The interface is defined in the log package of the components module. In addition to that, Pip.Services includes a variety of loggers:
