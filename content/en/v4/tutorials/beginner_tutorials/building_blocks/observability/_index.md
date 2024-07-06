---
type: docs
no_list: true
title: "Observability"
linkTitle: "Observabiity"
weight: 40
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Microservices, in addition to great strengths, have a few shortcomings. One of them is the difficulty to understand what is going on in a highly distributed system. To address this issue, microservices get to collect information about their operations in the form of logs, traces, and performance metrics in specialized storages. Then, that information can be used for health monitoring, troubleshooting, security protection, and other important maintenance scenarios.

### Context (trace) ids

It is not sufficient just to collect logs and traces across multiple microservices. It is critical to connect that information in a logical sequence within the transaction context. To do that Pip.Services employs traceIds, which are rigorously used as first parameters in all business methods across all microservice components and sent over via all synchronous calls and asynchronous messages. When errors are thrown, logs or traces recorded, traceIds are always included there.

A traceId is any value that can uniquely identify business transactions in a system. One way to generate traceIds is to use natural keys, like "transaction name + timestamp". Another common way to generate traceIds is to use string GUIDs. Although, they could be too long and lack meaning, they are unique in the universe and very easy to generate.

### Logging

There are myriads of logging libraries in all known programming languages. But Pip.Services includes its own abstractions for logging. Why? There are several reasons for that:

1. To achieve consistency and symmetry across all languages, as it is the key goal for the toolkit
2. To use the Pip.Services component model and easily integrate with common patterns like inversion of control or configurations
3. To enforce the use of traceIds, as without them the collected information has less value for analysis

The ILogger interface looks pretty standard. It allows logging messages at different levels: FATAL, ERROR, WARNING, INFO, DEBUG and TRACE. The interface is defined in the log package of the components module. In addition to that, Pip.Services includes a variety of loggers:

- NullLogger: Dummy implementation of a logger with no real effect.
- ConsoleLogger: Logger that writes log messages to console.
- FluentdLogger: Logger that dumps execution logs to a Fluentd service.
- ElasticSearchLogger: Logger that dumps execution logs to ElasticSearch service.
- CloudWatchLogger: Logger that writes log messages to AWS CloudWatch Log.
- AppInsightsLogger

It is common in microservices to log simultaneously into several destinations - to console for debugging as well into a distributed logging system. To support this scenario the toolkit includes the CompositeLogger, which is used by components to collect messages and then distribute them across all loggers included in the microservice.

```yml
# Console logger
descriptor: "pip-services:logger:console:default:1.0"
level: info

# Elastic search logger
descriptor: "pip-services:logger:elasticsearch:default:1.0"
connection:
  host: {{ELASTICSEARCH_SERVICE_HOST}}
  port: {{ELASTICSEARCH_SERVICE_PORT}}
```

{{< tabsection >}}
{{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
{{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

### Performance monitoring

While logs tell "what" the system is doing, performance metrics (or counters) tell "how" it's being done: how much, how fast, how reliable, and so on. They represent the state of the system from a non-functional perspective and are critical to measure and analyze performance, scalability, and reliability characteristics.

The ICounters from the count package in the components module is the standard interface for all performance monitoring components. It allows to increment counters, record values of self-calculated metrics, record timestamps, calculate min/average/max statistics and measure time intervals. In addition, there are several implementations available out-of-the-box:

- NullCounters: Dummy implementation of performance counters.
- LogCounters: Performance counters that periodically dump counters' measurements to a logger.
- PrometheusCounters:  Performance counters that send their metrics to Prometheus service.
- CloudWatchCounters: Performance counters that periodically dump counters to AWS Cloud Watch Metrics.
- AppInsightsCounters

Similar to logs, microservices can send counters to several destinations: periodically dump them into console logs, and send them to a centralized monitoring system. CompositeCounters components can be used in microservice components to collect metrics and distribute them to all Counters included in the microservice.

The example below shows how to collect several performance metrics from processing incoming messages:

```yml
# Log counters
descriptor: "pip-services:counters:log:default:1.0"

# Prometheus counters
descriptor: "pip-services:counters:prometheus:default:1.0"

# Metrics service used by prometheus to collect metrics
descriptor: "pip-services:metrics-service:prometheus:default:1.0"
```

{{< tabsection >}}
{{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
{{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

### Traces

The most common observability scenario consists of monitoring the invocation of microservice operations. This can be done via a combination of logs and counters: logs will record what operations are executed and errors when they happen, and counters will calculate how often operations were called and what's their execution time and error rate. However, some monitoring systems like Datadog or Splank have started offering APIs to collect traces separately, enabling rich visualizations and analytics around them.

The Pip.Services toolkit includes the ITracer interface for tracing components defined in the trace package in the components module. There are a few ready-to-use tracing components available in the toolkit:

- NullTracer: Dummy implementation of tracer that doesn't do anything.
- LogTracer: Tracer that dumps recorded traces to a logger.
- DataDogTracer

Just like logs and metrics, a tracer can be sent to multiple destinations using the CompositeTracer component.

```yml
# Log tracer
descriptor: "pip-services:tracer:log:default:1.0"

# DataDog traces
descriptor: "pip-services:tracer:datadog:default:1.0"
connection:
  api_key: {{DATADOG_API_KEY}}

```

{{< tabsection >}}
{{< include "./__code3_node.md" >}}Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

{{< tabsection >}}
{{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
Not available
{{< /tabsection >}}

### References

For more information about observability see:

- #### [Logging](../../../beginner_tutorials/observability/logging/)
- #### [Metrics](../../../beginner_tutorials/observability/metrics/)
- #### [Prometheus](../../../beginner_tutorials/observability/prometheus/)
- #### [Elasticsearch](../../../beginner_tutorials/observability/elasticsearch/)
