
```cs
class SimpleController : IReferenceable, IUnreferenceable
{
    protected Worker worker;

    public void SetReferences(IReferences references)
    {
        worker = references.GetOneRequired<Worker>(new Descriptor("*", "worker", "worker1", "*", "1.0"));
    }

    ...
}


var references = References.FromTuples(
    new Descriptor("sample", "worker", "worker1", "111", "1.0"), new Worker1(),
    new Descriptor("sample", "worker", "worker2", "222", "1.0"), new Worker2()

);

var controller = new SimpleController();
controller.SetReferences(references);
controller.Greeting("world");
controller.UnsetReferences();
controller = null;


```

