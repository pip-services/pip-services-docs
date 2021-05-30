---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The MessageQueue class allows you to create a message queue that is used as a basis for specific message queue implementions.

##### Configuration parameters
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

##### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> MessageQueue(name: str = None, capabilities: [MessagingCapabilities](../messaging_capabilities) = None)

- **name**: str - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of this message queue


### Fields

<span class="hide-title-link">

#### _lock
Threading lock.

> **_lock**: threading.Lock

#### _event
Threading event.

> **_event** = threading.Event

#### _logger
Component used to pass log messages. 

> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
Component to pass collected measurements.

> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _connectionResolver
Component used to resolve connections.

> **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Component used to resolve credentials.
> **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

#### _name
Name of the message queue.

> **_name**: str

#### _capabilities
Component used to store the message queue. 

> **_capabilities**: [MessagingCapabilities](../messaging_capabilities)

</span>

### Abstract methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `abstractmethod` abandon(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### clear
Clears a component's state.

> `abstractmethod` clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### close
Closes a component and frees the used resources.

> `abstractmethod` close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `abstractmethod` complete(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### end_listen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `abstractmethod` end_listen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### is_open
Checks if the component is opened.

> `abstractmethod` is_open(): bool 

- **returns**: bool - True if the component has been opened and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `abstractmethod` listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### move_to_dead_letter
Permanently removes a message from the queue and sends it to dead letter queue.

> `abstractmethod` move_to_dead_letter(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns None.

> `abstractmethod` peek(correlation_id: Optional[str]): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: [MessageEnvelope](../message_envelope) - peeked message or *None*.


#### peek_batch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `abstractmethod` peek_batch(correlation_id: Optional[str], message_count: int): List[[MessageEnvelope](../message_envelope)]

- **correlation_id**: Optional[str] -  (optional) transaction id used to trace execution through the call chain.
- **message_count**: int - maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../message_envelope)] - list of peeked messages


#### read_message_count
Reads the current number of messages in the queue to be delivered.

> `abstractmethod` read_message_count(): int

- **returns**: int - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `abstractmethod` receive(correlation_id: Optional[str], wait_timeout: int): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **wait_timeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *None*.


#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `abstractmethod` renew_lock(message: [MessageEnvelope](../message_envelope), lock_timeout: int)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lock_timeout**: int - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `abstractmethod` send(correlation_id: Optional[str], envelope: [MessageEnvelope](../message_envelope))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - message envelop to be sent.

### Instance methods

#### begin_listen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> beginListen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### get_capabilities
Gets the queue capabilities

> get_capabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.


#### get_name
Gets the queue name

> get_name(): str

- **returns**: str - queue name.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### send_as_object
Sends an object into the queue. Before sending it, the object is converted into a JSON string and wrapped in a [MessageEnvelope](../message_envelope).  

> send_as_object(correlation_id: Optional[str], message_type: str, message: Any)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **message_type**: str - message type
- **message**: Any - object value to be sent

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### to_string
Gets a string representation of the object.

> to_string(): str

- **returns**: str - string representation of the object.


#### _open_with_params
Opens the component with the given connection and credential parameters.

> _open_with_params(correlation_id: Optional[str], connections: List[[ConnectionParams](../../../components/connect/connection_params)], credentials: [CredentialParams](../../../components/auth/credential_params))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **connections**: List[[ConnectionParams](../../../components/connect/connection_params)] - connection parameters
- **credentials**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
        

#### _check_open
Checks if the queue has been opened.

> _check_open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: Exception - an exception if queue wasn't opened or *None* otherwise

