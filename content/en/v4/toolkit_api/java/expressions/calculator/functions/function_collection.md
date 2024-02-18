---
type: docs
title: "FunctionCollection"
linkTitle: "FunctionCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a list of functions.
---

**Implements**: [IFunctionCollection](../ifunction_collection)

### Description

The FunctionCollection class allows you to implement a list of functions


### Instance methods

#### length
Gets the number of functions stored in the collection.
> int length()

- **retuns**: int - number of stored functions.


#### add
Adds a new function to the collection.

> `public` void add(IFunction func)

- **func**: [IFunction](../ifunction) - array with function parameters.


#### clear
Clears the collection.

> `public` void clear()


#### findByName
Finds a function in the list by it's name.

> `public` [IFunction](../ifunction) findByName(String name)

- **name**: String - function name to be found.
- **returns**: [IFunction](../ifunction) - function or *null* if no function was not found.

#### findIndexByName
Finds a function's index in the list by it's name. 

> `public` int findIndexByName(String name)

- **name**: String - function name to be found.
- **returns**: int - function's index in the list or *-1* if nofunction was not found.

#### get
Gets a function by its index.

> `public` [IFunction](../ifunction) get(int index)

- **index**: int - function's index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### getAll
Gets all functions stored in the collection.

> `public` List<[IFunction[]](../ifunction)> getAll()

- **returns**: [IFunction[]](../ifunction) - list with functions.


#### remove
Removes a function by its index.
> `public` void remove(int index)

- **index**: int - index of the function to be removed.

#### removeByName
Removes a function by its name.
> `public` void removeByName(String name)

- **name**: String - name of the function to be removed.
