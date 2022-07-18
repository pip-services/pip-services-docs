---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

The IScanner interface defines a scanner that can read and unread characters and count lines.


### Instance methods

#### column
Gets the column in the current line.

> column(): int

- **returns**: int - column in the current line in the stream.

#### line
Gets the current line number

> line(): int

- **returns**: int - current line number in the stream


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
Resets a scanner to the initial position.

> reset() 


#### unread
Puts a character back into the stream.

> unread() 

#### unread_many
Pushes the specified number of characters to the top of the stream.
> unread_many(count: int)

- **count**: int - number of characcted to be pushed back.
