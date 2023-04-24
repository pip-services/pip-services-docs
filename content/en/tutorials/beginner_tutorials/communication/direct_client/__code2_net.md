
```cs
// Pre-requisites
using PipServices3.Commons.Refer;
using PipServices3.Commons.Config;
using PipServices3.Rpc.Clients;


// Direct client
class MyDirectClient: DirectClient<MyController>
{
    public MyDirectClient()
    {
        _controller = null;
        _dependencyResolver.Put("controller", new Descriptor("pip-services", "controller", "*", "*", "1.0"));
    }

    public void setReferences(IReferences references)
    {
        this._dependencyResolver.SetReferences(references);
        this._controller = _dependencyResolver.GetOneRequired<MyController>("controller");
    }

    public void myMethod()
    {
        _controller.myMethod();
    }
}


// Instantiation
var client = new MyDirectClient();
```
