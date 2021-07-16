---
type: docs
title: "IVariableCollection"
linkTitle: "IVariableCollection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines a list of variables.
---

### Description

The IVariableCollection interface defines a list of variables.


### Methods

#### Add
Adds a new variable to the collection.

> Add(variable [IVariable](../ivariable))

- **variable**: [IVariable](../ivariable) - variable to be added.


#### Clear
Clears the collection.

> Clear()


#### ClearValues
Clears all stored variables (assigns nil values).

> ClearValues()


#### FindByName
Clears all stored variables (assigns nil values).

> FindByName(name string) [IVariable](../ivariable)


#### findIndexByName
Finds a variable index in the list by the variable's name. 

> FindIndexByName(name string) int

- **name**: string - name of the variable to be found.
- **returns**: int - variable index in the list or *-1* if variable was not found.


#### Get
Gets a variable by its index.

> Get(index int) [IVariable](../ivariable)

- **index**: string - variable index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all the variables stored in the collection.

> GetAll() [[]IVariable](../ivariable)
- **returns**: [[]IVariable](../ivariable) - list with stored variables.

#### Locate
Finds a variable in the list or creates a new one if the variable was not found.

> Locate(name string) [IVariable](../ivariable)

- **name**: string - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### Length
Gets the number of variables stored in the collection.
> Length() int

- **returns**: int - number of stored variables.

#### Remove
Removes a variable by its index.

> Remove(index int)

- **index**: int - index of the variable to be removed.

#### RemoveByName
Removes a variable by it's name.

> RemoveByName(name string)

- **name**: string - name of the variable to be removed.
