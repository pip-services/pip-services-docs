---
type: docs
title: "DependencyResolver"
linkTitle: "DependencyResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
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



> `public` constructor(config?: [ConfigParams](../../config/config_params), references?: [IReferences](../ireferences))

- **config**: [ConfigParams](../../config/config_params) - (optional) default configuration where key the is dependency name and value is the locator (descriptor)
- **references**: [IReferences](../ireferences) - (optional) default component references


### Instance methods

#### configure
Configures the component with specified parameters.

> `public` configure(config: [ConfigParams](../../config/config_params)): void

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.

#### find
Finds all matching dependencies by their name.

> `public` find\<T\>(name: string, required: boolean): T[]

- **name**: string - dependency name to locate.
- **required**: boolean - true to raise an exception when no dependencies are found.
- **returns**: T[] - list of found dependencies

#### getOneOptional
Gets one optional dependency by its name.

> `public` getOneOptional\<T\>(name: string): T

- **name**: string - dependency name to locate.
- **returns**: T - dependency reference or null if the dependency was not found.

#### getOneRequired
Gets one required dependency by its name.
At least one dependency must present.
If the dependency was found it throws a [ReferenceError](../reference_error).

> `public` getOneRequired\<T\>(name: string): T

- **name**: string - dependency name to locate.
- **returns**: T - dependency reference

#### getOptional
Gets all optional dependencies by their name.

> `public` getOptional\<T\>(name: string): T[]

- **name**: string - dependency name to locate.
- **returns**: T[] - list with found dependencies or empty list of no dependencies was found.

#### getRequired
Gets all required dependencies by their name.
At least one dependency must be present.
If no dependency was found, it throws a [ReferenceException](../reference_exception)

> `public` getRequired\<T\>(name: string): T[]

- **name**: string - dependency name to locate.
- **returns**: T[] - list with found dependencies.

#### put
Adds a new dependency into this resolver.

> `public` put(name: string, locator: any): void

- **name**: string - dependency's name.
- **locator**: any - locator to find the dependency by.

#### setReferences
Sets the component references. References must match configured dependencies.

> `public` setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to set.

### Static methods

#### fromTuples
Creates a new DependencyResolver from a list of key-value pairs called tuples
where key is a dependency name and value the depedency locator (descriptor).

> `public static` fromTuples(...tuples: any[]): [DependencyResolver]()

- **tuples**: any[] - list of values where odd elements are dependency names and the following even elements are dependency locators (descriptor).
- **returns**: [DependencyResolver]() - newly created DependencyResolver.

### Examples



### See also
- #### [IReferences](../ireferences)

