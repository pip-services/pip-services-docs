---
type: docs
title: "GenericWordState"
linkTitle: "GenericWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    A WordState returns a word from a scanner. 
---

### Description

The GenericWordState class allows you to create a WordState that returns a word from a scanner.

**Important points**

- Like other states, a tokenizer transfers the job of reading to this state, depending on an initial character.
- This state determines which characters may appear as a second or later character in a word. These are typically different sets of characters. In particular, it is typical for digits to appear as parts of a word, but not as the initial character of a word.
- By default, the following characters may appear in a word (The method *setWordChars()* allows customizing this):
<blockquote><pre>
From     To
 'a',    'z'
 'A',    'Z'
 '0',    '9'
   
</pre></blockquote>
As well as: minus sign, underscore, and apostrophe.

### Constructors

#### NewGenericWordState
Constructs a word state with a default idea of what characters
are admissible inside a word (as described in the class comment).

> NewGenericWordState() [*GenericWordState]()

### Methods


#### ClearWordChars
Clears definitions of word chars.

> c [*GenericWordState]()) ClearWordChars()

#### NextToken
Ignores a word (such as blanks and tabs), and returns the tokenizer's next token.

> (c [*GenericWordState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

#### SetWordChars
Establishes characters in the given range as valid characters for part of a word after the first character. Note that the tokenizer must determine which characters are valid as the beginning character of a word.

> (c [*GenericWordState]()) SetWordChars(fromSymbol rune, toSymbol rune, enable bool)

- **fromSymbol**: rune - first character index of the interval.
- **toSymbol**: rune - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.

