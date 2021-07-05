---
type: docs
title: "CsvSymbolState"
linkTitle: "CsvSymbolState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a symbol state to tokenize delimiters in CSV streams.
---

**Extends**: [GenericSymbolState](../../tokenizers/generic/generic_symbol_state)

### Description

The CsvSymbolState implements a symbol state to tokenize delimiters in CSV streams.

### Constructors
Constructs this object with specified parameters.

> `public` constructor()

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.
