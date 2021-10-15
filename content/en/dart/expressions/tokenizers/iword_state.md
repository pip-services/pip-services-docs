---
type: docs
title: "IWordState"
linkTitle: "IWordState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines an interface for tokenizer state that processes words, identificators or keywords
---

**Extends**: [ITokenizerState](../itokenizer_state)

### Description
The IWordState interface is used by tokenizer states that process words, identificators or keywords.

### Instance methods

#### clearWordChars
Clears definitions of word chars.

> void clearWordChars()


#### setWordChars
Establish characters in the given range as valid characters for part of a word after
the first character. Note that the tokenizer must determine which characters are valid
as the beginning character of a word.

> void setWordChars(int fromSymbol, int toSymbol, bool enable)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should use characters in the given range.
