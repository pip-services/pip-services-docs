---
type: docs
no_list: true
title: "Component References"
linkTitle: "Component References"
weight: 20
---

- by Anastas Fonotov

### Introduction

Developing systems out of loosely-coupled components significantly reduces complexity, improves testing, and increases developer productivity. The Pip.Services Toolkit offers a flexible and simple set of primitives for referencing components that is symmetrically implemented in all of the supported programming languages.

### The Locator Pattern

Developing loosely-coupled components has recently become very popular. There exist great implementations of the Inversion of Control pattern, which allows components to be linked to one another. In Java, the Spring framework is often used, and in .NET - unity. However, all of these implementations are tailored to the language they were initially made for. Furthermore, they are usually based upon Dependency Injection, which relies on runtime reflection. Since the Pip.Services Toolkit strives to provide symmetrical code across all of the languages it supports, its Inversion of Control mechanism was designed with a few distinctive features in mind.

The main distinction is that our implementation of Inversion of Control uses the Locator Pattern. The main concept behind this pattern is that, instead of injecting dependencies through constructors and attributes, the component receives a special object that is responsible for “finding” all of the necessary services. This approach provides developers with more flexibility and control, doesn’t require reflection, and can be implemented in any programming language.

### The IReferences Interface

The [IReferences](../../commons/refer/ireferences/)interface can be used to pass a so-called [References](../../commons/refer/references/) object to a component. This **References** object can be used by the component to retrieve any and all required dependencies. **IReferences** is defined as follows:

```cs
public interface IReferences
{
    void Put(object locator, object component);

    object Remove(object locator);

    List<object> RemoveAll(object locator);

    List<object> GetAllLocators();

    List<object> GetAll();

    List<object> GetOptional(object locator);

    List<T> GetOptional<T>(object locator);

    List<object> GetRequired(object locator);

    List<T> GetRequired<T>(object locator);

    object GetOneOptional(object locator);

    T GetOneOptional<T>(object locator);

    object GetOneRequired(object locator);

    T GetOneRequired<T>(object locator);

    List<object> Find(object locator, bool required);

    List<T> Find<T>(object locator, bool required);

}

```

The “locator” parameters are special keys that are used to search for necessary dependencies. Technically, any primitive value can be a locator - a number, string, or even a complex object (as long as it supports the “equals” operation).
The **Put** method is used to add a component and its locator/key to the list of dependencies. The rest of the methods are used for extracting dependencies. For example, the **GetRequired** method can be used for extracting essential dependencies, as an exception will be raised if no matches are found. The **GetOneOptional** method, on the other hand, can be used for optional dependencies - it will simply return null if no matching dependencies are found.

### The IReferenceable & IUnreferenceable Interfaces

A component must implement the [IReferenceable](../../commons/refer/ireferenceable/) interface to be able to receive dependencies. Dependencies are set in the component’s **setReferences** method, which is called with a link to a **References** object (described in the previous section).

```cs
public interface IUnreferenceable
{
    void UnsetReferences();
}

```

Dependencies can be set and removed either manually, or automatically by the component container. The setting of dependencies should be performed right after component creation and configuration, and their deletion - after stopping all active processes and right before destroying the component. For more information, see the [Component Lifecycle Recipe](../component_lifecycle).

### Example of Dependency Setting

Let’s take a look at a simple example of setting dependencies between components using the Pip.Services Toolkit’s References pattern. Suppose we have 2 services, Worker1 and Worker2, which are defined as follows:

```cs
class Worker1
{
    protected string defaultName;

    public Worker1(string name = null)
    {
        this.defaultName = name ?? "Default name1";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}

class Worker2
{
    protected string defaultName;

    public Worker2(string name = null)
    {
        this.defaultName = name ?? "Default name2";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}

```

Now let’s add a **SimpleController** component with a **greeting()** method. This method will perform just one simple operation - output a message that was generated by one of the Worker services. This component will be implementing the **IReferenceable** interface, and its **set_references** method will receive and set a reference to the Worker service via the 111 locator. We can also implement [IUnreferenceable](../../commons/refer/iunreferenceable/) and use the **unset_references** method to delete the previously set reference.

```cs
interface Worker
{
    public void Do(LogLevel level, string message);
}

class Worker1: Worker
{

    protected string defaultName;

    public Worker1(string name = null)
    {
        this.defaultName = name ?? "Default name1";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}

class Worker2: Worker
{
    protected string defaultName;

    public Worker2(string name = null)
    {
        this.defaultName = name ?? "Default name2";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}



class SimpleController : IReferenceable, IUnreferenceable
{
    protected Worker worker;

    public void SetReferences(IReferences references)
    {
        worker = references.GetOneRequired<Worker>(111);
    }

    public void UnsetReferences()
    {
        worker = null;
    }

    public void Greetenig(string name)
    {
        worker.Do(LogLevel.Info, "Hello, " + (name) + "!");
    }
}

  
```

We will be using the **References** class to pass dependencies into our components. This class is defined in the **Commons** module and implements the **IReferenceable** interface. We can use the **References.FromTuples** method to populate our list of dependencies using locator-reference pairs.

```cs

var references = References.FromTuples(
    111, new Worker1("worker1"),
    222, new Worker2("worker2")
);

var controller = new SimpleController();
controller.SetReferences(references);
controller.Greetenig("world");
controller.UnsetReferences();
controller = null;


```

