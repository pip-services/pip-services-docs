---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A whitespace state ignores whitespace (such as blanks and tabs), and returns the tokenizer's
    next token. By default, all characters from 0 to 32 are whitespace.
---

**Implements**: [IWhitespaceState](../../iwhitespace_state)

### Description

TODO: add description

### Constructors
Constructs a whitespace state with a default idea of what characters are, in fact, whitespace.

> `public` constructor()

### Instance methods


#### clearWhitespaceChars
Clears definitions of whitespace characters.

> `public` clearWhitespaceChars(): void

#### nextToken
Ignore whitespace (such as blanks and tabs), and return the tokenizer's next token.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.

#### setWhitespaceChars
Establish the given characters as whitespace to ignore.

> `public` setWhitespaceChars(fromSymbol: number, toSymbol: number, enable: boolean): void

- **fromSymbol**: number - First character index of the interval.
- **toSymbol**: number - Last character index of the interval.
- **enable**: boolean - *true* if this state should ignore characters in the given range.