
```cs
class SimpleController : IReferenceable, IUnreferenceable, IConfigurable
{
    protected Worker worker;
    protected DependencyResolver depedencyResolver = DependencyResolver.FromTuples(
        "worker", new Descriptor("*", "worker", "*", "*", "1.0")
    );

    public void Configure(ConfigParams config)
    {
        depedencyResolver.Configure(config);
    }

    public void SetReferences(IReferences references)
    {
        depedencyResolver.SetReferences(references);
        worker = references.GetOneRequired<Worker>(new Descriptor("*", "worker", "worker1", "*", "1.0"));
    }

    public void UnsetReferences()
    {
        depedencyResolver = null;
    }

    ...
}


var references = References.FromTuples(
    new Descriptor("sample", "worker", "worker1", "111", "1.0"), new Worker1(),
    new Descriptor("sample", "worker", "worker2", "222", "1.0"), new Worker2()
);

var config = ConfigParams.FromTuples(
    "dependencies.worker", "*:worker:worker1:111:1.0"
);

var controller = new SimpleController();
controller.SetReferences(references);
controller.Greetenig("world");
controller.UnsetReferences();
controller = null;


```

