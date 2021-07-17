---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a list of variables.
---

**Implements**: [IVariableCollection](../ivariable_collection)

### Description

The VariableCollection allows you to implement a list of variables.


### Properties

#### Length
Gets the number of variables stored in the collection.

> `public virtual` int Length { get; }


### Instance methods

#### Add
Adds a new variable to the collection.

> `public virtual` void Add([IVariable](../ivariable) variable)

- **variable**: [IVariable](../ivariable) - variable to be added.


#### Clear
Clears the collection.

> `public virtual` void Clear()


#### ClearValues
Clears all stored variables (assigns null values).

> `public virtual` void ClearValues()


#### FindByName
Finds variable in the list by it's name.

> `public virtual` [IVariable](../ivariable) FindByName(string name)

- **name**: string - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *null* if function was not found.

#### FindIndexByName
Finds a variable index in the list by the variable's name. 

> `public virtual` int FindIndexByName(string name)

- **name**: string - name of the variable to be found.
- **returns**: int - variable index in the list or *-1* if variable was not found.


#### Get
Gets a variable by its index.

> `public virtual` [IVariable](../ivariable) Get(int index)

- **index**: string - variable index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### GetAll
Gets all the variables stored in the collection.

> `public virtual` IList<[IVariable](../ivariable)> GetAll()

- **returns**: [IVariable](../ivariable) - list with stored variables.

#### Locate
Finds a variable in the list or creates a new one if the variable was not found.

> `public virtual` [IVariable](../ivariable) Locate(string name)

- **name**: string - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### Remove
Removes a variable by its index.

> `public virtual` void Remove(int index)

- **index**: int - index of the variable to be removed.

#### RemoveByName
Removes a variable by it's name.

> `public virtual` void RemoveByName(string name)

- **name**: string - name of the variable to be removed.
