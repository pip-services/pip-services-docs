---
type: docs
title: "FunctionCollection"
linkTitle: "FunctionCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a list of functions.
---

**Implements**: [IFunctionCollection](../ifunction_collection)

### Description

The FunctionCollection class allows you to implement a list of functions

### Constructors

#### NewFunctionCollection
Creates new instances of function collection
> NewFunctionCollection() [*FunctionCollection]()


### Methods

#### Add
Adds a new function to the collection.

> (c [*FunctionCollection]()) Add(function [IFunction](../ifunction))

- **func**: [IFunction](../ifunction) - array with function parameters.


#### Clear
Clears the collection.

> (c [*FunctionCollection]()) Clear()


#### FindByName
Finds a function in the list by it's name.

> (c [*FunctionCollection]()) FindByName(name string) [IFunction](../ifunction)

- **name**: string - function name to be found.
- **returns**: [IFunction](../ifunction) - function or *nil* if no function was found.

#### FindIndexByName
Finds a function's index in the list by it's name. 

> (c [*FunctionCollection]()) FindIndexByName(name string) int

- **name**: string - function name to be found.
- **returns**: int - function's index in the list or *-1* if no function was found.

#### Get
Gets a function by its index.

> (c [*FunctionCollection]()) Get(index int) [IFunction](../ifunction) 

- **index**: int - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### GetAll
Gets all functions stored in the collection.

> (c [*FunctionCollection]()) GetAll() [[]IFunction](../ifunction)

- **returns**: [[]IFunction](../ifunction) - list with functions.

#### Length
Gets the number of functions stored in the collection.
> Length() int

- **retuns**: int - number of stored functions.


#### Remove
Removes a function by its index.
> (c [*FunctionCollection]()) Remove(index int)

- **index**: int - index of the function to be removed.

#### RemoveByName
Removes a function by its name.
> (c [*FunctionCollection]()) RemoveByName(name string)

- **name**: string - name of the function to be removed.

