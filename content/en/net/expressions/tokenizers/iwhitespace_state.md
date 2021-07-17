---
type: docs
title: "IWhitespaceState"
linkTitle: "IWhitespaceState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines an interface for tokenizer state that processes whitespaces (' ', '\t').
---

**Inherits**: [ITokenizerState](../itokenizer_state)

### Description
The IWhitespaceState interface is used by TokenizerStates that process whitespaces (' ', '\t').

### Instance methods

#### ClearWhitespaceChars
Clears definitions of whitespace characters.

> void ClearWhitespaceChars()


#### SetWhitespaceChars
Establish the given characters as whitespace to ignore.

> void SetWhitespaceChars(char fromSymbol, char toSymbol, bool enable)

- **fromSymbol**: char - first character index of the interval.
- **toSymbol**: char - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
