---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Creates a whitespace state.
---

**Implements**: [IWhitespaceState](../../iwhitespace_state)

### Description

The GenericWhitespaceState allows you to create a whitespace state.

Important points

- A whitespace state ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token. By default, all characters from 0 to 32 are whitespace.

### Constructors
Constructs a whitespace state with a default idea of what characters are, in fact, whitespace.

> `public` constructor()

### Instance methods


#### clearWhitespaceChars
Clears definitions of whitespace characters.

> `public` clearWhitespaceChars(): void

#### nextToken
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.

#### setWhitespaceChars
Establishes the given characters as whitespace to ignore.

> `public` setWhitespaceChars(fromSymbol: number, toSymbol: number, enable: boolean): void

- **fromSymbol**: number - first character index of the interval.
- **toSymbol**: number - last character index of the interval.
- **enable**: boolean - *true* if true, this state should ignore characters in the given range.
