---
type: docs
title: "IWordState"
linkTitle: "IWordState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines an interface for tokenizer state that processes words, identificators or keywords
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description
The IWordState interface is used by tokenizer states that process words, identificators or keywords.

### Methods

#### clearWordChars
Clears definitions of word chars.

> clearWordChars(): void


#### SetWordChars
Establish characters in the given range as valid characters for part of a word after
the first character. Note that the tokenizer must determine which characters are valid
as the beginning character of a word.

> SetWordChars(fromSymbol rune, toSymbol rune, enable bool)

- **fromSymbol**: rune - first character index of the interval.
- **toSymbol**: rune - last character index of the interval.
- **enable**: bool - *true* if this state should use characters in the given range.
