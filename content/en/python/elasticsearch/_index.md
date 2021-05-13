---
type: docs
title: "ElasticSearch"
gitUrl: "https://github.com/pip-services3-python/pip-services3-elasticsearch-python"
no_list: true
description: > 
    ElasticSearch components for Python 


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Elasticsearch module contains logging components with data storage on the Elasticsearch server.
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

Microservice components shall perform logging usual way using CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
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

### Develop

For development you shall install the following prerequisites:
* Python 3.7+
* Visual Studio Code or another IDE of your choice
* Docker

Install dependencies:
```bash
pip install -r requirements.txt
```

Run automated tests:
```bash
python test.py
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

Configure the vm.max_map_count

`sudo sysctl -w vm.max_map_count=262144`

    fixes:
    max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]

#### Typed vs Type-less indexes
ES version 7 [stopped supporting "types"](https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html) and encouraged a separation of disperate data into different indexes. By default, this version of pip-services3-elasticsearch-node will support 7.x type-less indexes. You can support to the 6.x "typed" approach by setting the `include_type_name` option to true. This allows it to work with either 6.x or 7.x ElasticSearch servers.

You can read more about how this is accomplished  [here](https://www.elastic.co/blog/moving-from-types-to-typeless-apis-in-elasticsearch-7-0)


### Contacts

The library is created and maintained by **Sergey Seroukhov**.

The documentation is written by:
- **Mark Makarychev**