---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Creates a whitespace state.
---

**Implements**: [IWhitespaceState](../../iwhitespace_state)

### Description

The GenericWhitespaceState allows you to create a whitespace state.

**Important points**

- A whitespace state ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token. By default, all characters from 0 to 32 are whitespace.

### Constructors
Constructs a whitespace state with a default idea of what characters are, in fact, whitespace.

> GenericWhitespaceState()

### Instance methods


#### clear_whitespace_chars
Clears definitions of whitespace characters.  

> clear_whitespace_chars()

#### next_token
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.

#### set_whitespace_chars
Establishes the given characters as whitespace to ignore.

> set_whitespace_chars(from_symbol: int, to_symbol: int, enable: bool)

- **from_symbol**: int - first character index of the interval.
- **to_symbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
