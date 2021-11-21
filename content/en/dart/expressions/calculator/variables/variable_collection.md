---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a list of variables.
---

**Implements**: [IVariableCollection](../ivariable_collection)

### Description

The VariableCollection allows you to implement a list of variables.


### Properties

#### length
Gets the number of variables stored in the collection.

`@override`
> int get length 

- **returns**: int - number of stored variables.


### Instance methods

#### add
Adds a new variable to the collection.

> void add([IVariable?](../ivariable) variable)

- **variable**: [IVariable?](../ivariable) - variable to be added.


#### clear
Clears the collection.

`@override`
> void clear()


#### clearValues
Clears all stored variables (assigns null values).

`@override`
> void clearValues()


#### findByName
Finds a variable in the list by it's name.

`@override`
> [IVariable?](../ivariable) findByName(String name)

- **name**: String - name of the variable to be found.
- **returns**: [IVariable?](../ivariable) - Variable or *null*, if function was not found.

#### findIndexByName
Finds a variable's index in the list by it's name. 

`@override`
> int findIndexByName(String name)

- **name**: String - name of the variale to be found.
- **returns**: int - variable's index in the list or *-1* if the variable was not found.


#### get
Gets a variable by its index.

`@override`
> [IVariable](../ivariable) get(int index)

- **index**: int - variable's index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all variables stored in the collection

`@override`
> List<[IVariable](../ivariable)> getAll()
- **returns**: [IVariable](../ivariable) - list with variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

`@override`
> [IVariable](../ivariable) locate(String name)

- **name**: String - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

`@override`
> void remove(int index)

- **index**: int - index of the variable to be removed.

#### removeByName
Removes a variable by it's name.

`@override`
> void removeByName(String name)

- **name**: String - name of the variable to be removed.
