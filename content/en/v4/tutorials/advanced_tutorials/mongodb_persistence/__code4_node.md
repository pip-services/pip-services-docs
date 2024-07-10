
```ts

export class BeaconsServiceFactory extends Factory{
    public static MemoryPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
    public static FilePersistenceDescriptor = new Descriptor('beacons', 'persistence', 'file', '*', '1.0');
    public static MongoDbPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
    public static ServiceDescriptor = new Descriptor('beacons', 'service', 'default', '*', '1.0');
    public static HttpControllerV1Descriptor = new Descriptor('beacons', 'controller', 'http', '*', '1.0');
    
    constructor(){
        super();

        this.registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence);
        this.registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor, BeaconsFilePersistence);
        this.registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence);
        this.registerAsType(BeaconsServiceFactory.ServiceDescriptor, BeaconsService);
        this.registerAsType(BeaconsServiceFactory.HttpControllerV1Descriptor, BeaconsHttpControllerV1);
    }
}




```
