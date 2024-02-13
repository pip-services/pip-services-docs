---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a general tokenizer.
---

**Implements**: [ITokenizer](../itokenizer)

### Description

The AbstractTokenizer class defines a general tokenizer.

### Fields

<span class="hide-title-link">

#### _last_token_type
Last token type
> **_last_token_type**: [TokenType](../token_type) = [TokenType.Unknown](../token_type)

#### _next_token
Next token
> **_next_token**: [Token](../token)

#### _scanner
Scanner
> **_scanner**: [IScanner](../../io/iscanner)


#### comment_state
Comment state
> **comment_state**: [ICommentState](../icomment_state)


#### decode_strings
Boolean that defines the option to decode strings or not.
> **decode_strings**: bool


#### merge_whitespaces
Boolean that defines the option to unify white spaces.
> **merge_whitespaces**: bool


#### number_state
Number state
> **number_state**: [INumberState](../inumber_state)


#### quote_state
Quote state
> **quote_state**: [IQuoteState](../iquote_state)

#### skip_comments
Boolean that defines the option to skip comments.
> **skip_comments**: bool


#### skip_eof
Boolean that defines the option to skip EOF.
> **skip_eof**: bool

#### skip_unknown
Boolean that defines the option to skip unknowns.
> **skip_unknown**: bool


#### skip_whitespaces
Boolean that defines the option to skip white spaces.
> **skip_whitespaces**: bool


#### symbol_state
Symbol state
> **symbol_state**: [ISymbolState](../isymbol_state)

#### unify_numbers
Boolean that defines the option to unify numbers.
> **unify_numbers**: bool


#### whitespace_state
White space state.
> **whitespace_state**: [IWhitespaceState](../iwhitespace_state)


#### word_state
Word state.
> **word_state**: [IWordState](../iword_state)


</span>

### Properties

#### scanner
Scanner
> scanner(): [IScanner](../../io/iscanner)

- **returns**: [IScanner](../../io/iscanner) - scanner


> scanner(value: [IScanner](../../io/iscanner))

- **value**: [IScanner](../../io/iscanner) - scanner


### Instance methods


#### clear_character_states
Clears all character states.

> clear_character_states()

#### get_character_state
Gest the state for a given character.
> get_character_state(symbol: int): [ITokenizerState](../itokenizer_state)

- **symbol**: int - symbol
- **returns**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### has_next_token
Finds out if the tokenizer has a next token.
> has_next_token(): bool

- **returns**: bool - true if it has a next token, false otherwise.

#### next_token
Gets the next token.
> next_token(): [Token](../token)

- **returns**: [Token](../token) - next token

#### read_next_token
Reads the next token.
> read_next_token(): [Token](../token)

- **returns**: [Token](../token) - next token

#### set_character_state
Sets the characters' state.
> set_character_state(from_symbol: int, to_symbol: int, state: [ITokenizerState](../itokenizer_state)): void

- **from_symbol**: int - first symbol
- **to_symbol**: int - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### tokenize_buffer
Provides a token for a string buffer.

> tokenize_buffer(buffer: str): List[[Token](../token)]

- **buffer**: str - buffer
- **returns**: List[[Token](../token)] - token

#### tokenize_buffer_to_strings
Creates a list of token values.

> tokenize_buffer_to_strings(buffer: str): List[str]

- **buffer**: str - buffer
- **returns**: List[str] - list of token values


#### tokenize_stream
Creates a list of tokens

> tokenize_stream(scanner: [IScanner](../../io/iscanner)): List[[Token](../token)]

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: List[[Token](../token)] - list of tokens


#### tokenize_stream_to_strings
Creates a list of token values.

> tokenize_stream_to_strings(scanner: [IScanner](../../io/iscanner)): List[str]

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: List[str] - list of token values

