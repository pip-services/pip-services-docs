
```cs
using PipServices3.Commons.Refer;
using PipServices3.Commons.Config;

class Program
{
    static void Main(string[] args)
    {
        // Instantiation
        var myController = new MyController();
    }
}


class MyController : IConfigurable, IReferenceable
{
    public void Configure(ConfigParams config)
    {
    }

    public void SetReferences(IReferences references)
    {
    }

    public void myMethod()
    {
        Console.WriteLine("Hello world");
    }
}

```
