---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    Allows adding additional information to messages. 
---

### Description

The MessageEnvelope class allows you to add additional information to messages.

Important points

- A context object added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
- A MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

### Constructors

Creates a new [MessageEnvelope](), which adds a trace id, message id, and a type to the data being sent/received.

> `public` MessageEnvelope([IContext](../../../components/context/icontext) context, String messageType, String message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: String - a string value that defines the message's type.
- **message**: String - the data being sent/received.

### Fields

<span class="hide-title-link">

#### traceId
The unique business transaction id that is used to trace calls across components.

> `public` String **_traceId**;

#### message
The stored message.

> `public` Object **_message**;

#### message_id
The message's auto-generated ID.

> `public` String **_messageId**;

#### message_type
String value that defines the stored message's type.

> `public` String **_messageType**;

</span>

### Instance methods

#### getMessageAs
Returns any the value that was stored in this message as a JSON string.  
See also [setMessageAsObject](#setmessageasobject)

> `public` <T> T getMessageAsJson(Class<T> type) throws IOException 

- **returns**: <T> T - value that was stored in this message as a JSON string.

#### getMessageAsString
Returns the information stored in this message as a UTF-8 encoded string.

> `public` String getMessageAsString()

- **returns**: String - information stored in this message as a UTF-8 encoded string.

#### getReference
Returns the lock token that this [MessageEnvelope]() references.

> `public` Object getReference()

- **returns**: Object - lock token that this [MessageEnvelope]() references.

#### setMessageAsObject
Stores the given value as an object.
See also [getMessageAs](#getmessageas)

> `public` void setMessageAsObject(Object value) throws JsonProcessingException

- **value**: Object -  value to convert to JSON and store in this message.

#### setMessageAsString
Stores the given string.

> void setMessageAsObject(Object value) throws JsonProcessingException

- **value**: Object - string to set. It will be converted to a buffer using UTF-8 encoding.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> `public` void setReference(Object value)

- **value**: Object - lock token to reference the message envelope.

#### toJSON
Converts this [MessageEnvelope]() to a JSON string. The message payload is passed as base64 string

> `public` Map<?, ?> toJSON() 

- **returns**:  Map<?, ?> - JSON encoded representation of the object.

#### toString
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<context>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> `public` String toString()

- **returns**: String - generated string.

### Static methods

#### fromJSON
Converts a JSON string into a [MessageEnvelope]() The message payload is passed as a base64 string

> `static` [MessageEnvelope] fromJSON(String value) throws IOException

- **value**: String - JSON encoded string
- **returns**: [MessageEnvelope]() - decoded Message Envelope.

