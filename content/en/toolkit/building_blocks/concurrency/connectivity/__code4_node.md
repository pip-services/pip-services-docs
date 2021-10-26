
```ts
# In-memory credential store
descriptor: “pip-services:credential-store:memory:default:1.0”
mongo:
  username: admin
  password: pass123

# MongoDb persistence component
descriptor: “myservice:mypersistance:mongodb:default:1.0”
connection:
  ...
credential:
  discovery_key: mongo

class MyPersistence implements IConfigurable, IReferenceable {
  private _connectionResolver = new ConnectionResolver();
  private _host: string;
  private _port: number;

  public configure(config: ConfigParams) {
    this._connectionResolver.configure(config);
  }

  public setReferences(refs: IReferences) {
    this._connectionResolver.setReferences(refs);

    let connection = this._connectionResolver.resolve(null);
    this._host = connection.getHost();
    this._port = connection.getPortWithDefault(27017);
  }
}

```
