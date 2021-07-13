---
type: docs
title: "IVariableCollection"
linkTitle: "IVariableCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a list of variables.
---

**Implements**: [IVariableCollection](../ivariableCollection)

### Description

The IVariableCollection interface defines a list of variables.


### Properties

#### length
Gets the number of variables stored in the collection.
> length(): number

- **returns**: number - number of stored variables.


### Instance methods

#### add
Adds a new variable to the collection.

> add(variable: [IVariable](../ivariable)): void

- **variable**: [IVariable](../ivariable) - variable to be added.


#### clear
Clears the collection.

> clear(): void


#### clearValues
Clears all stored variables (assigns null values).

> clearValues(): void


#### findByName
Clears all stored variables (assigns null values).

> findByName(name: string): [IVariable](../ivariable)


#### findIndexByName
Finds a variable index in the list by the variable's name. 

> findIndexByName(name: string): number

- **name**: string - name of the variable to be found.
- **returns**: number - variable index in the list or *-1* if variable was not found.


#### get
Gets a variable by its index.

> get(index: number): [IVariable](../ivariable)

- **index**: string - variable index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all the variables stored in the collection.

> getAll(): [IVariable[]](../ivariable)
- **returns**: [IVariable[]](../ivariable) - list with stored variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

> locate(name: string): [IVariable](../ivariable)

- **name**: string - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

> remove(index: number): void

- **index**: number - index of the variable to be removed.

#### removeByName
Removes a variable by it's name.

> removeByName(name: string): void

- **name**: string - name of the variable to be removed.
