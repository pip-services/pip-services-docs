---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t').
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description
The IWhitespaceState interface is used by TokenizerStates that process whitespaces (' ', '\t').

### Instance methods

#### clear_whitespace_chars
Clears definitions of whitespace characters.

> clear_whitespace_chars()


#### set_whitespace_chars
Establish the given characters as whitespace to ignore.

> set_whitespace_chars(from_symbol: int, to_symbol: int, enable: bool)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
