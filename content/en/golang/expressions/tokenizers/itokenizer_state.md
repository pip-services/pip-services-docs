---
type: docs
title: "ITokenizerState"
linkTitle: "ITokenizerState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
   Interface for TokenizerStates.
---

### Description

The ITokenizerState interface is used by TokenizerStates. A tokenizerState returns a token, given a scanner, an initial character read from the scanner, and a tokenizer that is conducting an overall tokenization of the scanner. 

**Important points**

- The tokenizer will typically have a character state table that decides which state to use, depending on an initial character. If a single character is insufficient, a state such as *SlashState* will read a second character, and may delegate to another state, such as *SlashStarState*.  
  
- This prospect of delegation is the reason that the *nextToken()* method has a tokenizer argument.

### Methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> NextToken(scanner [IScanner](../../io/iscanner), tokenizer [ITokenizer](../itokenizer)) [*Token](../token)

- **scanner**: [IScanner](../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../token) - next token from the top of the stream.
