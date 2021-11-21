---
type: docs
title: "IFunctionCollection"
linkTitle: "IFunctionCollection"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a list of functions.
---

### Description

The IFunctionCollection class allows you to create a list of functions.


### Properties

#### length
Gets the number of functions stored in the collection.
> `abstract` int length

- **retuns**: int - number of stored functions.

### Instance methods

#### add
Adds a new function to the collection.

> void add([IFunction](../ifunction) func)

- **func**: [IFunction](../ifunction) - array with function parameters.


#### clear
Clears the collection.

> void clear()


#### findByName
Finds a function in the list by it's name.

> [IFunction?](../ifunction) findByName(String name)

- **name**: String - name of the function to be found.
- **returns**: [IFunction?](../ifunction) - function or *null*, if function was not found.

#### findIndexByName
Finds function index in the list by it's name. 

> int findIndexByName(String name)

- **name**: String - name of the function to be found.
- **returns**: int - function index in the list or *-1*, if function was not found.

#### get
Gets a function by its index.

> [IFunction](../ifunction) get(int index)

- **index**: int - function index.
- **returns**: [IFunction](../ifunction) - retrieved function.

#### getAll
Gets all functions stores in the collection.

> List<[IFunction](../ifunction)> getAll()

- **returns**: List<[IFunction](../ifunction)> - list with functions.


#### remove
Removes a function by its index.
> void remove(int index)

- **index**: int - index of the function to be removed.

#### removeByName
Removes a function by its name.
> void removeByName(String name)

- **name**: String - name of the function to be removed.
