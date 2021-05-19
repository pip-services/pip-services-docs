---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class for resolving component dependencies.  

---

**Implements:** [IReferenceable](../ireferenceable), [IReconfigurable](../../config/ireconfigurable)

### Description
The DependencyResolver is a helper class that allows you to resolve component dependencies. It is configured to resolve named dependencies by a specific locator.  

Important points:

- During deployment the dependency locator can be changed. This mechanism can be used to clarify a specific dependency among several alternatives. Typically components are configured to retrieve the first dependency that matches a logical group, type and version. However, if the container contains more than one instance and the resolution has to be specific about those instances; they can be given a unique name, and the dependency resolvers can be reconfigured to retrieve dependencies according to their name.

##### Configuration parameters

- **dependencies**:
    - **[dependency name 1]**: Dependency 1 locator (descriptor)
    - ...
    - **[dependency name N]**: Dependency N locator (descriptor)

##### References

References must match configured dependencies.

### Constructors
Creates a new instance of the dependency resolver.

See [ConfigParams](../../config/config_params), [IReferences](../ireferences)

> DependencyResolver(config: [ConfigParams](../../config/config_params) = None, references: [IReferences](../ireferences) = None)

- **config**: [ConfigParams](../../config/config_params) - (optional) default configuration where key is dependency name and value is locator (descriptor)
- **references**: [IReferences](../ireferences) - (optional) default component references


### Instance methods

#### configure
Configures the component with specified parameters.

> configure(config: [ConfigParams](../../config/config_params))

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.

#### find
Finds all matching dependencies by their name.

> find(name: str, required: bool): List[Any]

- **name**: str - the dependency name to locate.
- **required**: bool - true to raise an exception when no dependencies are found.
- **returns**: List[Any] - a list of found dependencies

#### get_one_optional
Gets one optional dependency by its name.

> get_one_optional(name: str): Any

- **name**: str - the dependency name to locate.
- **returns**: Any - a dependency reference or None of the dependency was not found

#### get_one_required
Gets one required dependency by its name.
At least one dependency must present.
If the dependency was found it throws a [ReferenceException](../reference_exception)

> get_one_required(name: str): Any

- **name**: str - the dependency name to locate.
- **returns**: Any - a dependency reference

#### get_optional
Gets all optional dependencies by their name.

> get_optional(name: str): List[Any]

- **name**: str - the dependency name to locate.
- **returns**: List[Any] - a list with found dependencies or empty list of no dependencies were found.

#### get_required
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependencies were found it throws a [ReferenceException](../reference_exception)

> get_required(name: str): List[Any]

- **name**: str - the dependency name to locate.
- **returns**: List[Any] - a list with found dependencies.

#### put
Adds a new dependency into this resolver.

> put(name: str, locator: Any)

- **name**: str - the dependency's name.
- **locator**: Any - the locator to find the dependency by.

#### set_references
Sets the component references. References must match configured dependencies.

> set_references(references: [IReferences](../ireferences))

- **references**: [IReferences](../ireferences) - references to set.

### Static methods

#### from_tuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is the dependency name and value the depedency locator (descriptor).

> `static` from_tuples(*tuples: Any): [DependencyResolver]()

- **tuples**: Any - a list of values where odd elements are dependency name and the following even elements are dependency locator (descriptor)
- **returns**: [DependencyResolver]() - a newly created DependencyResolver.

### Examples

```python
class MyComponent(IConfigurable, IReferenceable):
    _dependencyResolver = None
    _persistence = None
    
    def __init__(self):
        self._dependencyResolver.put("persistence", new Descriptor("mygroup", "persistence", "*", "*", "1.0"))

    def configure(self, config):
        self._dependencyResolver.configure(config)
        
    def set_references(self, references):
        self._dependencyResolver.setReferences(references)
        self._persistence = self._dependencyResolver.get_one_required("persistence")

    component = MyComponent()
    component.configure(ConfigParams.from_tuples(
    "dependencies.persistence", "mygroup:persistence:*:persistence2:1.0"))

    component.set_references(References.from_tuples(Descriptor("mygroup","persistence","*","persistence1","1.0"),
    MyPersistence(),
    Descriptor("mygroup","persistence","*","persistence2","1.0"), MyPersistence()
    # This dependency shall be set
    ))

```

### See also
- #### [IReferences](../ireferences)
