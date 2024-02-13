---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a list of variables.
---

**Implements**: [IVariableCollection](../ivariable_collection)

### Description

The VariableCollection class allows you to implement a list of variables.


### Methods

#### Add
Adds a new variable to the collection.

> (c [*VariableCollection]()) Add(variable [IVariable](../ivariable))

- **variable**: [IVariable](../ivariable) - variable to be added.


#### Clear
Clears the collection.

> (c [*VariableCollection]()) Clear()


#### ClearValues
Clears all stored variables (assigns nil values).

> (c [*VariableCollection]()) ClearValues()


#### FindByName
Finds a variable by its name.

> (c [*VariableCollection]()) FindByName(name string) IVariable

- **name**: string - variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *nil* if the variable was not found.


#### FindIndexByName
Finds a variable's index in the list by it's name. 

> (c [*VariableCollection]()) FindIndexByName(name string) int

- **name**: string - name of the variale to be found.
- **returns**: int - variable's index in the list or *-1* if the variable was not found.


#### Get
Gets a variable by its index.

> (c [*VariableCollection]()) Get(index int) [IVariable](../ivariable)

- **index**: string - variable's index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### GetAll
Gets all variables stored in the collection

> (c [*VariableCollection]()) GetAll() [[]IVariable](../ivariable)
- **returns**: [[]IVariable](../ivariable) - list with variables.

#### Locate
Finds a variable in the list or creates a new one if the variable was not found.

> (c [*VariableCollection]()) Locate(name string) [IVariable](../ivariable)

- **name**: string - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### Length
Gets the number of variables stored in the collection.
> (c [*VariableCollection]()) Length() int

- **returns**: int - number of stored variables.

#### Remove
Removes a variable by its index.

> (c [*VariableCollection]()) Remove(index int)

- **index**: int - index of the variable to be removed.

#### RemoveByName
Removes a variable by it's name.

> (c [*VariableCollection]()) RemoveByName(name string)

- **name**: string - name of the variable to be removed.

