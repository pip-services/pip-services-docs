---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-messaging-go"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue)

### Description

The MessageQueue class allows you to create a message queue that is used as a basis for specific message queue implementions.

#### Configuration parameters
- **name**: name of the message queue

**connection(s)**: 
- **discovery_key**: key to retrieve parameters from discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**: 
- **store_key**: key to retrieve parameters from credential store
- **username**: username
- **password**: user's password
- **access_id**: application access id
- **access_key**: application secret key

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> InheritMessageQueue(overrides IMessageQueueOverrides, name string, capabilities [*MessagingCapabilities](../messaging_capabilities)) [*MessageQueue]()

- **overrides**: IMessageQueueOverrides - overrides IMessageQueue.
- **name**: string - (optional) queue name
- **capabilities**: [*MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of this message queue


### Fields

<span class="hide-title-link">

#### Logger
Component used to pass log messages. 

> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Counters
Component to pass collected measurements.

> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)

#### ConnectionResolver
Component used to resolve connections.

> **ConnectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### CredentialResolver
Component used to resolve credentials.
> **CredentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

#### name
Name of the message queue.

> **name**: string

#### capabilities
Component used to store the message queue. 

> **capabilities**: [*MessagingCapabilities](../messaging_capabilities)

</span>

### Methods

#### BeginListen
Listens for incoming messages without blocking the current thread.  
See also [Listen](#listen), [IMessageReceiver](../imessage_receiver)

> (c [*MessageQueue]()) BeginListen(correlationId string, receiver [IMessageReceiver](../imessage_receiver))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.

#### CheckOpen
Checks if the queue has been opened.
Raise an exception if queue wasn't opened or *null* otherwise

> (c [*MessageQueue]()) CheckOpen(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*MessageQueue]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Capabilities
Gets the queue capabilities

> (c [*MessageQueue]()) Capabilities() [*MessagingCapabilities](../messaging_capabilities)

- **returns**: [*MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public abstract` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### Name
Gets the queue name

> (c [*MessageQueue]()) Name() string

- **returns**: string - queue name.

#### Open
Opens the component.

> (c [*MessageQueue]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.

#### SendAsObject
Sends an object into the queue.
Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_mnvelope).

> (c [*MessageQueue]()) SendAsObject(correlationId string, messageType string, message interface{}) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a message type.
- **message**: interface{} - an object value to be sent.
- **returns**: (err error) -  error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*MessageQueue]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### String
Gets a string representation of the object.

> (c [*MessageQueue]()) String() string

- **returns**: string - string representation of the object.


#### OpenWithParams
Opens the component with the given connection and credential parameters.

> OpenWithParams(correlationId string, connections [][*cconn.ConnectionParams](../../../components/connect/connection_params), credential [*cauth.CredentialParams](../../../components/auth/credential_params)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [][*cconn.ConnectionParams](../../../components/connect/connection_params) - connection parameters.
- **credentials**: [*cauth.CredentialParams](../../../components/auth/credential_params) - credential parameters.
- **returns**: error -  error or nil no errors occured.

