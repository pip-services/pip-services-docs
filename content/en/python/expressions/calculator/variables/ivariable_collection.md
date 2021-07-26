---
type: docs
title: "IVariableCollection"
linkTitle: "IVariableCollection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a list of variables.
---

### Description

The IVariableCollection interface defines a list of variables.


### Properties

#### length
Gets the number of variables stored in the collection.
> length(): int

- **returns**: int - number of stored variables.


### Instance methods

#### add
Adds a new variable to the collection.

> add(variable: [IVariable](../ivariable))

- **variable**: [IVariable](../ivariable) - variable to be added.


#### clear
Clears the collection.

> clear()


#### clear_values
Clears all stored variables (assigns None values).

> clear_values()


#### find_by_name
Finds variable in the list by it's name.

> findByName(name: str): [IVariable](../ivariable)

- **name**: str - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *None* if function was not found.

#### find_index_by_name
Finds a variable index in the list by the variable's name. 

> find_index_by_name(name: str): int

- **name**: str - name of the variable to be found.
- **returns**: int - variable index in the list or *-1* if variable was not found.


#### get
Gets a variable by its index.

> get(index: int): [IVariable](../ivariable)

- **index**: str - variable index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### get_all
Gets all the variables stored in the collection.

> get_all(): List[[IVariable](../ivariable)]
- **returns**: List[[IVariable](../ivariable)] - list with stored variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

> locate(name: str): [IVariable](../ivariable)

- **name**: str - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

> remove(index: int)

- **index**: int - index of the variable to be removed.

#### remove_by_name
Removes a variable by it's name.

> remove_by_name(name: str)

- **name**: str - name of the variable to be removed.
