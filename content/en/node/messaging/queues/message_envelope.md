---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Allows adding additional information to messages. A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.

    Side note: a MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.
---

### Constructors
Creates a new [MessageEnvelope](), which adds a correlation id, message id, and a type to the data being sent/received.

> constructor(correlationId: string, messageType: string, message: any): [MessageEnvelope]()

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: any - the data being sent/received.

- **returns**: [MessageEnvelope]() - TODO: add description

### Properties

<span class="hide-title-link">

#### correlation_id
The unique business transaction id that is used to trace calls across components.

> **correlation_id**: string

#### message
The stored message.

> **message**: Buffer

#### message_id
The message's auto-generated ID.

> **message_id**: string

#### message_type
String value that defines the stored message's type.

> **message_type**: string

#### sent_time
The time at which the message was sent.

> **sent_time**: Date

</span>

### Methods

#### getMessageAsJson
Returns any the value that was stored in this message as a JSON string.
See also [setMessageAsJson](#setMessageAsJson)

> getMessageAsJson(): any

- **returns**: any - the value that was stored in this message as a JSON string.

#### getMessageAsString
Returns string the information stored in this message as a UTF-8 encoded string.

> getMessageAsString(): string

- **returns**: string - the information stored in this message as a UTF-8 encoded string.

#### getReference
Returns any the lock token that this [MessageEnvelope]() references.

> getReference(): any

- **returns**: any - the lock token that this [MessageEnvelope]() references.

#### setMessageAsJson
Stores the given value as a JSON string.
See also [getMessageAsJson](#getMessageAsJson)

> setMessageAsJson(value: any): void

- **value**: any -  the value to convert to JSON and store in this message.

#### setMessageAsString
Stores the given string.

> setMessageAsString(value: string): void

- **value**: string - the string to set. Will be converted to a buffer, using UTF-8 encoding.

#### setReference
Sets a lock token reference for this [MessageEnvelope]().

> setReference(value: any): void

- **value**: any - the lock token to reference.

#### toJSON
Converts this [MessageEnvelope]() to a JSON string. The message payload is passed as base64 string

> toJSON(): any

- **returns**: any - A JSON encoded representation is this object.

#### toString
Convert's this [MessageEnvelope]() to a string, using the following format:  
*"[<correlation_id>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> toString(): string

- **returns**: string - the generated string.

#### fromJSON
Converts a JSON string into a [MessageEnvelope]() The message payload is passed as base64 string

> `static` fromJSON(value: string): [MessageEnvelope]()

- **value**: string - a JSON encoded string
- **returns**: [MessageEnvelope]() - a decoded Message Envelop.

