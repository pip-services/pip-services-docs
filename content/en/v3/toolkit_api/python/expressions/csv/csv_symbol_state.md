---
type: docs
title: "CsvSymbolState"
linkTitle: "CsvSymbolState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a symbol state to tokenize delimiters in CSV streams.
---

**Implements**: [GenericSymbolState](../../tokenizers/generic/generic_symbol_state)

### Description

The CsvSymbolState implements a symbol state to tokenize delimiters in CSV streams.

### Constructors
Constructs this object with specified parameters.

> CsvSymbolState()

### Instance methods

#### next_token
Gets the next token from the stream started from the character linked to this state.

> next_token(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.
