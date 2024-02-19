---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a list of variables.
---

**Implements**: [IVariableCollection](../ivariable_collection)

### Description

The VariableCollection allows you to implement a list of variables.


### Properties

#### _variables
List of variables stored in the collection.
> `private` List<[IVariable](../ivariable)> _variables = new ArrayList<>()


### Instance methods

#### add
Adds a new variable to the collection.

> `public` void add([IVariable](../ivariable) variable)

- **variable**: [IVariable](../ivariable) - variable to be added.


#### clear
Clears the collection.

> `public` void clear()


#### clearValues
Clears all stored variables (assigns null values).

> `public` void clearValues()


#### findByName
Finds variable in the list by it's name.

> `public` [IVariable](../ivariable) findByName(String name)

- **name**: String - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *null* if function was not found.

#### findIndexByName
Finds a variable's index in the list by it's name. 

> `public` int findIndexByName(String name)

- **name**: String - name of the variale to be found.
- **returns**: int - variable's index in the list or *-1* if the variable was not found.

#### get
Gets a variable by its index.

> `public` [IVariable](../ivariable) get(int index)

- **index**: int - variable's index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all variables stored in the collection

> `public` [IVariable](../ivariable) locate(String name)

- **returns**: [IVariable](../ivariable) - list with variables.

#### length
Gets the number of stored variables.

> `public` int length()

- **returns**: int - number of stored variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

> `public` [IVariable](../ivariable) locate(String name)

- **name**: String - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

> `public` void remove(int index)

- **index**: int - index of the variable to be removed.

#### removeByName
Removes a variable by it's name.

> `public` void removeByName(String name)

- **name**: String - name of the variable to be removed.
