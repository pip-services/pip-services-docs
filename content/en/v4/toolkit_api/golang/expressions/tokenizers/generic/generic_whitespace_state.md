---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Creates a whitespace state.
---

### Description

The GenericWhitespaceState allows you to create a whitespace state.

**Important points**

- A whitespace state ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token. By default, all characters from 0 to 32 are whitespace.

### Constructors

#### NewGenericWhitespaceState
Constructs a whitespace state with a default idea of what characters are, in fact, whitespace.

> NewGenericWhitespaceState() [*GenericWhitespaceState]()

### Methods


#### ClearWhitespaceChars
Clears definitions of whitespace characters.  

> (c [*GenericWhitespaceState]()) ClearWhitespaceChars()

#### NextToken
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

> (c [*GenericWhitespaceState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

#### SetWhitespaceChars
Establishes the given characters as whitespace to ignore.

> (c [*GenericWhitespaceState]()) SetWhitespaceChars(fromSymbol rune, toSymbol rune, enable bool)

- **fromSymbol**: rune - first character index of the interval.
- **toSymbol**: rune - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.

