---
type: docs
title: "CsvSymbolState"
linkTitle: "CsvSymbolState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Implements a symbol state to tokenize delimiters in CSV streams.
---

**Extends**: [GenericSymbolState](../../tokenizers/generic/generic_symbol_state)

### Description

The CsvSymbolState implements a symbol state to tokenize delimiters in CSV streams.

### Constructors
Constructs this object with specified parameters.

> CsvSymbolState()

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

`@override`
> [Token](../../tokenizers/token) nextToken([IScanner](../../io/iscanner) scanner, [ITokenizer?](../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer?](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.
