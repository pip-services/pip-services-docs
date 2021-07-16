---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t').
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description
The IWhitespaceState interface is used by TokenizerStates that process whitespaces (' ', '\t').

### Methods

#### ClearWhitespaceChars
Clears definitions of whitespace characters.

> ClearWhitespaceChars()


#### SetWhitespaceChars
Establish the given characters as whitespace to ignore.

> SetWhitespaceChars(fromSymbol rune, toSymbol rune, enable bool)

- **fromSymbol**: rune - first character index of the interval.
- **toSymbol**: rune - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
