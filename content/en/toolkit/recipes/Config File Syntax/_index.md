---
title: "Config File Syntax"
linkTitle: "Config File Syntax"
weight: 100
description: >-
     Page description for heading and indexes.
---

### Key takeaways

### Introduction
In this tutorial you will learn how to create yml configuration files. First, we will see a general case. Then, we will show examples of the most common components in PIP.Services. These examples are valid for any of the six languages used by the toolkit.
### Syntax
In this section we will learn how to define the configuration for a component. First, we will see the general syntax. Then, we will show examples of different configurations for components already available in PIP.Services. These configurations are valid for any of the six languages supported by PIP.Services.
#### General case
In general, the syntax for the configuration of a component is:
```
- descriptor: "   "
parameter1: value1
...
parametern: valueN
```
Where the configuration parameters depend on the component considered, and can be obtained from the component’s Configuration parameters section available in the reference manual.

### Configuration examples
The following sections show several configuration examples for the most common components available in the PIP.Services toolkit. They are presented in alphabetical order and serve as a guide that can be adapted to your specific needs.

#### CloudWatch

```

```

#### Console logger

```

```

#### Container

```

```

#### Controller

```
# Controller
- descriptor: "pip-service-data:controller:default:default:1.0"
```

#### Couchbase

```

```

#### DataDog

```
{{#if DATADOG_ENABLED}}
# DataDog counters
- descriptor: "pip-services:counters:datadog:default:1.0"
  connection:
    protocol: {{DATADOG_PROTOCOL}}{{#unless DATADOG_PROTOCOL}}https{{/unless}}
    uri: {{DATADOG_URI}}
    host: {{DATADOG_HOST}}{{#unless DATADOG_HOST}}"api.datadoghq.com"{{/unless}}
    port: {{DATADOG_PORT}}{{#unless DATADOG_PORT}}443{{/unless}}
  credential:
    access_key: {{DATADOG_ACCRSS_KEY}}

# DataDog logger
- descriptor: "pip-services:logger:datadog:default:1.0"
  connection:
    protocol: {{DATADOG_PROTOCOL}}{{#unless DATADOG_PROTOCOL}}https{{/unless}}
    uri: {{DATADOG_URI}}
    host: {{DATADOG_HOST}}{{#unless DATADOG_HOST}}"api.datadoghq.com"{{/unless}}
    port: {{DATADOG_PORT}}{{#unless DATADOG_PORT}}443{{/unless}}
  credential:
    access_key: {{DATADOG_ACCRSS_KEY}}
{{/if}}
```

#### Elasticsearch

```

```

#### File persistence

```

```

#### gRPC

```

```

#### Hearbeat

```
# Hearbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"
```

#### HTTP

```

```

#### Lambda

```

```

#### MongoDB

```

```

#### MySQL

```

```

#### Performance log counters

```

```

#### PostreSQL

```

```

#### Prometheus

```

```

#### SQLServer

```

```

#### Status

```

```

#### Swagger

```

```

### Wrapping up
In this tutorial, we have seen how to define the configuration of a component in a config.yml file. First, we understood the syntax for a general component. Then, we saw several examples, which can be adapted to your specific needs.
