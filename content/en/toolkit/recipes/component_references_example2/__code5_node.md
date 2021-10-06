
```typescript

let references = References.fromTuples(
    111, new Worker1(),
    222, new Worker2()
);

let controller = new SimpleController();
controller.setReferences(references);
console.log(controller.greeting("world"));
controller.unsetReferences();
controller = null;


```

