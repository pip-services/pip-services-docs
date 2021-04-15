---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

abstract message queue that is used as a basis for specific message queue implementations.

##### Configuration parameters
- **name**: name of the message queue
- **connection(s)**:
    - **discovery_key**: key to retrieve parameters from discovery service
    - **protocol**: connection protocol like http, https, tcp, udp
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from credential store
    - **username**: user name
    - **password**: user password
    - **access_id**: application access id
    - **access_key**: application secret key

##### References
- `*:logger:*:*:1.0` (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- `*:counters:*:*:1.0` (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- `*:discovery:*:*:1.0` (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- `*:credential-store:*:*:1.0` (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> constructors(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities)): [MessageQueue]()

- **name**: string (`optional`) a queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) (`optional`) a capabilities of this message queue
- Returns [MessageQueue]()


### Properties
TODO: add description properties

- `protected` _logger
- `protected` _counters
- `protected` _connectionResolver
- `protected` _credentialResolver
- `protected` _name
- `protected` _capabilities

### Methods


#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> `abstract` abandon(message: [MessageEnvelope](../message_envelope), callback?: function): void

- **message**: [MessageEnvelope](../message_envelope) a message to return.
- **callback**: (`optional`) callback function that receives an error or null for success.


#### beginListen
Listens for incoming messages without blocking the current thread.  
See [listen](#listen), [IMessageReceiver](../imessage_receiver)

> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.


#### clear
Clears component state.

> `abstract` clear(correlationId: string, callback: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **callback**: callback function that receives error or null no errors occured.


#### close
Closes component and frees used resources.

> `abstract` close(correlationId: string, callback: function): void

- **correlationId**: string (optional) transaction id to trace execution through call chain.
- **callback**: callback function that receives error or null no errors occured.


#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `abstract` complete(message: [MessageEnvelope](../message_envelope), callback?: function): void

- **message**: [MessageEnvelope](../message_envelope) a message to remove.
- **callback**: (`optional`) callback function that receives an error or null for success.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) configuration parameters to be set.


#### endListen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> `abstract` endListen(correlationId: string): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.


#### getCapabilities
Gets the queue capabilities

> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

- **Returns** [MessagingCapabilities](../messaging_capabilities) the queue's capabilities object.


#### getName
Gets the queue name

> getName(): string

- **Returns** string the queue name.


#### isOpen
Checks if the component is opened.

> `abstract` isOpen(): boolean 

- **Returns** boolean true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `abstract` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `abstract` moveToDeadLetter(message: [MessageEnvelope](../message_envelope), callback?: function): void

- **message**: [MessageEnvelope](../message_envelope) a message to be removed.
- **callback**: (optional) callback function that receives an error or null for success.


#### open
Opens the component.

> open(correlationId: string, callback?: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **callback**: callback function that receives error or null no errors occured.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> `abstract` peek(correlationId: string, callback: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **callback**: callback function that receives a message or error.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> `abstract` peekBatch(correlationId: string, messageCount: number, callback: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **messageCount**: number a maximum number of messages to peek.
- **callback**: callback function that receives a list with messages or error.


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `abstract` readMessageCount(callback: function): void

- **callback**: callback function that receives number of messages or error.


#### receive
Receives an incoming message and removes it from the queue.

> `abstract` receive(correlationId: string, waitTimeout: number, callback: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **waitTimeout**: number a timeout in milliseconds to wait for a message to come.
- **callback**: callback function that receives a message or error.


#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `abstract` renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number, callback?: function): void

- **message**: [MessageEnvelope](../message_envelope) a message to extend its lock.
- **lockTimeout**: number a locking timeout in milliseconds.
- **callback**: (`optional`) callback function that receives an error or null for success.


#### send
Sends a message into the queue.

> `abstract` send(correlationId: string, envelope: [MessageEnvelope](../message_envelope), callback?: function): void

- **correlationId**: string (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) a message envelop to be sent.
- **callback**: (`optional`) callback function that receives error or null for success.


#### sendAsObject
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).  

> sendAsObject(correlationId: string, messageType: string, message: any, callback?: function): void

- **correlationId**: string (`optional`) transaction id to trace execution through call chain.
- **messageType**: string a message type
- **message**: any
- **callback**: (`optional`) callback function that receives error or null for success.


#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) references to locate the component dependencies.

#### toString
Gets a string representation of the object.

> toString(): string

- **Returns** string a string representation of the object.


#### openWithParams
Opens the component with given connection and credential parameters.

> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credential: [CredentialParams](../../../components/auth/credential_params), callback: function): void

- **correlationId**: (`optional`) transaction id to trace execution through call chain.
- **connection**: connection parameters
- **credential**: credential parameters
- **callback**: callback function that receives error or null no errors occured.
        

#### checkOpen
Checks if the queue has been opened

> `protected` checkOpen(correlationId: string): any

- **correlationId**: (`optional`) transaction id to trace execution through call chain.
- **Returns** Error if queue wasn't opened or `null` otherwise

