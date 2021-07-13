---
type: docs
title: "IFunctionCollection"
linkTitle: "IFunctionCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a list of functions.
---

### Description

The IFunctionCollection class allows you to create a list of functions.


### Properties

#### length
Gets a number of functions stored in the collection.
> length(): number

- **retuns**: number - a number of stored functions.

### Instance methods

#### add
Adds a new function to the collection.

> add(func: [IFunction](../ifunction)): void 

- **func**: [IFunction](../ifunction) - an array with function parameters.


#### clear
Clears the collection.

> clear(): void


#### findByName
Finds function in the list by it's name.

> findByName(name: string): [IFunction](../ifunction)

- **name**: string - The function name to be found.
- **returns**: [IFunction](../ifunction) - A function or *null* if function was not found.

#### findIndexByName
Finds function index in the list by it's name. 

> findIndexByName(name: string): number

- **name**: string - The function name to be found.
- **returns**: number - Function index in the list or *-1* if function was not found.

#### get
Get a function by its index.

> get(index: number): [IFunction](../ifunction)

- **index**: number - a function index.
- **returns**: [IFunction](../ifunction) - a retrieved function.

#### getAll
Get all functions stores in the collection

> getAll(): [IFunction[]](../ifunction)

- **returns**: [IFunction[]](../ifunction) - a list with functions.


#### remove
Removes a function by its index.
> remove(index: number): void

- **index**: number - a index of the function to be removed.

#### removeByName

> removeByName(name: string): void

- **name**: string -The function name to be removed.
