---
type: docs
title: "CsvSymbolState"
linkTitle: "CsvSymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a symbol state to tokenize delimiters in CSV streams.
---

**Implements**: [GenericSymbolState](../../tokenizers/generic/generic_symbol_state)

### Description

The CsvSymbolState implements a symbol state to tokenize delimiters in CSV streams.

### Constructors

#### NewCsvSymbolState
Constructs this object with specified parameters.

> NewCsvSymbolState() [*CsvSymbolState]()

### Methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*CsvSymbolState]()) NextToken(scanner [IScanner](../../io/iscanner), tokenizer [ITokenizer](../../tokenizers/itokenizer)) [*Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../tokenizers/token) - next token from the top of the stream.

