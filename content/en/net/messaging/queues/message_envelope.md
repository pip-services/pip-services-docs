---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Allows adding additional information to messages. 
---

### Description

The MessageEnvelope class allows you to add additional information to messages.

Important points

- A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
- A MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

### Constructors
Creates a new MessageEnvelope.

> `public` MessageEnvelope()

Creates a new [MessageEnvelope](), which adds a correlation id, message id, and a type to the data being sent/received.

> `public` MessageEnvelope(string correlationId, string messageType, byte[] message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: byte[] - the data being sent/received.

Creates a new MessageEnvelop, which adds a correlation id, message id, and a
type to the data being sent/received.

> `public` MessageEnvelope(string correlationId, string messageType, string message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: string - the data being sent/received.


Creates a new MessageEnvelop, which adds a correlation id, message id, and a
type to the data being sent/received.

> `public` MessageEnvelope(string correlationId, string messageType, object message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: object - the data being sent/received.

### Properties


#### CorrelationId
The unique business transaction id that is used to trace calls across components.

> `public` string CorrelationId [ get, set ]

#### Message
The stored message.

> `public` byte[] Message [ get, set ]

#### MessageId
The message's auto-generated ID.

> `public` string MessageId [ get, set ]

#### MessageType
String value that defines the stored message's type.

> `public` string MessageType [ get, set ]

#### SentTime
The time at which the message was sent.

> `public` DateTime SentTime [ get, set ]

#### MessageBase64
Used for serialization [ get, set ]

> `public` string MessageBase64

</span>

### Instance methods

#### GetMessageAs
Returns any the value that was stored in this message as a JSON string.  
See also [SetMessageAsObject](#setmessageasobject)

> `public` T GetMessageAs\<T\>()

- **returns**: T - value that was stored in this message as a JSON string.

#### GetMessageAsString
Returns the information stored in this message as a UTF-8 encoded string.

> `public` string GetMessageAsString()

- **returns**: string - information stored in this message as a UTF-8 encoded string.

#### SetMessageAsObject
Stores the given value as an object.
See also [GetMessageAs](#getmessageas)

> `public` void SetMessageAsObject(object message)

- **message**: object -  value to convert to JSON and store in this message.

#### SetMessageAsString
Stores the given string.

> `public` void SetMessageAsString(string message)

- **message**: string - string to set. It will be converted to a buffer using UTF-8 encoding.


#### ToString
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<correlationId>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> `public override` string ToString()

- **returns**: string - generated string.

