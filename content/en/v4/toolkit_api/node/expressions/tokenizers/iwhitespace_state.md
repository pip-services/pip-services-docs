---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t').
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description
The IWhitespaceState interface is used by TokenizerStates that process whitespaces (' ', '\t').

### Instance methods

#### clearWhitespaceChars
Clears definitions of whitespace characters.

> clearWhitespaceChars(): void


#### setWhitespaceChars
Establish the given characters as whitespace to ignore.

> setWhitespaceChars(fromSymbol: number, toSymbol: number, enable: boolean): void

- **fromSymbol**: number - first character index of the interval.
- **toSymbol**: number - last character index of the interval.
- **enable**: boolean - *true* if this state should ignore characters in the given range.
