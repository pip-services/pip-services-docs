
```cs

var references = References.FromTuples(
    111, new Worker1("worker1"),
    222, new Worker2("worker2")
);

var controller = new SimpleController();
controller.SetReferences(references);
controller.Greeting("world");
controller.UnsetReferences();
controller = null;

```

