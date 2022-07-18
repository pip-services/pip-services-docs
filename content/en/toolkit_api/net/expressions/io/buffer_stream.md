---
type: docs
title: "BufferStream"
linkTitle: "BufferStream"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    This class is used for buffered read/write to other stream.
---

**Inherits**: Stream

### Description
This class is used for buffered read/write to other stream.

**Important points**

- This class is used at least in FieldComm for reading/writing messages to the NetworkStream.
- This class is a port for .Net Compact Framework from System.IO.BufferedStream (Full .Net Framework).

### Constructors
Creates a new instance of this class.

> `public` BufferStream(Stream stream)

- **stream**: Stream - stream

> `public` BufferStream(Stream stream, int bufferSize)

- **stream**: Stream - stream
- **bufferSize**: int - buffer size


### Properties


#### CanRead
Can read option.
> `public override` bool CanRead { get; }

#### CanSeek
Can seek option.
> `public override` bool CanSeek { get; }

#### CanWrite
Can write option.
> `public override` bool CanWrite { get; }

#### Length
Length
> `public override` long Length { get; }

#### Position
Position
> `public override` long Position { get; set; }




### Instance methods

#### Flush
Flushes the stream.

> `public override` void Flush()


#### Read
Reads from a stream.

> `public override` int Read(byte[] array, int offset, int count)

- **array**: byte[] - array
- **offset**: int - offset value
- **count**: int - count value
- **returns**: int - position


#### ReadByte
Read from a stream

> `public override` int ReadByte()

- **returns**: int - position


#### Seek
Seeks within a stream.

> `public override` long Seek(long offset, SeekOrigin origin)

- **offset**: long - offset value
- **origin**: SeekOrigin - origin
- **returns**: long - position


#### SetLength
Sets the length.

> `public override` void SetLength(long value)

- **value**: long - length value


#### Write
Writes to a stream.

> `public override` void Write(byte[] array, int offset, int count)

- **array**: byte[] - array
- **offset**: int - offset value
- **count**: int - count


#### WriteByte
Write bytes to a stream.

> `public override` void WriteByte(byte value)

- **value**: byte - value
