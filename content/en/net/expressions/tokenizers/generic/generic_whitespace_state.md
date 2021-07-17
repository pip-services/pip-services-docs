---
type: docs
title: "GenericWhitespaceState"
linkTitle: "GenericWhitespaceState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Creates a whitespace state.
---

**Inherits**: [IWhitespaceState](../../iwhitespace_state)

### Description

The GenericWhitespaceState allows you to create a whitespace state.

**Important points**

- A whitespace state ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token. By default, all characters from 0 to 32 are whitespace.

### Constructors
Constructs a whitespace state with a default idea of what characters are, in fact, whitespace.

> `public` GenericWhitespaceState()

### Instance methods


#### ClearWhitespaceChars
Clears definitions of whitespace characters.  

> `public` void ClearWhitespaceChars()

#### NextToken
Ignores whitespace (such as blanks and tabs), and returns the tokenizer's next token.

> `public virtual` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)


- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.

#### SetWhitespaceChars
Establishes the given characters as whitespace to ignore.

> `public` void SetWhitespaceChars(char fromSymbol, char toSymbol, bool enable)

- **fromSymbol**: char - first character index of the interval.
- **toSymbol**: char - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
