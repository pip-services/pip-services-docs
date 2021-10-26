
```cs
class MyProcess extends ProcessContainer{
    public constructor(){
        super('mymicroservice', 'Sample microservice container');

        this._factories.add(new MyComponentFactory());
        this._factories.add(new DefaultRpcFactory());
        this._factories.add(new DefaultSwaggerFactory());
        this._factories.add(new DefaultGrpcFactory());
    }
}


```
