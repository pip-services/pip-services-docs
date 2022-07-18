---
type: docs
title: "FunctionCollection"
linkTitle: "FunctionCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a list of functions.
---

**Implements**: [IFunctionCollection](../ifunction_collection)

### Description

The FunctionCollection class allows you to implement a list of functions


### Properties

#### length
Gets the number of functions stored in the collection.
> `public` length(): number

- **retuns**: number - number of stored functions.

### Instance methods

#### add
Adds a new function to the collection.

> `public` add(func: [IFunction](../ifunction)): void 

- **func**: [IFunction](../ifunction) - array with function parameters.


#### clear
Clears the collection.

> `public` clear(): void


#### findByName
Finds a function in the list by it's name.

> `public` findByName(name: string): [IFunction](../ifunction)

- **name**: string - function name to be found.
- **returns**: [IFunction](../ifunction) - function or *null* if no function was not found.

#### findIndexByName
Finds a function's index in the list by it's name. 

> `public` findIndexByName(name: string): number

- **name**: string - function name to be found.
- **returns**: number - function's index in the list or *-1* if nofunction was not found.

#### get
Gets a function by its index.

> `public` get(index: number): [IFunction](../ifunction)

- **index**: number - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### getAll
Gets all functions stored in the collection.

> `public` getAll(): [IFunction[]](../ifunction)

- **returns**: [IFunction[]](../ifunction) - list with functions.


#### remove
Removes a function by its index.
> `public` remove(index: number): void

- **index**: number - index of the function to be removed.

#### removeByName
Removes a function by its name.
> `public` removeByName(name: string): void

- **name**: string - name of the function to be removed.
