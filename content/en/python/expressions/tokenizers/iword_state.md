---
type: docs
title: "IWordState"
linkTitle: "IWordState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines an interface for tokenizer state that processes words, identificators or keywords
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description
The IWordState interface is used by tokenizer states that process words, identificators or keywords.

### Instance methods

#### clear_word_chars
Clears definitions of word chars.

> clear_word_chars()


#### set_word_chars
Establish characters in the given range as valid characters for part of a word after
the first character. Note that the tokenizer must determine which characters are valid
as the beginning character of a word.

> set_word_chars(from_symbol: int, to_symbol: int, enable: bool)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should use characters in the given range.
