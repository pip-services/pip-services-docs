---
type: docs
title: "IFunctionCollection"
linkTitle: "IFunctionCollection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Implements a list of functions.
---

### Description

The IFunctionCollection class allows you to create a list of functions.

### Methods

#### Add
Adds a new function to the collection.

> (c [*FunctionCollection]()) Add(function [IFunction](../ifunction))

- **func**: [IFunction](../ifunction) - an array with function parameters.


#### Clear
Clears the collection.

> (c [*FunctionCollection]()) Clear()


#### FindByName
Finds a function in the list by it's name.

> (c [*FunctionCollection]()) FindByName(name string) [IFunction](../ifunction)

- **name**: string - name of the function to be found.
- **returns**: [IFunction](../ifunction) - function or *nil* if function was not found.

#### FindIndexByName
Finds function index in the list by it's name. 

> (c [*FunctionCollection]()) FindIndexByName(name string) int

- **name**: string - name of the function to be found.
- **returns**: int - function index in the list or *-1* if function was not found.

#### Get
Gets a function by its index.

> (c [*FunctionCollection]()) Get(index int) [IFunction](../ifunction)

- **index**: int - function index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### GetAll
Gets all functions stores in the collection.

> (c [*FunctionCollection]()) GetAll() [[]IFunction](../ifunction)

- **returns**: [[]IFunction](../ifunction) - list with functions.

#### Length
Gets the number of functions stored in the collection.
> Length() int

- **retuns**: int - number of stored functions.


#### remove
Removes a function by its index.
> (c [*FunctionCollection]()) Remove(index int)

- **index**: int - index of the function to be removed.

#### RemoveByName

> (c [*FunctionCollection]()) RemoveByName(name string)

- **name**: string - name of the function to be removed.
