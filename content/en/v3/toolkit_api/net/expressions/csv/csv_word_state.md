---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Inherits**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors
Constructs this object with specified parameters.

> `public` CsvWordState(char[] fieldSeparators, char[] quoteSymbols)

- **fieldSeparators**: char[] - separators for fields in a CSV stream.
- **quoteSymbols**: char[] - delimiter characters used to quote strings.
