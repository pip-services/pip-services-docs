
```cs
using System.Threading.Tasks;
using PipServices3.Components.Build;
using PipServices3.Container;

/// <summary>
/// Creating a process container
/// </summary>
class MyProcess : ProcessContainer
{
    public MyProcess() : base("myservice", "My service running as a process")
    {
        this._configPath = "./configV4.yaml";
        var MyFactory1 = new Factory();

        MyFactory1.RegisterAsType(new Descriptor("myservice", "component-a1", "default", "*", "1.0"), typeof(ComponentA1));
        MyFactory1.RegisterAsType(new Descriptor("myservice", "component-a2", "default", "*", "1.0"), typeof(ComponentA2));
        MyFactory1.RegisterAsType(new Descriptor("myservice", "component-b", "default", "*", "1.0"), typeof(ComponentB));

        this._factories.Add(MyFactory1);
    }
}

/// <summary>
/// Running the container
/// </summary>
/// <param name="args"></param>
static void Main(string[] args)
{
    try
    {
        var task = (new MyProcess()).RunAsync(args);
        Console.WriteLine("run");
        task.Wait();
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex);
        Console.ReadLine();
    }
}

```
