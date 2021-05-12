---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


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
- **username**: user name
- **password**: user password
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

- **name**: str - (optional) a queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) a capabilities of this message queue


### Fields

<span class="hide-title-link">

#### _lock
TODO: add description property 

> _lock: threading.Lock

#### _event
TODO: add description property 

> _event = threading.Event

#### _logger
TODO: add description property 

> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
TODO: add description property

> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _connectionResolver
TODO: add description property  

> **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
TODO: add description property  

> **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

#### _name
 TODO: add description property  

> **_name**: str

#### _capabilities
TODO: add description property  

> **_capabilities**: [MessagingCapabilities](../messaging_capabilities)

</span>

### Methods


#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> `abstractmethod` abandon(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - a message to return.

#### begin_listen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> beginListen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### clear
Clears component state.

> `abstractmethod` clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### close
Closes component and frees used resources.

> `abstractmethod` close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `abstractmethod` complete(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### end_listen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> `abstractmethod` end_listen(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### get_capabilities
Gets the queue capabilities

> get_capabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - the queue's capabilities object.


#### get_name
Gets the queue name

> get_name(): str

- **returns**: str - the queue name.


#### is_open
Checks if the component is opened.

> `abstractmethod` is_open(): bool 

- **returns**: bool - true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `abstractmethod` listen(correlation_id: Optional[str], receiver: [IMessageReceiver](../imessage_receiver))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### move_to_dead_letter
Permanently removes a message from the queue and sends it to dead letter queue.

> `abstractmethod` move_to_dead_letter(message: [MessageEnvelope](../message_envelope))

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns None.

> `abstractmethod` peek(correlation_id: Optional[str]): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: [MessageEnvelope](../message_envelope) - a peeked message or *None*.


#### peek_batch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> `abstractmethod` peek_batch(correlation_id: Optional[str], message_count: int): List[[MessageEnvelope](../message_envelope)]

- **correlation_id**: Optional[str] -  (optional) transaction id to trace execution through call chain.
- **message_count**: int - a maximum number of messages to peek.
- **returns**: List[[MessageEnvelope](../message_envelope)] - a list of peeked messages


#### read_message_count
Reads the current number of messages in the queue to be delivered.

> `abstractmethod` read_message_count(): int

- **returns**: int - a number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `abstractmethod` receive(correlation_id: Optional[str], wait_timeout: int): [MessageEnvelope](../message_envelope)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **wait_timeout**: int - a timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - a received message or *None*.


#### renew_lock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `abstractmethod` renew_lock(message: [MessageEnvelope](../message_envelope), lock_timeout: int)

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lock_timeout**: int - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `abstractmethod` send(correlation_id: Optional[str], envelope: [MessageEnvelope](../message_envelope))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - a message envelop to be sent.


#### send_as_object
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).  

> send_as_object(correlation_id: Optional[str], message_type: str, message: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message_type**: str - a message type
- **message**: Any - an object value to be sent

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### to_string
Gets a string representation of the object.

> to_string(): str

- **returns**: str - a string representation of the object.


#### _open_with_params
Opens the component with given connection and credential parameters.

> _open_with_params(correlation_id: Optional[str], connections: List[[ConnectionParams](../../../components/connect/connection_params)], credentials: [CredentialParams](../../../components/auth/credential_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **connections**: List[[ConnectionParams](../../../components/connect/connection_params)] - connection parameters
- **credentials**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
        

#### _check_open
Checks if the queue has been opened

> _check_open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: Exception - if queue wasn't opened or *None* otherwise

