---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

**Extends**: [GenericCommentState](../generic_comment_state)

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.

### Fields

<span class="hide-title-link">

#### STAR
Represents a star (*) char
> `static` **STAR**: int = '*'.codeUnitAt(0)

#### SLASH
Represents a forward slash (/) char.
> `static` **SLASH**: int = '/'.codeUnitAt(0)

</span>



### Instance methods

#### getMultiLineComment
Ignores everything up to a closing star and slash, and then returns the tokenizer's next token.

> String getMultiLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: String - comment

#### getSingleLineComment
Ignores everything up to an end-of-line, and then returns the tokenizer's next token.

> String getSingleLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: String - comment

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

`@override`
> [Token?](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer?](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer?](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../token) - next token from the top of the stream.
