---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-messaging-dart"
description: >
    Allows adding additional information to messages. 
---

### Description

The MessageEnvelope class allows you to add additional information to messages.

**Important points**

- A trace id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
- A MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

### Constructors

Creates a new [MessageEnvelope](), which adds a trace id, message id, and a type to the data being sent/received.

> MessageEnvelope(IContext? context, String? messageType, message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: String? - string value that defines the message's type.
- **message**: dynamic - data being sent/received.

### Fields

<span class="hide-title-link">

#### traceId
Unique business transaction id that is used to trace calls across components.

> **traceId**: String?

#### message
Stored message.

> **message**: String?

#### message_id
Message's auto-generated ID.

> **message_id**: String

#### message_type
String value that defines the stored message's type.

> **message_type**: String?

#### sent_time
The time at which the message was sent.

> **sent_time**: DateTime?

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


#### setMessageAsJson
Stores the given value as a JSON string.

> void setMessageAsJson(dynamic value)

- **value**: dynamic - the value to convert to JSON and store in this message.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> void setReference(value)

- **value**: dynamic - lock token to reference the message envelope.

#### toString
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<traceId>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

`@override`
> String toString()

- **returns**: String - generated string.


# toJSON
Converts this MessageEnvelop to a JSON string.
The message payload is passed as string

> Map\<String, dynamic\> toJSON()

- **returns**: Map\<String, dynamic\> -  A JSON encoded representation is this object.


### Static methods

#### fromJSON
Converts a JSON string into a MessageEnvelop
The message payload is passed as string

> `static` [MessageEnvelope?]() fromJSON(String? value)

- **value**: String? - a JSON encoded string
- **returns**: [MessageEnvelope?]() - a decoded Message Envelop.
