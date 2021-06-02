---
type: docs
title: "ElasticSearch module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-elasticsearch-nodex"
no_list: true
description: > 
    ElasticSearch components for Node.js/ES2017 


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Elasticsearch module contains packages used to create Elasticsearch components, including logging components with data storage on the Elasticsearch server.
---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory for the construction of components
- [**Log**](log) - Logging components


### Use

Install the Node.js package as
```bash
npm install pip-services-elasticsearch-nodex --save
```

Microservice components shall perform logging usual way using CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
there among other destinations.

```typescript
import { ConfigParams } from 'pip-services3-commons-nodex'; 
import { IConfigurable } from 'pip-services3-commons-nodex'; 
import { IReferences } from 'pip-services3-commons-nodex'; 
import { IReferenceable } from 'pip-services3-commons-nodex'; 
import { CompositeLogger } from 'pip-services3-components-nodex'; 

export class MyComponent implements IConfigurable, IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();
  
  public configure(config: ConfigParams): void {
    this._logger.configure(config);
  }
  
  public setReferences(refs: IReferences): void {
    this._logger.setReferences(refs);
  }
  
  public myMethod(correlationId: string, param1: any, callback: (err: any, result: any) => void): void {
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
