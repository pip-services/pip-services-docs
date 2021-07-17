---
type: docs
title: "BufferStream"
linkTitle: "BufferStream"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    This class is used for buffered read/write to the other stream.
---

**Inherits**: Stream

### Description

This class is used at least in FieldComm for reading/writing messages to the NetworkStream.
This class is a port for .Net Compact Framework from System.IO.BufferedStream (Full .Net Framework).

### Constructors
TODO: add description

> `public` BufferStream(Stream stream)

- **stream**: Stream - TODO: add description

> `public` BufferStream(Stream stream, int bufferSize)

- **stream**: Stream - TODO: add description
- **bufferSize**: int - TODO: add description


### Properties


#### CanRead
TODO: add description
> `public override` bool CanRead { get; }

#### CanSeek
TODO: add description
> `public override` bool CanSeek { get; }

#### CanWrite
TODO: add description
> `public override` bool CanWrite { get; }

#### Length
TODO: add description
> `public override` long Length { get; }

#### Length
TODO: add description
> `public override` long Position { get; set; }




### Instance methods

#### Flush
TODO: add description

> `public override` void Flush()


#### Read
TODO: add description

> `public override` int Read(byte[] array, int offset, int count)

- **array**: byte[] - TODO: add description
- **offset**: int - TODO: add description
- **count**: int - TODO: add description
- **returns**: int - TODO: add description


#### ReadByte
TODO: add description

> `public override` int ReadByte()

- **returns**: int - TODO: add description


#### Seek
TODO: add description

> `public override` long Seek(long offset, SeekOrigin origin)

- **offset**: long - TODO: add description
- **origin**: SeekOrigin - TODO: add description
- **returns**: long - TODO: add description


#### SetLength
TODO: add description

> `public override` void SetLength(long value)

- **value**: long - TODO: add description


#### SetLength
TODO: add description

> `public override` void Write(byte[] array, int offset, int count)

- **array**: byte[] - TODO: add description
- **offset**: int - TODO: add description
- **count**: int - TODO: add description


#### SetLength
TODO: add description

> `public override` void WriteByte(byte value)

- **value**: byte - TODO: add description
