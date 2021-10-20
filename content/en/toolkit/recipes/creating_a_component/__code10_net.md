
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;


static void Main(string[] args)
{
    // Step 1 - Creation
    var myComponentA = new MyComponentA();
    var myComponentB = new MyComponentB();

    // Step 2 - Configure the component
    myComponentA.Configure(ConfigParams.FromTuples(
        "param1", "XYZ",
        "param2", "987"
    ));

    // Step 3 - Referencing
    // Set references to the component
    myComponentA.SetReferences(References.FromTuples(
        new Descriptor("myservice", "mycomponent-b", "default", "default", "1.0"), myComponentB
    ));

    // Step 4 - Openning
    myComponentA.OpenAsync("123").Wait();

    // Step 5 - Execution
    myComponentA.MyTask("123");

    // Step 6 - Closing
    myComponentA.CloseAsync("123").Wait();

    // Step 7 - Un-referencing
    myComponentA.UnsetReferences();

    // Step 8 - Destruction
    myComponentA.Dispose();
}

```

