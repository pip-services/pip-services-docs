---
type: docs
title: "StringPushbackReader"
linkTitle: "StringPushbackReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Wraps string to provide unlimited pushback that allows tokenizers
    to look ahead through stream to perform lexical analysis.
---

**Inherits**: [IPushbackReader](../ipushback_reader)

### Description

TODO: add description

### Constructors
Creates an instance of this class.

> `public` StringPushbackReader(string content)

- **content**: string - A text content to be read.


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

- **returns**: char - A character from the top of the stream or **-1** if stream is empty.


#### Pushback
Puts the specified character to the top of the stream.

> `public` void Pushback(char value)

- **value**: char - A character to be pushed back.


#### PushbackString
Pushes the specified string to the top of the stream.

> `public` void PushbackString(string value)

- **value**: string - A string to be pushed back.


#### Read
Reads character from the top of the stream.

> `public` char Read()

- **value**: char - A read character or **-1** if stream processed to the end.