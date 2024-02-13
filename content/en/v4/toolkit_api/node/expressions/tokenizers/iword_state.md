---
type: docs
title: "IWordState"
linkTitle: "IWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
description: > 
    Defines an interface for tokenizer state that processes words, identificators or keywords
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description
The IWordState interface is used by tokenizer states that process words, identificators or keywords.

### Instance methods

#### clearWordChars
Clears definitions of word chars.

> clearWordChars(): void


#### setWordChars
Establish characters in the given range as valid characters for part of a word after
the first character. Note that the tokenizer must determine which characters are valid
as the beginning character of a word.

> setWordChars(fromSymbol: number, toSymbol: number, enable: boolean): void

- **fromSymbol**: number - first character index of the interval.
- **toSymbol**: number - last character index of the interval.
- **enable**: boolean - *true* if this state should use characters in the given range.
