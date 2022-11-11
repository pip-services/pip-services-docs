
```ts
export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController);
        this.registerAsType(new Descriptor("mygroup", "service", "gcp-function", "function", "1.0"), MyCloudService);
    }
}
```