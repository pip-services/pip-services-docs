---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

### Description

The References class allows you to store and locate component references.

### Constructors

#### NewReferences
Creates a new instance of references and initializes it with references.

> NewReferences(ctx context.Context, tuples []any) [*References]()

- **ctx**: context.Context - operation context.
- **tuples**: []any - a list of values where odd elements are locators and the following even elements are component references

#### NewReferencesFromTuples
Creates a new References from a list of key-value pairs called tuples.

> NewReferencesFromTuples(ctx context.Context, tuples ...any) [*References]()

- **ctx**: context.Context - operation context.
- **tuples**: ...any - list of values where odd elements are locators and the following even elements are component references

#### NewEmptyReferences
Creates a new instance of references and initializes it with references.

> NewEmptyReferences(ctx context.Context) [*References]()

- **ctx**: context.Context - operation context.

### Fields
<span class="hide-title-link">

#### references
 List of values where odd elements are locators and the following even elements are component references.
> **references**: [][*Reference](../reference)

</span>

### Methods

#### Find
Gets all component references that match specified locator.  
Throws a [ReferenceError](../reference_error) when required is set to true but no references found.

> (c [*References]()) Find(locator any, required bool) ([]any, error)

- **locator**: any - locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: ([]any, error) - list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> (c [*References]()) GetAll() []any

- **returns**: []any - list with component references.

#### GetAllLocators
Gets locators for all registered component references in this reference map.

> (c [*References]()) GetAllLocators() []any

- **returns**: []any - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches specified locator.

> (c [*References]()) GetOneOptional(locator any) any

- **locator**: any - locator to find references by.
- **returns**: any - matching component reference or nil if nothing was found.

#### GetOneRequired
Gets a required component reference that matches specified locator.  
throws a [ReferenceError](../reference_error) when no references found.

> (c [*References]()) GetOneRequired(locator any) (any, error)

- **locator**: any - locator to find a reference by.	 
- **returns**: (any, error) - matching component reference.

#### GetOptional
Gets all component references that match specified locator.

> (c [*References]()) GetOptional(locator any) []any

- **locator**: any - locator to find references by.	 
- **returns**: []any - list with matching component references or empty list if nothing was found.

#### GetRequired
Gets all component references that match specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.
Throws a [ReferenceError](../reference_error) when no references found.

> (c [*References]()) GetRequired(locator any) ([]any, error)

- **locator**: any - locator to find references by.
- **returns**: ([]any, error) - list with matching component references.

#### Put
Puts a new reference into this reference map.

> (c [*References]()) Put(ctx context.Context, locator any, component any)

- **ctx**: context.Context - operation context.
- **locator**: any - locator to find the reference by.
- **component**: any - component reference to be added.


#### Remove
Removes a previously added reference that matches a specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [RemoveAll](#removeall) method instead.

> (c [*References]()) Remove(ctx context.Context, locator any) any

- **ctx**: context.Context - operation context.
- **locator**: any - locator used to remove a reference
- **returns**: any - removed component's reference.

#### RemoveAll
Removes all component references that match the specified locator. 

> (c [*References]()) RemoveAll(ctx context.Context, locator any) []any

- **ctx**: context.Context - operation context.
- **locator**: any - locator to remove references by.
- **returns**: []any - list, containing all removed references.


### Examples

```go

type MyController  {
	_persistence IMyPersistence;
}
func (mc *MyController) SetReferences(ctx context.Context, references IReferences) {
	res, descrErr := references.GetOneRequired(
		NewDescriptor("mygroup", "persistence", "*", "*", "1.0"),
	)

    if descrErr != nil {
        panic(descrErr)
    }

    mc._persistence = res
}

persistence := NewMyMongoDbPersistence()
controller := MyController()

references := NewReferencesFromTuples(
	new Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
	new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
)

controller.SetReferences(context.Background(), references);


```

### See also
- #### [IReferences](../ireferences)
