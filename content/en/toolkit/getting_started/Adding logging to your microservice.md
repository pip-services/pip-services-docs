---
title: "Adding logging to your microservice"
linkTitle: "Logging"
weight: 100
description: >-
     How to add a logger to a component.
---

## Key takeaways

| Logging     | Logging is the capacity to create tagged messages from events in our code. |
| Logging levels      | Logging levels: nothing, fatal, error, warn, info, debug, and trace.       |
| ConsoleLogger   | PIP.Services component for displaying logging messages on the console.        |
| CachedLogger     | PIP.Services component that caches log messages in memory. |
| CompositeLogger      | PIP.Services component for aggregating logging messages.       |
| DataDogLogger, ElasticSearchLogger, CloudWatchLogger    | PIP.Services logger implementations for Datadog, Elasticsearch, and Amazon CloudWatch components.       |

## Introduction

In this tutorial, you will learn how to add logging capacity to a microservice. First, we will understand what logging consists of. Then, we will use the microservice we created in the “Creating a component” tutorial, replace the printed messages with logger messages and create an exception in our business process (my_task). After running the code, we will see the tagged messages from the logger.

Once we have seen how to create a logger that displays messages on our console, we will learn how to create a composite logger, which will add the capacity to aggregate the log messages from different sources and centralize their display on our console.

Finally, we will see how to add loggers for Datadog, Elasticsearch, and Amazon CloudWatch components.

## What is logging?
Logging is the capacity to create tagged messages from events in our code. These messages can inform us about the running process. 

There are different logging levels. PIP.Services defines them as:
