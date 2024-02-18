---
type: docs
title: "IVariableCollection"
linkTitle: "IVariableCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a list of variables.
---

### Description

The IVariableCollection interface defines a list of variables.

### Instance methods

#### add
Adds a new variable to the collection.

> void add(IVariable variable)

- **variable**: [IVariable](../ivariable) - variable to be added.


#### clear
Clears the collection.

> void clear()


#### clearValues
Clears all stored variables (assigns null values).

> void clearValues()


#### findByName
Finds variable in the list by it's name.

> [IVariable](../ivariable) findByName(String name)

- **name**: string - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *null* if function was not found.

#### findIndexByName
Finds a variable index in the list by the variable's name. 

> int findIndexByName(String name)

- **name**: String - name of the variable to be found.
- **returns**: int - variable index in the list or *-1* if variable was not found.


#### get
Gets a variable by its index.

>  [IVariable](../ivariable) get(int index)

- **index**: int - variable index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all the variables stored in the collection.

> List<[IVariable[]](../ivariable)> getAll()
- **returns**: List<[IVariable[]](../ivariable)> - list with stored variables.

#### length
Gets a number of variables stored in the collection.

> int length()

- **returns**: int - number of stored variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

> [IVariable](../ivariable) locate(String name)

- **name**: String - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

> void remove(int index)

- **index**: int - index of the variable to be removed.

#### removeByName
Removes a variable by it's name.

> void removeByName(String name)

- **name**: String - name of the variable to be removed.
