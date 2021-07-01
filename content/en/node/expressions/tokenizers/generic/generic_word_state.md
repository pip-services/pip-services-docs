---
type: docs
title: "GenericWordState"
linkTitle: "GenericWordState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A wordState returns a word from a scanner. Like other states, a tokenizer transfers the job
    of reading to this state, depending on an initial character.
---

**Implements**: [IWordState](../../iword_state)

### Description

which characters may begin a word, and this state determines which characters may appear
as a second or later character in a word. These are typically different sets of characters;
in particular, it is typical for digits to appear as parts of a word, but not
as the initial character of a word.


By default, the following characters may appear in a word.
The method *setWordChars()* allows customizing this.
<blockquote><pre>
From     To
 'a',    'z'
 'A',    'Z'
 '0',    '9'
  * 
   
</pre></blockquote>
As well as: minus sign, underscore, and apostrophe.

### Constructors
Constructs a word state with a default idea of what characters
are admissible inside a word (as described in the class comment).

> `public` constructor()

### Instance methods


#### clearWordChars
Clears definitions of word chars.

> `public` clearWordChars(): void

#### nextToken
Ignore word (such as blanks and tabs), and return the tokenizer's next token.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.

#### setWhitespaceChars
Establish characters in the given range as valid characters for part of a word after the first character. Note that the tokenizer must determine which characters are valid as the beginning character of a word.

> `public` setWordChars(fromSymbol: number, toSymbol: number, enable: boolean): void 

- **fromSymbol**: number - First character index of the interval.
- **toSymbol**: number - Last character index of the interval.
- **enable**: boolean - *true* if this state should ignore characters in the given range.