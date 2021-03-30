---
type: docs
title: "Commons"
description: > 
    The Commons module provides portable abstractions and patterns that can be used to implement non-trivial business logic in applications and services. The code provides a reasonably thin abstraction layer over most fundamental functions and delivers symmetric implementation that can be quickly ported between different platforms.
---

<h3>The module consists of the following packages:</h3>

* **Commands** - Commanding and eventing patterns
* **Config** - Configuration primitives
* **Convert** - Data converters
* **Data** - Data patterns
* **Errors** - Application errors
* **Random** -Random data generators
* **Refer** -Locator (IoC) pattern
* **Reflect** - Cross-language reflection
* **Run** - Component lifecycle management
* **Validate** - Validation framework
---

### Quick links

* [Configuration Pattern](https://www.pipservices.org/recipies/configuration)
* [Locator Pattern](https://www.pipservices.org/recipies/references)
* [Component Lifecycle](https://www.pipservices.org/recipies/component-lifecycle)
* [Components with Active Logic](https://www.pipservices.org/recipies/active-logic)
* [Data Patterns](https://www.pipservices.org/recipies/memory-persistence)
* [Get Help](https://www.pipservices.org/community/help)
* [Contribute](https://www.pipservices.org/community/contribute)

### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Commons
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```cs
using PipServices3.Commons;
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;

public class MyComponentA : IConfigurable, IReferenceable, IOpenable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private MyComponentB _anotherComponent;
    private bool _opened = true;

    public void Configure(ConfigParams config)
    {
        this._param1 = config.GetAsStringWithDefault("param1", this._param1);
        this._param2 = config.GetAsIntegerWithDefault("param2", this._param2);
    }

    public void SetReferences(IReferences references)
    {
        this._anotherComponent = references.GetOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );
    }

    public bool IsOpen()
    {
        return this._opened;
    }

    public Task OpenAsync(string correlationId)
    {
        Task task = Task.Factory.StartNew(() => 
        {
            this._opened = true;
            Console.WriteLine("MyComponentA has been opened .");
        });

        return task;   
    }

    public Task CloseAsync(string correlationId)
    {
        Task task = Task.Factory.StartNew(() =>
        {
            this._opened = true;
            Console.WriteLine("MyComponentA has been closed.");
        });

        return task;        
    }
}

```

Then here is how the component can be used in the code

```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;

MyComponentA myComponentA = new MyComponentA();

// Configure the component
myComponentA.Configure(ConfigParams.FromTuples(
    "param1", "XYZ",
    "param2", "987"
));

// Set references to the component
myComponentA.SetReferences(References.FromTuples(
    new Descriptor("myservice", "mycomponent-b", "default", "default", "1.0"), myComponentB
));

// Open the component
myComponentA.OpenAsync("123");
```