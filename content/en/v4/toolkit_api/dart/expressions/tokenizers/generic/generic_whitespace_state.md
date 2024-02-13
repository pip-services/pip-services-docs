---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
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


#### clearWhitespaceChars
Clears definitions of whitespace characters.  

`@override`
> void clearWhitespaceChars()

#### nextToken
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

`@override`
> [Token?](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer?](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer?](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../token) - next token from the top of the stream.

#### setWhitespaceChars
Establishes the given characters as whitespace to ignore.

`@override`
> void setWhitespaceChars(int fromSymbol, int toSymbol, bool enable)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
