---
type: docs
title: "GenericNumberState"
linkTitle: "GenericNumberState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A NumberState object returns a number from a scanner. 
---

**Implements**: [ICommentState](../../icomment_state)

### Description

The GenericNumberState class allows you to create a NumberState object returns a number from a scanner.

Important points
- This state's idea of a number allows an optional, initial minus sign, followed by one or more digits. A decimal point and another string of digits may follow these digits.

### Fields

<span class="hide-title-link">

#### DOT
Represents a dot (.) character.
> `protected` **DOT**: number = '.'.charCodeAt(0);

#### MINUS
Represents a minus (-) character.
> `protected` **MINUS**: number = '-'.charCodeAt(0);

</span>



### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
