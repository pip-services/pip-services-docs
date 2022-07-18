---
type: docs
title: "TextPushbackReader"
linkTitle: "TextPushbackReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Wraps TextReader to provide unlimited pushback that allows tokenizers
    to look ahead through stream to perform lexical analysis.
---

**Inherits**: [IPushbackReader](../ipushback_reader)

### Description

The TextPushbackReader class allows you to wrap aTextReader to provide an unlimited pushback that allows tokenizers to look ahead through a stream to perform lexical analysis.

### Constructors
Creates an instance of this class.

> `public` TextPushbackReader(TextReader reader)

- **content**: TextReader - text reader to be wrapped to add pushback functionality.


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `public static` **Eof**: char = '\xffff'

</span>

### Instance methods

#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> `public` char Peek()

- **returns**: char - character from the top of the stream or **-1** if the stream is empty.


#### Pushback
Puts the specified character on the top of the stream.

> `public` void Pushback(char value)

- **value**: char - character to be pushed back.


#### PushbackString
Pushes the specified string to the top of the stream.

> `public` void PushbackString(string value)

- **value**: string - string to be pushed back.


#### Read
Reads a character from the top of the stream.

> `public` char Read()

- **value**: char - read character or **-1** if the stream was processed to the end.
