---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines a scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

The IScanner interface defines a scanner that can read and unread characters and count lines.


### Instance methods

#### Column
Gets the column in the current line.

> int Column()

- **returns**: int - column in the current line in the stream.

#### Line
Gets the current line number

> int Line()

- **returns**: int - current line number in the stream


#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> char Peek()

- **returns**: char - character from the top of the stream or *-1* if the stream is empty.


#### PeekColumn
Gets the next character column number.

> int PeekColumn()

- **returns**: int - next character column number in the stream.


#### PeekLine
Gets the next character line number.

> int PeekLine()

- **returns**: int - next character line number in the stream.

#### Read
Reads a character from the top of the stream.

> char Read()

- **returns**: char - read character or *-1* if the stream is processed to the end.

#### Reset
Resets a scanner to the initial position.

> void Reset()


#### Unread
Puts a character back into the stream.

> void Unread()

#### UnreadMany
Pushes the specified number of characters to the top of the stream.
> void UnreadMany(int count)

- **count**: int - number of characcted to be pushed back.
