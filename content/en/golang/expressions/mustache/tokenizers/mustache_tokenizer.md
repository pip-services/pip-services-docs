---
type: docs
title: "MustacheTokenizer"
linkTitle: "MustacheTokenizer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Creates a Mustache tokenizer.
---

**Implements**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The MustacheTokenizer class allows you to create Mustache tokenizers.

### Constructors

#### NewMustacheTokenizer
Constructs this object with default parameters.  

> NewMustacheTokenizer() [*MustacheTokenizer]()

### Methods

#### ReadNextToken
Reads the next token

> (c [*MustacheTokenizer]()) ReadNextToken() [*Token](../../tokenizers/token)

- **returns**: [*Token](../../tokenizers/token) - next token
