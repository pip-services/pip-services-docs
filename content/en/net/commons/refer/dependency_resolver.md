---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class for resolving component dependencies.  

---

**Inherits**: [IReferenceable](../ireferenceable), [IReconfigurable](../../config/ireconfigurable)

### Description
The DependencyResolver is a helper class that allows you to resolve component dependencies. It is configured to resolve named dependencies by a specific locator.  

Important points:

- During deployment the dependency locator can be changed. This mechanism can be used to clarify a specific dependency among several alternatives. Typically components are configured to retrieve the first dependency that matches a logical group, type and version. However, if the container contains more than one instance and the resolution has to be specific about those instances; they can be given a unique name, and the dependency resolvers can be reconfigured to retrieve dependencies according to their name.

#### Configuration parameters

- **dependencies**:
    - **[dependency name 1]**: Dependency 1 locator (descriptor)
    - ...
    - **[dependency name N]**: Dependency N locator (descriptor)

#### References

References must match configured dependencies.

### Constructors
Creates a new instance of the dependency resolver.

See [ConfigParams](../../config/config_params), [IReferences](../ireferences)

> `public` DependencyResolver([ConfigParams](../../config/config_params) config)

- **config**: [ConfigParams](../../config/config_params) - (optional) default configuration where key is dependency name and value is locator (descriptor)


Creates a new instance of the dependency resolver.
> `public` DependencyResolver()



### Instance methods

#### configure
Configures the component with specified parameters.

> `public` void Configure(config: [ConfigParams](../../config/config_params))

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.


#### Find
Finds all matching dependencies by their name.

> `public` List\<object\> Find(string name, bool required)

- **name**: string - the dependency name to locate.
- **required**: bool - true to raise an exception when no dependencies are found.
- **returns**: List\<object\> - a list of found dependencies

#### Find
Finds all matching dependencies by their name and matching to the specified type.
**T** - the class type


> `public` List\<T\> find\<T\>(string name, bool required)

- **name**: string - the dependency name to locate.
- **required**: bool - true to raise an exception when no dependencies are found.
- **returns**: List\<T\> - a list of found dependencies

#### GetOneOptional
Gets one optional dependency by its name.

> `public` object GetOneOptional(name: string)

- **name**: string - the dependency name to locate.
- **returns**: object - a dependency reference or null of the dependency was not found

#### GetOneOptional
Gets one optional dependency by its name and matching to the specified type.
**T** - the class type

> `public` T GetOneOptional\<T\>(string name)

- **name**: string - the dependency name to locate.
- **returns**: T - a dependency reference or null of the dependency was not found

#### GetOneRequired
Gets one required dependency by its name. 
At least one dependency must present.If the dependency was found it throws a 
[ReferenceException](../reference_exception)

> `public` object GetOneRequired\<T\>(string name)

- **name**: string - the dependency name to locate.
- **returns**: object - a dependency reference

#### GetOneRequired
Gets one required dependency by its name and matching to the specified type. 
At least one dependency must present. 
If the dependency was found it throws a [ReferenceException](../reference_exception)
**T** - the class type.

> `public` T GetOneRequired\<T\>(string name)

- **name**: string - the dependency name to locate.
- **returns**: T - a dependency reference


#### GetOptional
Gets all optional dependencies by their name.

> `public` List\<T\> GetOptional(string name)

- **name**: string - the dependency name to locate.
- **returns**: List\<T\> - a list with found dependencies or empty list of no dependencies was found.


#### GetOptional
Gets all optional dependencies by their name.
**T** - the class type.

> `public` List\<T\> GetOptional\<T\>(string name)

- **name**: string - the dependency name to locate.
- **returns**: List\<T\> - a list with found dependencies or empty list of no dependencies was found.

#### GetRequired
Gets all required dependencies by their name. 
At least one dependency must present.
If no dependencies was found it throws a[ReferenceException](../reference_exception).

> `public` List\<object\> GetRequired(string name)

- **name**: string - the dependency name to locate.
- **returns**: List\<T\> - a list with found dependencies.


#### GetRequired
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependencies was found it throws a [ReferenceException](../reference_exception).
**T** - the class type


> `public` List\<T\> GetRequired\<T\>(string name)

- **name**: string - the dependency name to locate.
- **returns**: List\<T\> - a list with found dependencies.


#### Put
Adds a new dependency into this resolver.

> `public` void Put(string name, object locator)

- **name**: string - the dependency's name.
- **locator**: object - the locator to find the dependency by.

#### SetReferences
Sets the component references. References must match configured dependencies.

> `public` void SetReferences([IReferences](../ireferences) references)

- **references**: [IReferences](../ireferences) - references to set.

### Static methods

#### FromTuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is dependency name and value the depedency locator (descriptor).

> `public static` [DependencyResolver]() FromTuples(params object[] tuples)

- **tuples**: object[] - a list of values where odd elements are dependency name and the following even elements are dependency locator (descriptor)
- **returns**: [DependencyResolver]() - a newly created DependencyResolver.

### Examples

```cs
class MyComponent: IConfigurable, IReferenceable 
{
    private DependencyResolver _dependencyResolver = new DependencyResolver();
    private IMyPersistence _persistence;
    ...
    
    public MyComponent()
    {
        this._dependencyResolver.Put("persistence", new Descriptor("mygroup", "persistence", "*", "*", "1.0"));
    }
    
    public void Configure(ConfigParams config)
    {
        this._dependencyResolver.Configure(config);
    }
    
    public void SetReferences(IReferences references)
    {
        this._dependencyResolver.SetReferences(references);
        this._persistence = this._dependencyResolver.GetOneRequired<IMyPersistence>("persistence");
    }
}
    /// 
// Create mycomponent and set specific dependency out of many
var component = new MyComponent();
component.Configure(ConfigParams.FromTuples(
"dependencies.persistence", "mygroup:persistence:*:persistence2:1.0" // Override default persistence dependency
));
component.SetReferences(References.fromTuples(
new Descriptor("mygroup","persistence","*","persistence1","1.0"), new MyPersistence(),
new Descriptor("mygroup","persistence","*","persistence2","1.0"), new MyPersistence()  // This dependency shall be set
));

```

### See also
- #### [IReferences](../ireferences)
