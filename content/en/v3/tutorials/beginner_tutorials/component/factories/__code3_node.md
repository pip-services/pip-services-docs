
```ts
let factory = new Factory();
factory.registerAsType(new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1);
let component1 = factory.create(new Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"));
```
