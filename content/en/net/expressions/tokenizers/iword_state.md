---
type: docs
title: "IWordState"
linkTitle: "IWordState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines an interface for tokenizer state that processes words, identificators or keywords
---

**Inherits**: [ITokenizerState](../itokenizer_state)

### Description
The IWordState interface is used by tokenizer states that process words, identificators or keywords.

### Instance methods

#### ClearWordChars
Clears definitions of word chars.

> void ClearWordChars()


#### SetWordChars
Establish characters in the given range as valid characters for part of a word after
the first character. Note that the tokenizer must determine which characters are valid
as the beginning character of a word.

> void SetWordChars(char fromSymbol, char toSymbol, char enable)

- **fromSymbol**: char - first character index of the interval.
- **toSymbol**: char - last character index of the interval.
- **enable**: char - *true* if this state should use characters in the given range.
