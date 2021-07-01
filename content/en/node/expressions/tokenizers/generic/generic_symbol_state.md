---
type: docs
title: "GenericSymbolState"
linkTitle: "GenericSymbolState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    The idea of a symbol is a character that stands on its own, such as an ampersand or a parenthesis.
---

**Implements**: [ISymbolState](../../isymbol_state)

### Description

For example, when tokenizing the expression *(isReady)& (isWilling)*, a typical
tokenizer would return 7 tokens, including one for each parenthesis and one for the ampersand.
Thus a series of symbols such as *)&(* becomes three tokens, while a series of letters
such as *isReady* becomes a single word token.


Multi-character symbols are an exception to the rule that a symbol is a standalone character.  
For example, a tokenizer may want less-than-or-equals to tokenize as a single token. This class
provides a method for establishing which multi-character symbols an object of this class should
treat as single symbols. This allows, for example, *"cat <= dog"* to tokenize as 
three tokens, rather than splitting the less-than and equals symbols into separate tokens.


By default, this state recognizes the following multi-character symbols:
*!=, :-, <=, >=*



### Instance methods

#### add
Add a multi-character symbol.

> `public` add(value: string, tokenType: [TokenType](../../token_type)): void

- **value**: string - The symbol to add, such as *"=:="*
- **tokenType**: [TokenType](../../token_type) - TODO: add description


#### nextToken
Return a symbol token from a scanner.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.