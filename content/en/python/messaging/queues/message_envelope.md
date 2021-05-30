---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
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

> MessageEnvelope(correlation_id: Optional[str], message_type: Optional[str], message: Optional[Any])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **message_type**: Optional[str] - a string value that defines the message's type.
- **message**: Optional[Any] - the data being sent/received.

### Fields

<span class="hide-title-link">

#### correlation_id
The unique business transaction id that is used to trace calls across components.

> **correlation_id**: str

#### message
The stored message.

> **message**: bytes

#### message_id
The message's auto-generated ID.

> **message_id**: str

#### message_type
String value that defines the stored message's type.

> **message_type**: str

#### sent_time
The time at which the message was sent.

> **sent_time**: datetime.datetime

</span>

### Instance methods

#### get_message_as
Returns any the value that was stored in this message as a JSON string.  
See also [set_message_as_object](#set_message_as_object)

> get_message_as(): Any 

- **returns**: Any - value that was stored in this message as a JSON string.

#### get_message_as_string
Returns the information stored in this message as a UTF-8 encoded string.

> get_message_as_string(): Optional[str]

- **returns**: Optional[str] - information stored in this message as a UTF-8 encoded string.

#### get_reference
Returns the lock token that this [MessageEnvelope]() references.

> get_reference(): Any

- **returns**: Any - lock token that this [MessageEnvelope]() references.

#### set_message_as_object
Stores the given value as an object.
See also [get_message_as](#get_message_as)

> set_message_as_object(value: Any)

- **value**: Any -  value to convert to JSON and store in this message.

#### set_message_as_string
Stores the given string.

> set_message_as_string(value: str)

- **value**: str - string to set. It will be converted to a buffer using UTF-8 encoding.

#### set_reference
Sets a lock token reference for this [MessageEnvelope]().

> set_reference(value: Any)

- **value**: Any - lock token to reference the message envelope.

#### to_json
Converts this [MessageEnvelope]() to a JSON string. The message payload is passed as base64 string

> to_json(): dict

- **returns**: dict - A JSON encoded representation of the object.

#### to_string
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<correlation_id>,<message_type>,<message.toString>]"*.

If any of the values are *None*, they will be replaced with \-\-\-.

> to_string(): str

- **returns**: str - generated string.

#### from_json
Converts a JSON string into a [MessageEnvelope]() The message payload is passed as a base64 string

> `static` from_json(value: str): [MessageEnvelope]()

- **value**: str - JSON encoded string
- **returns**: [MessageEnvelope]() - decoded Message Envelope.

