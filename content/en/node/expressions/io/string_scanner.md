---
type: docs
title: "StringScanner"
linkTitle: "StringScanner"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Scan characters in a string that allows tokenizers
    to look ahead through stream to perform lexical analysis.
---

**Implements**: [IScanner](../iscanner)

### Description

TODO: add description

### Constructors
Creates an instance of this class.

> `public` constructor(content: string)

- **content**: string - A text content to be read.


### Properties

#### Eof
TODO: add description
> `public static` Eof: number = -1

### Instance methods

#### column
Gets the column in the current line

> `public` column(): number

- **returns**: number - The column in the current line in the stream.

#### line
Gets the current line number

> `public` line(): number

- **returns**: number - The current line number in the stream


#### peek
Returns the character from the top of the stream without moving the stream pointer.

> `public` peek(): number

- **returns**: number - A character from the top of the stream or *-1* if stream is empty.


#### peekColumn
Gets the next character column number

> `public` peekColumn(): number

- **returns**: number - The next character column number in the stream.


#### peekLine
Gets the next character line number

> `public` peekLine(): number

- **returns**: number - The next character line number in the stream.

#### read
Reads character from the top of the stream.

> `public` read(): number

- **returns**: number - A read character or *-1* if stream processed to the end.

#### reset
Resets scanner to the initial position

> `public` reset(): void 


#### unread
Puts the one character back into the stream stream.

> `public` unread(): void 

#### unreadMany
Pushes the specified number of characters to the top of the stream.
> `public` unreadMany(count: number): void

- **count**: number - A number of characcted to be pushed back.
