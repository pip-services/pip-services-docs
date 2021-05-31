---
type: docs
title: "ElasticSearch module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-elasticsearch-python"
no_list: true
description: > 
    ElasticSearch components for Python 


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Elasticsearch module contains packages used to create Elasticsearch components, including logging components with data storage on the Elasticsearch server.
---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory for the construction of components
- [**Log**](log) - Logging components


### Use

Install the Python package as
```bash
pip install pip-services3-elasticsearch
```

Microservice components shall perform logging the usual way using the CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect the log messages
there among other destinations.

```python
from pip_services3_commons.config import IConfigurable
from pip_services3_commons.refer import IReferenceable
from pip_services3_components.log import CompositeLogger


class MyComponent(IConfigurable, IReferenceable):
    def __init__(self):
        super(MyComponent, self).__init__()
        self.__logger = CompositeLogger()

    def configure(self, config):
        self.__logger.configure(config)

    def set_references(self, references):
        self.__logger.set_references(references)

    def my_method(self, correlation_id, param1):
        self.__logger.trace(correlation_id, 'Executed method mycomponent.mymethod')
        # ...
```

The configuration for your microservice that includes ElasticSearch logger may look the following way: 

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
