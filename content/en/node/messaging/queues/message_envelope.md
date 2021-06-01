---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
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

> `public` constructor(correlationId: string, messageType: string, message: any)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: any - the data being sent/received.

### Fields

<span class="hide-title-link">

#### correlationId
The unique business transaction id that is used to trace calls across components.

> `public` **correlationId**: string

#### message
The stored message.

> `public` **message**: Buffer

#### message_id
The message's auto-generated ID.

> `public` **message_id**: string

#### message_type
String value that defines the stored message's type.

> `public` **message_type**: string

#### sent_time
The time at which the message was sent.

> `public` **sent_time**: Date

</span>

### Instance methods

#### getMessageAs
Returns any the value that was stored in this message as a JSON string.  
See also [setMessageAsObject](#setmessageasobject)

> `public` getMessageAs<T>(): T 

- **returns**: T - value that was stored in this message as a JSON string.

#### getMessageAsString
Returns the information stored in this message as a UTF-8 encoded string.

> `public` getMessageAsString(): string

- **returns**: string - information stored in this message as a UTF-8 encoded string.

#### getReference
Returns the lock token that this [MessageEnvelope]() references.

> `public` getReference(): any

- **returns**: any - lock token that this [MessageEnvelope]() references.

#### setMessageAsObject
Stores the given value as an object.
See also [getMessageAs](#getmessageas)

> `public` setMessageAsObject(value: any): void

- **value**: any -  value to convert to JSON and store in this message.

#### setMessageAsString
Stores the given string.

> setMessageAsString(value: string): void

- **value**: string - string to set. It will be converted to a buffer using UTF-8 encoding.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> `public` setReference(value: any): void

- **value**: any - lock token to reference the message envelope.

#### toJSON
Converts this [MessageEnvelope]() to a JSON string. The message payload is passed as base64 string

> `public` toJSON(): any

- **returns**: any - JSON encoded representation of the object.

#### toString
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<correlationId>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> `public` toString(): string

- **returns**: string - generated string.

### Static methods

#### fromJSON
Converts a JSON string into a [MessageEnvelope]() The message payload is passed as a base64 string

> `static` fromJSON(value: string): [MessageEnvelope]()

- **value**: string - JSON encoded string
- **returns**: [MessageEnvelope]() - decoded Message Envelope.

