
```ts
# Console logger
descriptor: “pip-services:logger:console:default:1.0”
level: info

# Elastic search logger
descriptor: “pip-services:logger:elasticsearch:default:1.0”
connection:
  host: {{ELASTICSEARCH_SERVICE_HOST}}
  port: {{ELASTICSEARCH_SERVICE_PORT}}


class MyComponent implements IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();

  public setReferences(refs: IReferences) {
    this._logger.setReferences(refs);
  }

  public doSomething(correlationId: string) {
    this._logger.debug(correlationId, “Did something…”);
    ...
  }
}

```
