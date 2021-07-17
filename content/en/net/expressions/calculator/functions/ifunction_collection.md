---
type: docs
title: "IFunctionCollection"
linkTitle: "IFunctionCollection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a list of functions.
---

### Description

The IFunctionCollection class allows you to create a list of functions.


### Properties

#### Length
Gets the number of functions stored in the collection.
> int Length { get; }

### Instance methods

#### Add
Adds a new function to the collection.

> void Add([IFunction](../ifunction) function)

- **func**: [IFunction](../ifunction) - array with function parameters.


#### Clear
Clears the collection.

> void Clear()


#### FindByName
Finds a function in the list by it's name.

> [IFunction](../ifunction) FindByName(string name)

- **name**: string - function name to be found.
- **returns**: [IFunction](../ifunction) - function or *null* if no function was not found.

#### FindIndexByName
Finds a function's index in the list by it's name. 

> int FindIndexByName(string name)

- **name**: string - function name to be found.
- **returns**: int - function's index in the list or *-1* if nofunction was not found.

#### Get
Gets a function by its index.

> [IFunction](../ifunction) Get(int index)

- **index**: int - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### GetAll
Gets all functions stored in the collection.

> IList<[IFunction](../ifunction)> GetAll()

- **returns**: IList<[IFunction](../ifunction)> - list with functions.


#### Remove
Removes a function by its index.
> void Remove(int index)

- **index**: int - index of the function to be removed.

#### RemoveByName
Removes a function by its name.
> void RemoveByName(string name)

- **name**: string - name of the function to be removed.
