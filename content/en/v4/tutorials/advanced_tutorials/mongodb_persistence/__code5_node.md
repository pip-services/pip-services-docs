
```ts

export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this.addFactory(new BeaconsServiceFactory());
        this.addFactory(new DefaultHttpFactory());
        this.addFactory(new DefaultSwaggerFactory());
    }
}




```
