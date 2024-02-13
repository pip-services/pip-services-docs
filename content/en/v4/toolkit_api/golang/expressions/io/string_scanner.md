---
type: docs
title: "StringScanner"
linkTitle: "StringScanner"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Scan characters in a string that allows tokenizers
    to look ahead through a stream to perform lexical analysis.
---

### Description

The StringScanner class is used to scan characters in a string that allows tokenizers to look ahead through a stream to perform lexical analysis.

### Constructors

#### NewStringScanner

Creates an instance of this class.

> NewStringScanner(content string) [*StringScanner]()

- **content**: string - text content to be read.

### Methods

#### Column
Gets the column in the current line.

> (c [*StringScanner]()) Column() int

- **returns**: numbinter - column in the current line in the stream.

#### Line
Gets the current line number.

> (c [*StringScanner]()) Line() int

- **returns**: int - current line number in the stream.


#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> (c [*StringScanner]()) Peek() rune

- **returns**: rune - character from the top of the stream or *-1* if the stream is empty.


#### PeekColumn
Gets the next character column number.

> (c [*StringScanner]()) PeekColumn() int

- **returns**: int - next character column number in the stream.


#### PeekLine
Gets the next character line number.

> (c [*StringScanner]()) PeekLine() int

- **returns**: int - next character line number in the stream.

#### Read
Reads a character from the top of the stream.

> (c [*StringScanner]()) Read() rune

- **returns**: rune - read character or *-1* if the stream is processed to the end.

#### Reset
Resets the scanner to the initial position.

> (c [*StringScanner]()) Reset()


#### Unread
Puts one character back into the stream.

> (c [*StringScanner]()) Unread()

#### UnreadMany
Pushes the specified number of characters to the top of the stream.
> (c [*StringScanner]()) UnreadMany(count int)

- **count**: int - number of characters to be pushed back.

