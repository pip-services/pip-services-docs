
And add the [DefaultMongoDbFactory](../../../toolkit_api/node/mongodb/build/default_mongodb_factory/) to the microservice's ProcessContainer:

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

