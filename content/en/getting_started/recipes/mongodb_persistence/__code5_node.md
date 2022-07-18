
```typescript

export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this.addFactory(new BeaconsServiceFactory());
        this.addFactory(new DefaultRpcFactory());
        this.addFactory(new DefaultSwaggerFactory());
    }
}



```

