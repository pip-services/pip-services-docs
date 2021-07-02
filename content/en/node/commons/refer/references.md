---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

**Implements**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate component references.

### Constructors
Creates a new instance of References and initializes it with references.

> `public` constructor(tuples: any[] = null)

- **tuples**: any[] - (optional) list of values where odd elements are locators and the following even elements are component references.

### Fields
<span class="hide-title-link">

#### _references
 A list of values where odd elements are locators and the following even elements are component references.
> `protected` **_references**: [Reference](../reference)[]

</span>

### Instance methods

#### find
Gets all component references that match a specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.

> `public` find\<T\>(locator: any, required: boolean): T[]

- **locator**: any - locator to find a reference by.
- **required**: boolean - forces to raise an exception if no reference is found.
- **returns**: T[] - list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> `public` getAll(): any[]

- **returns**: any[] - list with component references.

#### getAllLocators
Gets locators for all registered component references in this reference map.

> `public` getAllLocators(): any[]

- **returns**: any[] - list with component locators.

#### getOneOptional
Gets an optional component reference that matches a specified locator.

> `public` getOneOptional\<T\>(locator: any): T

- **locator**: any - locator to find references by.
- **returns**: T - matching component reference or null if nothing was found.

#### getOneRequired
Gets a required component reference that matches specified locator.  
throws a [ReferenceException](../reference_exception) when no references found.

> `public` getOneRequired\<T\>(locator: any): T

- **locator**: any - locator to find a reference by.	 
- **returns**: T - matching component reference.

#### getOptional
Gets all component references that match a specified locator.

> `public` getOptional\<T\>(locator: any): T[]

- **locator**: any - locator to find references by.	 
- **returns**: T[] - list with matching component references or empty list if nothing was found.

#### getRequired
Gets all component references that match a specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references found.

> `public` getRequired\<T\>(locator: any): T[]

- **locator**: any - locator to find references by.
- **returns**: T[] - list with matching component references.

#### put
Puts a new reference into this reference map.

> `public` put(locator: any, component: any): void

- **locator**: any - locator to find the reference by.
- **component**: any - component reference to be added.


#### remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> `public` remove(locator: any): any

- **locator**: any - locator to remove reference
- **returns**: any - removed component reference.

#### removeAll
Removes all component references that match the specified locator. 

> `public` removeAll(locator: any): any[]

- **locator**: any - locator to remove references by.
- **returns**: any[] - list containing all removed references.

### Static methods

#### fromTuples
Creates a new References from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [References](../references)

- **tuples**: any[] - list of values where odd elements are locators and the following even elements are component references
- **returns**: [References](../references) - newly created References.

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
- #### [IReferences](../ireferences)
