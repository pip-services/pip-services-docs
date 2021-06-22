---
type: docs
title: "MessageEnvelope"
linkTitle: "MessageEnvelope"
gitUrl: "https://github.com/pip-services3-go/pip-services3-messaging-go"
description: >
    Allows adding additional information to messages. 
---

### Description

The MessageEnvelope class allows you to add additional information to messages.

Important points

- A correlation id, message id, and a message type are added to the data being sent/received. Additionally, a MessageEnvelope can reference a lock token.
- A MessageEnvelope's message is stored as a buffer, so strings are converted using utf8 conversions.

### Constructors

#### NewMessageEnvelope
Creates a new [MessageEnvelope](), which adds a correlation id, message id, and a type to the data being sent/received.

> NewMessageEnvelope(correlationId string, messageType string, message []byte) [*MessageEnvelope]()

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a string value that defines the message's type.
- **message**: []byte - the data being sent/received.

#### NewEmptyMessageEnvelope
NewMessageEnvelope method are creates an empty MessageEnvelope

> NewEmptyMessageEnvelope() [*MessageEnvelope]()

### Fields

<span class="hide-title-link">

#### CorrelationId
The unique business transaction id that is used to trace calls across components.

> `public` **CorrelationId**: string

#### Message
The stored message.

> `public` **Message**: []byte

#### MessageId
The message's auto-generated ID.

> `public` **MessageId**: string

#### MessageType
String value that defines the stored message's type.

> `public` **MessageType**: string

#### SentTime
The time at which the message was sent.

> `public` **SentTime**: time.Time

</span>

### Methods

#### MarshalJSON
TODO: add description

> (c [*MessageEnvelope]()) MarshalJSON() ([]byte, error)

- **returns**: ([]byte, error) - TODO: add description

#### UnmarshalJSON
TODO: add description

> (c [*MessageEnvelope]()) UnmarshalJSON(data []byte) error

- **data**: []byte - TODO: add description

#### GetMessageAs
Returns any the value that was stored in this message as a JSON string.  
See also [SetMessageAsObject](#setmessageasobject)

> (c [*MessageEnvelope]()) GetMessageAs(value interface{}) interface{}

- **value**: interface{} - TODO: add description.
- **returns**: interface{} - value that was stored in this message as a JSON string.

#### GetMessageAsString
Returns the information stored in this message as a UTF-8 encoded string.

> (c [*MessageEnvelope]()) GetMessageAsString() string

- **returns**: string - information stored in this message as a UTF-8 encoded string.

#### GetMessageAsJson
GetMessageAsJson method are returns the value that was stored in this message as a JSON string.

> (c [*MessageEnvelope]()) GetMessageAsJson() interface{}

- **returns**: interface{} - value as a JSON string.

#### GetReference
Returns the lock token that this [MessageEnvelope]() references.

> (c [*MessageEnvelope]()) GetReference() interface{}

- **returns**: interface{} - lock token that this [MessageEnvelope]() references.

#### SetMessageAsObject
Stores the given value as an object.
See also [GetMessageAs](#getmessageas)

> (c [*MessageEnvelope]()) SetMessageAsObject(value interface{})

- **value**: interface{} -  value to convert to JSON and store in this message.

#### SetMessageAsJson
SetMessageAsJson method are stores the given value as a JSON string.

> (c [*MessageEnvelope]()) SetMessageAsJson(value interface{})

- **value**: interface{} - the value to convert to JSON and store in this message.

#### SetMessageAsString
Stores the given string.

> (c [*MessageEnvelope]()) SetMessageAsString(value string)

- **value**: string - string to set. It will be converted to a buffer using UTF-8 encoding.

#### SetReference
Sets a lock token reference for this [MessageEnvelope]().

> (c [*MessageEnvelope]()) SetReference(value interface{})

- **value**: interface{} - lock token to reference the message envelope.

#### String
Converts this [MessageEnvelope]() to a string, using the following format:  
*"[<correlationId>,<message_type>,<message.toString>]"*.

If any of the values are *null*, they will be replaced with \-\-\-.

> (c [*MessageEnvelope]()) String() string

- **returns**: string - generated string.
