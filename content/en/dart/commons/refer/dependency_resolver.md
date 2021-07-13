---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

See [ConfigParams](../../config/config_params), [IReferences](../ireferences)

> DependencyResolver([[ConfigParams](../../config/config_params) config, [IReferences](../ireferences) references])

- **config**: [ConfigParams](../../config/config_params) - (optional) default configuration where key the is dependency name and value is the locator (descriptor)
- **references**: [IReferences](../ireferences) - (optional) default component references


### Instance methods

#### configure
Configures the component with specified parameters.

`@override`
> void configure([ConfigParams](../../config/config_params) config)

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.

#### find
Finds all matching dependencies by their name.

> List\<T\> find\<T\>(String name, bool required)

- **name**: String - dependency name to locate.
- **required**: bool - true to raise an exception when no dependencies are found.
- **returns**: List\<T\> - list of found dependencies

#### getOneOptional
Gets one optional dependency by its name.

> T getOneOptional\<T\>(String name)

- **name**: String - dependency name to locate.
- **returns**: T - dependency reference or null if the dependency was not found.

#### GetOneRequired
Gets one required dependency by its name.
At least one dependency must present.
If the dependency was found it throws a [ReferenceException](../reference_exception).

> T getOneRequired\<T\>(String name) 

- **name**: String - dependency name to locate.
- **returns**: T - dependency reference

#### getOptional
Gets all optional dependencies by their name.

> List\<T\> getOptional\<T\>(String name)

- **name**: String - dependency name to locate.
- **returns**: List\<T\> - list with found dependencies or empty list of no dependencies was found.

#### getRequired
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependency was found, it throws a [ReferenceException](../reference_exception)

> List\<T\> getRequired\<T\>(String name)

- **name**: String - dependency name to locate.
- **returns**: List\<T\> - list with found dependencies.

#### put
Adds a new dependency into this resolver.

> void put(String name, locator)

- **name**: String - dependency's name.
- **locator**: dynamic - locator to find the dependency by.

#### setReferences
Sets the component references. References must match configured dependencies.

> void setReferences([IReferences](../ireferences) references)

- **references**: [IReferences](../ireferences) - references to set.

### Static methods

#### fromTuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is a dependency name and value the depedency locator (descriptor).

> `static` [DependencyResolver]() fromTuples(List tuples)

- **tuples**: List - list of values where odd elements are dependency names and the following even elements are dependency locators (descriptor).
- **returns**: [DependencyResolver]() - newly created DependencyResolver.

### Examples

```dart
class MyComponent implements IConfigurable, IReferenceable {
    DependencyResolver _dependencyResolver  = new DependencyResolver();
    IMyPersistence _persistence ;
    ...
     MyComponent() {
        _dependencyResolver.put('persistence', new Descriptor('mygroup', 'persistence', '*', '*', '1.0'));
    }

    configure(ConfigParams config ) {
        _dependencyResolver.configure(config);
    }

    setReferences(IReferences references) {
        _dependencyResolver.setReferences(references);
        _persistence = _dependencyResolver.getOneRequired<IMyPersistence>('persistence');
    }
}
// Create mycomponent and set specific dependency out of many
var component =  MyComponent();
component.configure(ConfigParams.fromTuples([
    'dependencies.persistence', 'mygroup:persistence:*:persistence2:1.0'
// Override default persistence dependency
]));

component.setReferences(References.fromTuples([
     Descriptor('mygroup','persistence','*','persistence1','1.0'),  MyPersistence(),
     Descriptor('mygroup','persistence','*','persistence2','1.0'),  MyPersistence()
// This dependency shall be set
]));

```

### See also
- #### [IReferences](../ireferences)
