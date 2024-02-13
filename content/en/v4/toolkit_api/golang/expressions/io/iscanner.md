---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines a scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

The IScanner interface defines a scanner that can read and unread characters and count lines.


### Methods

#### Сolumn
Gets the column in the current line.

> Column() int

- **returns**: int - column in the current line in the stream.

#### Line
Gets the current line number

> Line() int

- **returns**: int - current line number in the stream


#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> Peek() rune

- **returns**: rune - character from the top of the stream or *-1* if the stream is empty.


#### PeekColumn
Gets the next character column number.

> PeekColumn() int

- **returns**: int - next character column number in the stream.


#### PeekLine
Gets the next character line number.

> PeekLine() int

- **returns**: int - next character line number in the stream.

#### Read
Reads a character from the top of the stream.

> Read() rune

- **returns**: rune - read character or *-1* if the stream is processed to the end.

#### Reset
Resets a scanner to the initial position.

> Reset() 


#### Unread
Puts a character back into the stream.

> Unread()

#### UnreadMany
Pushes the specified number of characters to the top of the stream.
> UnreadMany(count int)

- **count**: int - number of characters to be pushed back.

