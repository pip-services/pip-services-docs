---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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

> `public` GenericWhitespaceState() throws Exception

### Instance methods


#### clearWhitespaceChars
Clears definitions of whitespace characters.  

> `public` void clearWhitespaceChars()

#### nextToken
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

> `public` [Token](../../token) nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer))

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.

#### setWhitespaceChars
Establishes the given characters as whitespace to ignore.

> `public` void setWhitespaceChars(int fromSymbol, int toSymbol, boolean enable) throws Exception

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: boolean - *true* if this state should ignore characters in the given range.
