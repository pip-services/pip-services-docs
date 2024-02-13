---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t').
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description
The IWhitespaceState interface is used by TokenizerStates that process whitespaces (' ', '\t').

### Instance methods

#### clearWhitespaceChars
Clears definitions of whitespace characters.

> void clearWhitespaceChars()


#### setWhitespaceChars
Establish the given characters as whitespace to ignore.

> void setWhitespaceChars(int fromSymbol, int toSymbol, bool enable)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