### Component Descriptors

Using simple values as locators (keys) can be sufficient for dependency extraction in certain simple cases. However, when working with complex systems, you may come across a case where there are a multitude of dependencies, and you need to create complex configurations in accordance with various criteria.  
For such complex cases, the Pip.Services Toolkit includes a special locator that is called a [Descriptor](../../commons/refer/descriptor/). Descriptor locators allow dependencies to be found using complete or partial Descriptor matches. A Descriptor consists of the following 5 fields:

1. Group - logical group of objects. Usually, this is the name of the library or microservice. E.g. “pip-services”.
2. Type - logical type or object interface that presumes some general functionality. E.g. “logger”.
3. Kind - specific implementation of the logical type. E.g. (for logger components) “null”, “console”, “elasticsearch”, “fluentd”, etc.
4. Name - unique object name. E.g. “logger1” or “logger2”.
5. Version - object’s interface version. This is mainly used for finding compatible dependencies. E.g. “1.0”.

The **Descriptor** class’s definition is as follows:

```cs
public class Descriptor
{
    public Descriptor(string group, string type, string kind, string name, string version);

    public string Group { get; private set; }
    public string Type { get; private set; }
    public string Kind { get; private set; }
    public string Name { get; private set; }
    public string Version { get; private set; }

    public bool Match(Descriptor descriptor);
    public bool ExactMatch(Descriptor descriptor);
    public bool IsComplete();
    public override bool Equals(object obj);

    public override int GetHashCode();
    public override string ToString();
    public static Descriptor FromString(string value);
}


```

This way, we can define more than one logger in the system

```
pip-services:logger:console:logger1:1.0
pip-services:logger:elasticsearch:logger2:1.0
my-library:logger:mylog:logger3:1.0
```

The use of **Descriptors** also adds flexibility to the dependency searching process. Instead of having to find a complete match, we can indicate which **Descriptor** fields we want matched, and which can be skipped during comparison. If we want a field to be skipped during comparison, we simply set its value to ‘*’.
For example, we can retrieve all of the logger currently registered in the system:

```
*:logger:*:*:1.0
```

Or just loggers that output to the console:

```
*:logger:console:*:1.0
```

Likewise, just the logger named “logger2”:
```
*:logger:*:logger2:1.0
```

And even all dependencies from a library called “my_library”:
```
my_library:*:*:*:*
```

Returning to our “worker” example, we could use **Descriptors** in the following manner: 

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
controller.Greetenig("world");
controller.UnsetReferences();
controller = null;


```

### The Dependency Resolver

In complex systems, which often contain a number of components of the same type, it can be impossible to select a dependency from the list using just a set of predefined rules (descriptors). That’s where the [DependencyResolver](../../commons/refer/dependency_resolver/) helper class steps in. This class allows for dependency extraction using flexible configurations. When a **DependencyResolver** is created, a set of dependency names and corresponding default descriptors are defined inside it. Afterwards, these descriptors can be changed in the configuration’s “dependencies” section (see the [Component Configuration Recipe](../configuration) for more info on the specifics of component configuration).
The **DependencyResolver** class:

```cs
public class DependencyResolver : IReferenceable, IReconfigurable
{
    public DependencyResolver(ConfigParams config);
    public void Configure(ConfigParams config);
    public void SetReferences(IReferences references);
    public void Put(string name, object locator);
    public List<object> GetOptional(string name);
    public List<T> GetOptional<T>(string name);
    public List<object> GetRequired(string name);
    public List<T> GetRequired<T>(string name);
    public object GetOneOptional(string name);
    public T GetOneOptional<T>(string name);
    public object GetOneRequired(string name);
    public T GetOneRequired<T>(string name);
    public List<object> Find(string name, bool required);
    public List<T> Find<T>(string name, bool required);
    public static DependencyResolver FromTuples(params object[] tuples);
}


```

Below is the final version of our **“worker”** example, which now utilizes the **DependencyResolver**. By default, the **SimpleController** is capable of working with either of the worker services. However, once we configure **SimpleController** and, in turn, the **DependencyResolver** - the component is re-configured to work with just Worker1.

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

When creating such a configuration for a container, the configuration file might look something like the example below (see the [Container Configuration Recipe](../configuration) for more details):

```yml
- descriptor: "sample-references:worker:worker1:*:1.0"
  default_name: "Worker1"

- descriptor: "sample-references:worker:worker2:*:1.0"
  default_name: "Worker2"

- descriptor: "sample-references:controller:default:default:1.0"
  default_name: "Sample"
  dependencies:
    workers: "sample-references:worker:worker2:*:1.0"

```

### The Referencer

The [Referencer](../../commons/refer/referencer/) helper class can be used as well for setting and removing dependencies:

```cs
public class Reference
{
    public Reference(object locator, object component);
    public bool Match(object locator);
    public object GetComponent();
    public object GetLocator();
}

```

### See Also

- [Service Locator Pattern](https://www.geeksforgeeks.org/service-locator-pattern/)
- [wiki Service Locator Pattern](https://en.wikipedia.org/wiki/Service_locator_pattern)
- [Using a Service Locator](https://martinfowler.com/articles/injection.html#UsingAServiceLocator)
- [Component Configuration recipe](../configuration)
- [Component Lifecycle recipe](../component_lifecycle)
- [Component Container recipe](../component_container)
- [Commons Module](../../commons)
