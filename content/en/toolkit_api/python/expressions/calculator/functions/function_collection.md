---
type: docs
title: "FunctionCollection"
linkTitle: "FunctionCollection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a list of functions.
---

**Implements**: [IFunctionCollection](../ifunction_collection)

### Description

The FunctionCollection class allows you to implement a list of functions


### Properties

#### length
Gets the number of functions stored in the collection.
> length(): int

- **retuns**: int - number of stored functions.

### Instance methods

#### add
Adds a new function to the collection.

> add(func: [IFunction](../ifunction)) 

- **func**: [IFunction](../ifunction) - array with function parameters.


#### clear
Clears the collection.

> clear()


#### find_by_name
Finds a function in the list by it's name.

> find_by_name(name: str): [IFunction](../ifunction)

- **name**: str - function name to be found.
- **returns**: [IFunction](../ifunction) - function or *None* if no function was not found.

#### find_index_by_name
Finds a function's index in the list by it's name. 

> find_index_by_name(name: str): int

- **name**: str - function name to be found.
- **returns**: int - function's index in the list or *-1* if nofunction was not found.

#### get
Gets a function by its index.

> get(index: int): [IFunction](../ifunction)

- **index**: int - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### get_all
Gets all functions stored in the collection.

> get_all(): [IFunction[]](../ifunction)

- **returns**: [IFunction[]](../ifunction) - list with functions.


#### remove
Removes a function by its index.
> remove(index: number): void

- **index**: number - index of the function to be removed.

#### remove_by_name
Removes a function by its name.
> remove_by_name(name: str): void

- **name**: str - name of the function to be removed.
