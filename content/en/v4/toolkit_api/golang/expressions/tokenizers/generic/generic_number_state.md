---
type: docs
title: "GenericNumberState"
linkTitle: "GenericNumberState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    A NumberState object that returns a number from a scanner. 
---

**Implements**: [INumberState](../../inumber_state)

### Description

The GenericNumberState class allows you to create a NumberState object that returns a number from a scanner.

**Important points**
- This state's idea of a number allows an optional, initial minus sign, followed by one or more digits. A decimal point and another string of digits may follow these digits.

### Constructors

#### NewGenericNumberState
Creates new instance of the component
> NewGenericNumberState() [*GenericNumberState]()

### Methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*GenericNumberState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

