---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

The IScanner interface defines a scanner that can read and unread characters and count lines.


### Instance methods

#### column
Gets the column in the current line.

> column(): number

- **returns**: number - column in the current line in the stream.

#### line
Gets the current line number

> line(): number

- **returns**: number - current line number in the stream


#### peek
Returns the character from the top of the stream without moving the stream pointer.

> peek(): number

- **returns**: number - character from the top of the stream or *-1* if the stream is empty.


#### peekColumn
Gets the next character column number.

> peekColumn(): number

- **returns**: number - next character column number in the stream.


#### peekLine
Gets the next character line number.

> peekLine(): number

- **returns**: number - next character line number in the stream.

#### read
Reads a character from the top of the stream.

> read(): number

- **returns**: number - read character or *-1* if the stream is processed to the end.

#### reset
Resets a scanner to the initial position.

> reset(): void 


#### unread
Puts a character back into the stream.

> unread(): void 

#### unreadMany
Pushes the specified number of characters to the top of the stream.
> unreadMany(count: number): void

- **count**: number - number of characcted to be pushed back.
