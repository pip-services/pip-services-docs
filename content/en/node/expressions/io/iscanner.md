---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

TODO: add description


### Instance methods

#### column
Gets the column in the current line

> column(): number

- **returns**: number - The column in the current line in the stream.

#### line
Gets the current line number

> line(): number

- **returns**: number - The current line number in the stream


#### peek
Returns the character from the top of the stream without moving the stream pointer.

> peek(): number

- **returns**: number - A character from the top of the stream or *-1* if stream is empty.


#### peekColumn
Gets the next character column number

> peekColumn(): number

- **returns**: number - The next character column number in the stream.


#### peekLine
Gets the next character line number

> peekLine(): number

- **returns**: number - The next character line number in the stream.

#### read
Reads character from the top of the stream.

> read(): number

- **returns**: number - A read character or *-1* if stream processed to the end.

#### reset
Resets scanner to the initial position

> reset(): void 


#### unread
Puts the one character back into the stream stream.

> unread(): void 

#### unreadMany
Pushes the specified number of characters to the top of the stream.
> unreadMany(count: number): void

- **count**: number - A number of characcted to be pushed back.
