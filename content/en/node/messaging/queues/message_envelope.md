---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Allows adding additional information to messages. A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.

    Side note: a MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.
---

### Constructors
Creates a new [MessageEnvelope](), which adds a correlation id, message id, and a type to the data being sent/received.

> `public` constructor(correlationId: string, messageType: string, message: any): [MessageEnvelope]()

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: any - the data being sent/received.

### Fields

<span class="hide-title-link">

#### correlation_id
The unique business transaction id that is used to trace calls across components.

> `public` **correlation_id**: string

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

### Methods

#### getMessageAs
Returns any the value that was stored in this message as a JSON string.  
See also [setMessageAsObject](#setmessageasobject)

> `public` getMessageAs\<T\>(): T 

- **returns**: T - the value that was stored in this message as a JSON string.

#### getMessageAsString
Returns string the information stored in this message as a UTF-8 encoded string.

> `public` getMessageAsString(): string

- **returns**: string - the information stored in this message as a UTF-8 encoded string.

#### getReference
Returns any the lock token that this [MessageEnvelope]() references.

> `public` getReference(): any

- **returns**: any - the lock token that this [MessageEnvelope]() references.

#### setMessageAsObject
Stores the given value as a object.
See also [getMessageAs](#getmessageas)

> `public` setMessageAsObject(value: any): void

- **value**: any -  the value to convert to JSON and store in this message.

#### setMessageAsString
Stores the given string.

> `public` setMessageAsString(value: string): void

- **value**: string - the string to set. Will be converted to a buffer, using UTF-8 encoding.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> `public` setReference(value: any): void

- **value**: any - the lock token to reference.

#### toJSON
Converts this [MessageEnvelope]() to a JSON string. The message payload is passed as base64 string

> `public` toJSON(): any

- **returns**: any - A JSON encoded representation is this object.

#### toString
Convert's this [MessageEnvelope]() to a string, using the following format:  
*"[<correlation_id>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> `public` toString(): string

- **returns**: string - the generated string.

#### fromJSON
Converts a JSON string into a [MessageEnvelope]() The message payload is passed as base64 string

> `public static` fromJSON(value: string): [MessageEnvelope]()

- **value**: string - a JSON encoded string
- **returns**: [MessageEnvelope]() - a decoded Message Envelop.

