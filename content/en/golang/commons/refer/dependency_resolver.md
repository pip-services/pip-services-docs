---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class for resolving component dependencies.  

---

**Implements:** [IReferences](../ireferences)

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

#### NewDependencyResolverWithParams
Creates a new instance of the dependency resolver.

See [ConfigParams](../../config/config_params), [IReferences](../ireferences)

> NewDependencyResolverWithParams(config [*conf.ConfigParams](../../config/config_params), references [IReferences](../ireferences)) [*DependencyResolver]()

- **config**: [*conf.ConfigParams](../../config/config_params) - (optional) default configuration where key is dependency name and value is locator (descriptor)
- **references**: [IReferences](../ireferences) - (optional) default component references

#### NewDependencyResolverFromTuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is dependency name and value the depedency locator (descriptor).

> NewDependencyResolverFromTuples(tuples ...interface{}) [*DependencyResolver]()

- **tuples**: ...interface{} - a list of values where odd elements are dependency name and the following even elements are dependency locator (descriptor)

#### NewDependencyResolver
Creates a new instance of the dependency resolver.

> NewDependencyResolver() [*DependencyResolver]()


### Methods

#### Configure
Configures the component with specified parameters.

> (c [*DependencyResolver]()) Configure(config [*conf.ConfigParams](../../config/config_params))

- **config**: [*conf.ConfigParams](../../config/config_params) - configuration parameters to set.

#### Find
Finds all matching dependencies by their name.

> (c *DependencyResolver) Find(name string, required bool) ([]interface{}, error)

- **name**: string - the dependency name to locate.
- **required**: bool - true to raise an exception when no dependencies are found.
- **returns**: ([]interface{}, error) - a list of found dependencies

#### GetOneOptional
Gets one optional dependency by its name.

> (c [*DependencyResolver]()) GetOneOptional(name string) interface{}

- **name**: string - the dependency name to locate.
- **returns**: interface{} - a dependency reference or nil of the dependency was not found

#### GetOneRequired
Gets one required dependency by its name.
At least one dependency must present.
If the dependency was found it throws a [ReferenceError](../reference_error)

> (c [*DependencyResolver]()) GetOneRequired(name string) (interface{}, error)

- **name**: string - the dependency name to locate.
- **returns**: (interface{}, error) - a dependency reference

#### GetOptional
Gets all optional dependencies by their name.

> (c [*DependencyResolver]()) GetOptional(name string) []interface{}

- **name**: string - the dependency name to locate.
- **returns**: []interface{} - a list with found dependencies or empty list of no dependencies was found.

#### GetRequired
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependencies was found it throws a [ReferenceError](../reference_error)

> (c [*DependencyResolver]()) GetRequired(name string) ([]interface{}, error)

- **name**: string - the dependency name to locate.
- **returns**: ([]interface{}, error) - a list with found dependencies.

#### Put
Adds a new dependency into this resolver.

> (c [*DependencyResolver]()) Put(name string, locator interface{})

- **name**: string - the dependency's name.
- **locator**: interface{} - the locator to find the dependency by.

#### SetReferences
Sets the component references. References must match configured dependencies.

> (c [*DependencyResolver]()) SetReferences(references IReferences)

- **references**: [IReferences](../ireferences) - references to set.


### Examples

```go
TODO: add example
```

### See also
- #### [IReferences](../ireferences)
