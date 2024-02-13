---
type: docs
title: "StringScanner"
linkTitle: "StringScanner"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Scan characters in a string that allows tokenizers
    to look ahead through a stream to perform lexical analysis.
---

**Implements**: [IScanner](../iscanner)

### Description

The StringScanner class is used to scan characters in a string that allows tokenizers to look ahead through a stream to perform lexical analysis.

### Constructors
Creates an instance of this class.

> StringScanner(String content)

- **content**: String - text content to be read.


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `static` const int Eof = -1

</span>

### Instance methods

#### column
Gets the column in the current line.

`@override`
> int column()

- **returns**: number - column in the current line in the stream.

#### line
Gets the current line number.

`@override`
> int line()

- **returns**: int - current line number in the stream.


#### peek
Returns the character from the top of the stream without moving the stream pointer.
`@override`
> int peek()

- **returns**: int - character from the top of the stream or *-1* if the stream is empty.


#### peekColumn
Gets the next character column number.

`@override`
> int peekColumn()

- **returns**: int - next character column number in the stream.


#### peekLine
Gets the next character line number.

`@override`
> int peekLine()

- **returns**: int - next character line number in the stream.

#### read
Reads a character from the top of the stream.

`@override`
> int read()

- **returns**: int - read character or *-1* if the stream is processed to the end.

#### reset
Resets the scanner to the initial position.

`@override`
> void reset() 


#### unread
Puts one character back into the stream.

`@override`
> void unread() 

#### unreadMany
Pushes the specified number of characters to the top of the stream.

`@override`
> void unreadMany(int count)

- **count**: int - number of characteers to be pushed back.
