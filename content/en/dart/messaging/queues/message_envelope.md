---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Allows adding additional information to messages. 
---

### Description

The MessageEnvelope class allows you to add additional information to messages.

Important points

- A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
- A MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

### Constructors

Creates a new [MessageEnvelope](), which adds a correlation id, message id, and a type to the data being sent/received.

> MessageEnvelope(String correlationId, String messageType, message)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **messageType**: String - a string value that defines the message's type.
- **message**: dynamic - the data being sent/received.

### Fields

<span class="hide-title-link">

#### correlationId
The unique business transaction id that is used to trace calls across components.

> **correlationId**: String

#### message
The stored message.

> **message**: String

#### message_id
The message's auto-generated ID.

> **message_id**: String

#### message_type
String value that defines the stored message's type.

> **message_type**: String

#### sent_time
The time at which the message was sent.

> **sent_time**: DateTime

</span>

### Instance methods

#### getMessageAsString
Returns the information stored in this message as a UTF-8 encoded string.

> String getMessageAsString()

- **returns**: String - information stored in this message as a UTF-8 encoded string.

#### getReference
Returns the lock token that this [MessageEnvelope]() references.

> dynamic getReference()

- **returns**: dynamic - lock token that this [MessageEnvelope]() references.

#### setMessageAsString
Stores the given string.

> void setMessageAsString(String value)

- **value**: String - string to set. It will be converted to a buffer using UTF-8 encoding.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> void setReference(value)

- **value**: dynamic - lock token to reference the message envelope.

#### toString
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<correlationId>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

`@override`
> String toString()

- **returns**: String - generated string.


