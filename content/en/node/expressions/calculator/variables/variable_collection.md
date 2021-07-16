---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a list of variables.
---

**Implements**: [IVariableCollection](../ivariable_collection)

### Description

The VariableCollection allows you to implement a list of variables.


### Properties

#### length
Gets the number of variables stored in the collection.
> `public` length(): number

- **returns**: number - number of stored variables.


### Instance methods

#### add
Adds a new variable to the collection.

> `public` add(variable: [IVariable](../ivariable)): void

- **variable**: [IVariable](../ivariable) - variable to be added.


#### clear
Clears the collection.

> `public` clear(): void


#### clearValues
Clears all stored variables (assigns null values).

> `public` clearValues(): void


#### findByName
Clears all stored variables (assigns null values).

> `public` findByName(name: string): [IVariable](../ivariable)

- **name**: string - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Variable or *null* if function was not found.

#### findIndexByName
Finds a variable's index in the list by it's name. 

> `public` findIndexByName(name: string): number

- **name**: string - name of the variale to be found.
- **returns**: number - variable's index in the list or *-1* if the variable was not found.


#### get
Gets a variable by its index.

> `public` get(index: number): [IVariable](../ivariable)

- **index**: string - variable's index.
- **returns**: [IVariable](../ivariable) - retrieved variable.

#### getAll
Gets all variables stored in the collection

> `public` getAll(): [IVariable[]](../ivariable)
- **returns**: [IVariable[]](../ivariable) - list with variables.

#### locate
Finds a variable in the list or creates a new one if the variable was not found.

> `public` locate(name: string): [IVariable](../ivariable)

- **name**: string - name of the variable to be found.
- **returns**: [IVariable](../ivariable) - found or created variable.

#### remove
Removes a variable by its index.

> `public` remove(index: number): void

- **index**: number - index of the variable to be removed.

#### removeByName
Removes a variable by it's name.

> `public` removeByName(name: string): void

- **name**: string - name of the variable to be removed.
