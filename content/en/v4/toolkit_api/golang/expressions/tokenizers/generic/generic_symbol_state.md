---
type: docs
title: "GenericSymbolState"
linkTitle: "GenericSymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    The GenericSymbolState class allows you to add multi-character symbols and obtain a symbol token from a scanner.

---

### Description

The GenericSymbolState class allows you to add multi-character symbols and obtain a symbol token from a scanner.

**Important points**

- The idea of a symbol is a character that stands on its own, such as an ampersand or a parenthesis.  
- For example, when tokenizing the expression *(isReady)& (isWilling)*, a typical tokenizer would return 7 tokens, including one for each parenthesis and one for the ampersand. Thus a series of symbols such as *)&(* becomes three tokens, while a series of letters such as *isReady* becomes a single word token.
- Multi-character symbols are an exception to the rule that a symbol is a standalone character.  
- For example, a tokenizer may want less-than-or-equals to tokenize as a single token. This class provides a method for establishing which multi-character symbols an object of this class should treat as single symbols. This allows, for example, *"cat <= dog"* to tokenize as three tokens, rather than splitting the less-than and equals symbols into separate tokens.
- By default, this state recognizes the following multi-character symbols: *!=, :-, <=, >=*

### Constructors

#### NewGenericSymbolState
Creates new instance of the component
> NewGenericSymbolState() [*GenericSymbolState]()


### Methods

#### Add
Adds a multi-character symbol.

> (c [*GenericSymbolState]()) Add(value string, tokenType int)

- **value**: string - symbol to add, such as *"=:="*
- **tokenType**: int - type of token ([TokenType](../../token_type))


#### NextToken
Returns a symbol token from a scanner.

> (c [*GenericSymbolState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

