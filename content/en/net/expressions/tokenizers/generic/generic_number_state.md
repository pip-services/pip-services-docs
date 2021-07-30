---
type: docs
title: "GenericNumberState"
linkTitle: "GenericNumberState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    A NumberState object returns a number from a scanner. 
---

**Inherits**: [INumberState](../../inumber_state)

### Description

The GenericNumberState class allows you to create a NumberState object returns a number from a scanner.

**Important points**
- This state's idea of a number allows an optional, initial minus sign, followed by one or more digits. A decimal point and another string of digits may follow these digits.



### Instance methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> `public virtual` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
