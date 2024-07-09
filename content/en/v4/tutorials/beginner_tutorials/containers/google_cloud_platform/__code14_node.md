
```ts
export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "serice", "default", "service", "1.0"), MyService);
        this.registerAsType(new Descriptor("mygroup", "controller", "gcp-function", "function", "1.0"), MyCloudController);
    }
}
```
