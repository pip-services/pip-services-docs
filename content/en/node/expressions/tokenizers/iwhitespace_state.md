---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t')
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description
TODO: add description

### Instance methods

#### clearWhitespaceChars
Clears definitions of whitespace characters.

> clearWhitespaceChars(): void


#### setWhitespaceChars
Establish the given characters as whitespace to ignore.

> setWhitespaceChars(fromSymbol: number, toSymbol: number, enable: boolean): void

- **fromSymbol**: number - First character index of the interval.
- **toSymbol**: number - Last character index of the interval.
- **enable**: boolean - *true* if this state should ignore characters in the given range.