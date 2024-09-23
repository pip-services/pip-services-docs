---
type: docs
title: "ElasticSearch module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-elasticsearch-java"
no_list: true
weight: 500
description: > 
    Contains packages used to create Elasticsearch components, including logging components with data storage on the Elasticsearch server.
---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory for the construction of components
- [**Log**](log) - Logging components


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-elasticsearch</artifactId>
  <version>[0.0.1,)</version>
</dependency>

Microservice components shall perform logging usual way using CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
there among other destinations.

```java
import org.pipservices4.commons.config.ConfigParams;
import org.pipservices4.components.config.IConfigurable;
import org.pipservices4.components.refer.IReferences;
import org.pipservices4.components.refer.IReferenceable;
import org.pipservices4.components.log.CompositeLogger;
import org.pipservices4.components.context.IContext;

public class MyComponent implements IConfigurable, IReferenceable {
    private CompositeLogger _logger = new CompositeLogger();

    @Override
    public void configure(ConfigParams config) {
        _logger.configure(config);
    }

    @Override
    public void setReferences(IReferences refs) {
        _logger.setReferences(refs);
    }

    public void myMethod(IContext context, Object param1) {
        _logger.trace(context, "Executed method mycomponent.mymethod");
        // Add the rest of your logic here
    }
}

```

Configuration for your microservice that includes ElasticSearch logger may look the following way.

```yaml
...
{{#if ELASTICSEARCH_ENABLED}}
- descriptor: pip-services:logger:elasticsearch:default:1.0
  connection:
    uri: {{{ELASTICSEARCG_SERVICE_URI}}}
    host: {{{ELASTICSEARCH_SERVICE_HOST}}}{{#unless ELASTICSEARCH_SERVICE_HOST}}localhost{{/unless}}
    port: {{ELASTICSEARCG_SERVICE_PORT}}{{#unless ELASTICSEARCH_SERVICE_PORT}}9200{{/unless}}\ 
{{/if}}
...
```

