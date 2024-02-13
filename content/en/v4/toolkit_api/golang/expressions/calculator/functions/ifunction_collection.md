---
type: docs
title: "IFunctionCollection"
linkTitle: "IFunctionCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a list of functions.
---

### Description

The IFunctionCollection class allows you to create a list of functions.

### Methods

#### Add
Adds a new function to the collection.

> (c [*FunctionCollection](../function_collection)) Add(function [IFunction](../ifunction))

- **func**: [IFunction](../ifunction) - array with function parameters.


#### Clear
Clears the collection.

> (c [*FunctionCollection](../function_collection)) Clear()


#### FindByName
Finds a function in the list by it's name.

> (c [*FunctionCollection](../function_collection)) FindByName(name string) [IFunction](../ifunction)

- **name**: string - name of the function to be found.
- **returns**: [IFunction](../ifunction) - function or *nil* if the function was not found.

#### FindIndexByName
Finds a function's index in the list by it's name. 

> (c [*FunctionCollection](../function_collection)) FindIndexByName(name string) int

- **name**: string - name of the function to be found.
- **returns**: int - function's index in the list or *-1* if the function was not found.

#### Get
Gets a function by its index.

> (c [*FunctionCollection](../function_collection)) Get(index int) [IFunction](../ifunction)

- **index**: int - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### GetAll
Gets all functions stores in the collection.

> (c [*FunctionCollection](../function_collection)) GetAll() [[]IFunction](../ifunction)

- **returns**: [[]IFunction](../ifunction) - list with functions.

#### Length
Gets the number of functions stored in the collection.
> Length() int

- **retuns**: int - number of stored functions.


#### remove
Removes a function by its index.
> (c [*FunctionCollection](../function_collection)) Remove(index int)

- **index**: int - index of the function to be removed.

#### RemoveByName
Removes a function by its name.
> (c [*FunctionCollection](../function_collection)) RemoveByName(name string)

- **name**: string - name of the function to be removed.

