---
type: docs
title: "ElasticSearch module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-elasticsearch-dart"
no_list: true
weight: 30
description: > 
    ElasticSearch components for Dart


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Elasticsearch module contains packages used to create Elasticsearch components, including logging components with data storage on the Elasticsearch server.
---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory for the construction of components
- [**Log**](log) - Logging components


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_elasticsearch: version
```

Now you can install package from the command line:
```bash
pub get
```

Microservice components shall perform logging usual way using CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
there among other destinations.

```dart
class MyComponent implements IConfigurable, IReferenceable {
  CompositeLogger _logger = new CompositeLogger();
  
  configure(ConfigParams config) {
    this._logger.configure(config);
  }
  
  setReferences(IReferences refs) {
    this._logger.setReferences(refs);
  }
  
  myMethod(String correlationId, param1) {
    this._logger.trace(correlationId, "Executed method mycomponent.mymethod");
    ....
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