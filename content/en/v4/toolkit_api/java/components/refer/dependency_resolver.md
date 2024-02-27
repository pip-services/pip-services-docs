---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Helper class for resolving component dependencies.  

---

**Implements:** [IReferenceable](../ireferenceable), [IReconfigurable](../../config/ireconfigurable)

### Description
The DependencyResolver is a helper class that allows you to resolve component dependencies. It is configured to resolve named dependencies by a specific locator.  

Important points:

- During deployment the dependency locator can be changed. This mechanism can be used to clarify a specific dependency among several alternatives. Typically components are configured to retrieve the first dependency that matches a logical group, type and version. However, if the container contains more than one instance and the resolution has to be specific about those instances, they can be given a unique name and the dependency resolvers can be reconfigured to retrieve dependencies according to their name.

#### Configuration parameters

- **dependencies**:
    - **[dependency name 1]**: Dependency 1 locator (descriptor)
    - ...
    - **[dependency name N]**: Dependency N locator (descriptor)

#### References

References must match configured dependencies.

### Constructors
Creates a new instance of the dependency resolver.



> `public` DependencyResolver([ConfigParams](../../config/config_params) config)

- **config**: [ConfigParams](../../config/config_params) - (optional) default configuration where key the is dependency name and value is the locator (descriptor)

### Instance methods

#### configure
Configures the component with specified parameters.

> `public`void configure([ConfigParams](../../config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.

#### find
Finds all matching dependencies by their name.

> `public` Object find(String name)

- **name**: String - name the name of the dependency to locate.
- **returns**: Object - the dependency locator or null if locator was not configured.

#### getOneOptional
Gets one optional dependency by its name.

> `public` Object getOneOptional(String name)

- **name**: String - dependency name to locate.
- **returns**: Object - dependency reference or null if the dependency was not found.

#### getOneRequired
Gets one required dependency by its name.
At least one dependency must present.
If the dependency was found it throws a [ReferenceException](../reference_exception).

> `public` Object getOneRequired(String name) throws ReferenceException

- **name**: String - dependency name to locate.
- **returns**: Object - dependency reference

#### getOptional
Gets all optional dependencies by their name.

> `public` List<Object> getOptional(String name)

- **name**: String - dependency name to locate.
- **returns**: List<Object> - list with found dependencies or empty list of no dependencies was found.

#### getRequired
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependency was found, it throws a [ReferenceException](../reference_exception)

> `public` List<Object> getRequired(String name) throws ReferenceException

- **name**: String - dependency name to locate.
- **returns**: List<Object> - list with found dependencies.

#### put
Adds a new dependency into this resolver.

> `public` void put(String name, Object locator)

- **name**: String - dependency's name.
- **locator**: Object - locator to find the dependency by.

#### setReferences
Sets the component references. References must match configured dependencies.

> `public` void setReferences([IReferences](../ireferences) references)

- **references**: [IReferences](../ireferences) - references to set.

### Static methods

#### fromTuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is a dependency name and value the depedency locator (descriptor).

> `public static` [DependencyResolver]() fromTuples(Object... tuples)

- **tuples**: Object... - list of values where odd elements are dependency names and the following even elements are dependency locators (descriptor).
- **returns**: [DependencyResolver]() - newly created DependencyResolver.

### Examples

```java
{
  class MyComponent implements IConfigurable, IReferenceable {
    private DependencyResolver _dependencyResolver = new DependencyResolver();
    private IMyPersistence _persistence;
    ...
 
    public MyComponent() {
      this._dependencyResolver.put("persistence", new Descriptor("mygroup", "persistence", "*", "*", "1.0"));
      }
 
    public void configure(ConfigParams config) {
      this._dependencyResolver.configure(config);
    }
 
    public void setReferences(IReferences references) {
      this._dependencyResolver.setReferences(references);
      this._persistence = (IMyPersistence)this._dependencyResolver.getOneRequired("persistence");
    }
  }
 
  // Create mycomponent and set specific dependency out of many
  MyComponent component = new MyComponent();
  component.configure(ConfigParams.fromTuples(
    "dependencies.persistence", "mygroup:persistence:*:persistence2:1.0" // Override default persistence dependency
  ));
  component.setReferences(References.fromTuples(
    new Descriptor("mygroup","persistence","*","persistence1","1.0"), new MyPersistence(),
    new Descriptor("mygroup","persistence","*","persistence2","1.0"), new MyPersistence()  // This dependency shall be set
  ));
  }
```

### See also
- #### [IReferences](../ireferences)
