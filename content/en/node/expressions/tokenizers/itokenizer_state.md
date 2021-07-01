---
type: docs
title: "ITokenizerState"
linkTitle: "ITokenizerState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A tokenizerState returns a token, given a scanner, an initial character read from the scanner,
    and a tokenizer that is conducting an overall tokenization of the scanner. 
---

### Description
The tokenizer will typically have a character state table that decides which state to use, depending on an initial 
character. If a single character is insufficient, a state such as *SlashState*
will read a second character, and may delegate to another state, such as *SlashStarState*.
This prospect of delegation is the reason that the *nextToken()*
method has a tokenizer argument.

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> nextToken(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../itokenizer)): [Token](../token)

- **scanner**: [IScanner](../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../token) - The next token from the top of the stream.