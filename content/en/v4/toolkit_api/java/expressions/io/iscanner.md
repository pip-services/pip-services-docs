---
type: docs
title: "IScanner"
linkTitle: "IScanner"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a scanner that can read and unread characters and count lines.
    This scanner is used by tokenizers to process input streams.
---

### Description

The IScanner interface defines a scanner that can read and unread characters and count lines.


### Instance methods

#### column
Gets the column in the current line.

> int column()

- **returns**: int - column in the current line in the stream.

#### line
Gets the current line number

> int line()

- **returns**: int - current line number in the stream


#### peek
Returns the character from the top of the stream without moving the stream pointer.

> int peek()

- **returns**: int - character from the top of the stream or *-1* if the stream is empty.


#### peekColumn
Gets the next character column number.

> int peekColumn()

- **returns**: number - next character column number in the stream.


#### peekLine
Gets the next character line number.

> int peekLine()

- **returns**: int - next character line number in the stream.

#### read
Reads a character from the top of the stream.

> int read()

- **returns**: int - read character or *-1* if the stream is processed to the end.

#### reset
Resets a scanner to the initial position.

> void reset() 


#### unread
Puts a character back into the stream.

> void unread() 

#### unreadMany
Pushes the specified number of characters to the top of the stream.
> void unreadMany(int count)

- **count**: int - number of characcted to be pushed back.
