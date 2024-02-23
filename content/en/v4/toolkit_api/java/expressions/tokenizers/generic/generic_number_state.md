---
type: docs
title: "GenericNumberState"
linkTitle: "GenericNumberState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    A NumberState object returns a number from a scanner. 
---

**Implements**: [INumberState](../../inumber_state)

### Description

The GenericNumberState class allows you to create a NumberState object returns a number from a scanner.

Important points
- This state's idea of a number allows an optional, initial minus sign, followed by one or more digits. A decimal point and another string of digits may follow these digits.

### Fields

<span class="hide-title-link">

#### DOT
Represents a dot (.) character.
> `protected final` int **DOT** = '.';

#### MINUS
Represents a minus (-) character.
> `protected final` int **MINUS** = '-';

</span>



### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
