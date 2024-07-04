
```ts
let references = References.fromTuples(
  111, new Worker1(null),
  222, new Worker2(null)
);

let controller = new SimpleController();
controller.setReferences(references);
controller.greeting("world");
controller.unsetReferences();
controller = null;
```
