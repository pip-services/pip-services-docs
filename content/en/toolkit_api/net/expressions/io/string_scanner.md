---
type: docs
title: "StringScanner"
linkTitle: "StringScanner"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Scan characters in a string that allows tokenizers
    to look ahead through a stream to perform lexical analysis.
---

**Inherits**: [IScanner](../iscanner)

### Description

The StringScanner class is used to scan characters in a string that allows tokenizers to look ahead through a stream to perform lexical analysis.

### Constructors
Creates an instance of this class.

> `public` StringScanner(string content)

- **content**: string - text content to be read.


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `public static` **Eof**: char = '\xffff'

</span>


### Instance methods

#### Column
Gets the column in the current line.

> `public` int Column()

- **returns**: int - column in the current line in the stream.

#### Line
Gets the current line number.

> `public` int Line()

- **returns**: int - current line number in the stream.


#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> `public` char Peek()

- **returns**: char - character from the top of the stream or *-1* if the stream is empty.


#### PeekColumn
Gets the next character column number.

> `public` int PeekColumn()

- **returns**: int - next character column number in the stream.


#### PeekLine
Gets the next character line number.

> `public` int PeekLine()

- **returns**: int - next character line number in the stream.

#### Read
Reads a character from the top of the stream.

> `public` char Read()

- **returns**: char - read character or *-1* if the stream is processed to the end.

#### Reset
Resets the scanner to the initial position.

> `public` void Reset()


#### Unread
Puts one character back into the stream.

> `public` void Unread()

#### UnreadMany
Pushes the specified number of characters to the top of the stream.
> `public` void UnreadMany(int count)

- **count**: int - number of characcted to be pushed back.
