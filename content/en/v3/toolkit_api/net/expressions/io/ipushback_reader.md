---
type: docs
title: "IPushbackReader"
linkTitle: "IPushbackReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines reader with the ability to push back characters.
---

### Description
The IPushbackReader class allows you to create a reader that has the ability to push back characters.

**Important points**
- This reader is used by tokenizers to process input streams.


### Instance methods

#### Peek
Returns the character from the top of the stream without moving the stream pointer.

> char Peek()

- **returns**: char - character from the top of the stream or **-1** if stream is empty.


#### Pushback
Puts the specified character on the top of the stream.

> void Pushback(char value)

- **value**: char - character to be pushed back.


#### PushbackString
Pushes the specified string to the top of the stream.

> void PushbackString(string value)

- **value**: string - string to be pushed back.


#### Read
Reads a character from the top of the stream.

> char Read()

- **value**: char - read character or **-1** if stream processed to the end.
