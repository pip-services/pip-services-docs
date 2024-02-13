---
type: docs
title: "StringScanner"
linkTitle: "StringScanner"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Scan characters in a string that allows tokenizers
    to look ahead through a stream to perform lexical analysis.
---

**Implements**: [IScanner](../iscanner)

### Description

The StringScanner class is used to scan characters in a string that allows tokenizers to look ahead through a stream to perform lexical analysis.

### Constructors
Creates an instance of this class.

> StringScanner(content: str)

- **content**: str - text content to be read.


### Fields

<span class="hide-title-link">

#### Eof
EOF
> **Eof**: int = -1

</span>

### Instance methods

#### column
Gets the column in the current line.

> column(): int

- **returns**: int - column in the current line in the stream.

#### line
Gets the current line number.

> line(): int

- **returns**: int - current line number in the stream.


#### peek
Returns the character from the top of the stream without moving the stream pointer.

> peek(): int

- **returns**: int - character from the top of the stream or *-1* if the stream is empty.


#### peek_column
Gets the next character column number.

> peek_column(): int

- **returns**: int - next character column number in the stream.


#### peek_line
Gets the next character line number.

> peek_line(): int

- **returns**: int - next character line number in the stream.

#### read
Reads a character from the top of the stream.

> read(): int

- **returns**: int - read character or *-1* if the stream is processed to the end.

#### reset
Resets the scanner to the initial position.

> reset(): void 


#### unread
Puts one character back into the stream.

> unread(): void 

#### unread_many
Pushes the specified number of characters to the top of the stream.
> unread_many(count: int): void

- **count**: int - number of characcted to be pushed back.
