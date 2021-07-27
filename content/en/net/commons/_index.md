---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
no_list: true
weight: 30
description: > 
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It provides a set of tools used in microservices or backend services. It is designed to facilitate
    symmetric implementation accross different programming languages.

---


### Packages

The module contains the following packages:

* [**Commands**](commands) - commands and events 
* [**Config**](config) - component configuration
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - component dependencies (Based on the inversion of control (IoC) pattern)
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management
* [**Validate**](validate) - validation rules



### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Commons
```

Then, you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here below is an example on how you can implement a component that receives configuration, gets assigned references, and
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

Then, here is how the component can be used in the code:

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
