---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface to manage references stored in a map.

---

### Description

The IReferences interface can be used to manage references stored in a map, and which can be passed to other components to establish dependencies between them.

Generally speaking, an IReferences object is a simple map, where keys are locators and values are component references. Thus, it allows you to add, remove and find components    by their locators. Locators can be any values like integers, strings or component types. 

Important points

- Together with [IReferenceable](../ireferenceable) and [IUnreferenceable](../iunreferenceable) interfaces it implements a Locator pattern that is used by PipServices toolkit for Inversion of Control to assign external dependencies to components. 
- Generally, the PipServices toolkit uses [Descriptor](../descriptor) as locators that match according to the following fields: group, type, kind, name and version.
 
### Instance methods

#### find
Gets all component references that match specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.

> find\<T\>(locator: any, required: boolean): T[]

- **locator**: any - the locator to find a reference by.
- **required**: boolean - forces to raise an exception if no reference is found.
- **returns**: T[] - a list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> getAll(): any[]

- **returns**: any[] - a list with component references.

#### getAllLocators
Gets locators for all registered component references in this reference map.

> getAllLocators(): any[]

- **returns**: any[] - a list with component locators.

#### getOneOptional
Gets an optional component reference that matches specified locator.

> getOneOptional\<T\>(locator: any): T

- **locator**: any - the locator to find references by.
- **returns**: T - a matching component reference or null if nothing was found.

#### getOneRequired
Gets a required component reference that matches specified locator.  
Throws a [ReferenceException](../reference_exception) when no references found.

> getOneRequired\<T\>(locator: any): T

- **locator**: any - the locator to find a reference by.
- **returns**: T - a matching component reference.

#### getOptional
Gets all component references that match specified locator.

> getOptional\<T\>(locator: any): T[]

- **locator**: any - the locator to find references by.	 
- **returns**: T[] - a list with matching component references or empty list if nothing was found.

#### getRequired
Gets all component references that match specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.  
Throws a [ReferenceException](../reference_exception) when no references found.

> getRequired\<T\>(locator: any): T[]

- **locator**: any - the locator to find references by.
- **returns**: T[] - a list with matching component references.


#### put
Puts a new reference into this reference map.

> put(locator: any, component: any): void

- **locator**: any - a locator to find the reference by.
- **component**: any - a component reference to be added.

#### remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> remove(locator: any): any

- **locator**: any - a locator to remove reference
- **returns**: any - the removed component reference.


#### removeAll
Removes all component references that match the specified locator. 

> removeAll(locator: any): any[]

- **locator**: any - the locator to remove references by.
- **returns**: any[] - a list, containing all removed references.

### Examples

```typescript
export class MyController implements IReferenceable {
    public _persistence: IMyPersistence;
    ...    
    public setReferences(references: IReferences): void {
        this._persistence = references.getOneRequired<IMyPersistence>(
            new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
    }
    ...
}
     
let persistence = new MyMongoDbPersistence();
    
let controller = new MyController();
     
let references = References.fromTuples(
    new Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
    new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
);
controller.setReferences(references);

```


### See also
- #### [Descriptor](../descriptor)
- #### [References](../references)
