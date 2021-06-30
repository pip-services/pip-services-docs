---
type: docs
title: "VariableCollection"
linkTitle: "VariableCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a variables list.
---

**Implements**: [IVariableCollection](../ivariableCollection)

### Description

TODO: add description


### Properties

#### length
Gets a number of variables stored in the collection.
> `public` length(): number

- **returns**: number - a number of stored variables.


### Instance methods

#### add
Adds a new variable to the collection.

> `public` add(variable: [IVariable](../ivariable)): void

- **variable**: [IVariable](../ivariable) - a variable to be added.


#### clear
Clears the collection.

> `public` clear(): void


#### clearValues
Clears all stored variables (assigns null values).

> `public` clearValues(): void


#### findByName
Clears all stored variables (assigns null values).

> `public` findByName(name: string): [IVariable](../ivariable)


#### findIndexByName
Finds variable index in the list by it's name. 

> `public` findIndexByName(name: string): number

- **name**: string - The variable name to be found.
- **returns**: number - Variable index in the list or *-1* if variable was not found.


#### get
Get a variable by its index.

> `public` get(index: number): [IVariable](../ivariable)

- **index**: string - a variable index.
- **returns**: [IVariable](../ivariable) - a retrieved variable.

#### getAll
Get all variables stores in the collection

> `public` getAll(): [IVariable[]](../ivariable)
- **returns**: [IVariable[]](../ivariable) - a list with variables.

#### locate
Finds variable in the list or create a new one if variable was not found.

> `public` locate(name: string): [IVariable](../ivariable)

- **name**: string - The variable name to be found.
- **returns**: [IVariable](../ivariable) - Found or created variable.

#### remove
Removes a variable by its index.

> `public` remove(index: number): void

- **index**: number - a index of the variable to be removed.

#### removeByName
Removes variable by it's name.

> `public` removeByName(name: string): void

- **name**: string - The variable name to be removed.
