---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Abstract message queue that is used as a basis for specific message queue implementations.

##### Configuration parameters
- name: name of the message queue
- connection(s):
    - discovery_key: key to retrieve parameters from discovery service
    - protocol: connection protocol like http, https, tcp, udp
    - host: host name or IP address
    - port: port number
    - uri: resource URI or connection string with all parameters in it
- credential(s):
    - store_key: key to retrieve parameters from credential store
    - username: user name
    - password: user password
    - access_id: application access id
    - access_key: application secret key

##### References
- `*:logger:*:*:1.0` (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- `*:counters:*:*:1.0` (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- `*:discovery:*:*:1.0` (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- `*:credential-store:*:*:1.0` (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)

### Constructors

> new MessageQueue(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities)): [MessageQueue]()

Creates a new instance of the message queue.

- `Optional` name: string (optional) a queue name
- `Optional` capabilities: [MessagingCapabilities](../messaging_capabilities) (optional) a capabilities of this message queue
- Returns [MessageQueue]()

### Properties

- `protected` _logger
- `protected` _counters
- `protected` _connectionResolver
- `protected` _credentialResolver
- `protected` _name
- `protected` _capabilities

### Methods

#### abandon
> `Abstract` abandon(message: [MessageEnvelope](../message_envelope), callback?: function): void

Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

- message: [MessageEnvelope](../message_envelope) a message to return.
- `Optional` callback: (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### beginListen
> beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

Listens for incoming messages without blocking the current thread.

- correlationId: string (optional) transaction id to trace execution through call chain.
- receiver: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.

See [listen](#listen), [IMessageReceiver](../imessage_receiver)

#### clear
> `Abstract` clear(correlationId: string, callback: function): void

Clears component state.

- correlationId: string (optional) transaction id to trace execution through call chain.
- callback: callback function that receives error or null no errors occured.
    - (err: any): void
        - err: any

#### close
> `Abstract` close(correlationId: string, callback: function): void

Closes component and frees used resources.

- correlationId: string (optional) transaction id to trace execution through call chain.
- callback: callback function that receives error or null no errors occured.
    - (err: any): void
        - err: any

#### complete
> `Abstract` complete(message: [MessageEnvelope](../message_envelope), callback?: function): void

Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

- message: [MessageEnvelope](../message_envelope) a message to remove.
- `Optional` callback: (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### configure
> configure(config: [ConfigParams](../../../commons/config/config_params)): void

Configures component by passing configuration parameters.

- config: [ConfigParams](../../../commons/config/config_params) configuration parameters to be set.

#### endListen
> `Abstract` endListen(correlationId: string): void

Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

- correlationId: string (optional) transaction id to trace execution through call chain.

#### getCapabilities
> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

Gets the queue capabilities

- Returns [MessagingCapabilities](../messaging_capabilities) the queue's capabilities object.

#### getName
> getName(): string

Gets the queue name

- Returns string the queue name.

#### isOpen
> `Abstract` isOpen(): boolean 

Checks if the component is opened.

- Returns boolean true if the component has been opened and false otherwise.

#### listen
> `Abstract` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

Listens for incoming messages and blocks the current thread until queue is closed.

- correlationId: string (optional) transaction id to trace execution through call chain.

- receiver: [IMessageReceiver](../imessage_receiver) a receiver to receive incoming messages.

See [IMessageReceiver](../imessage_receiver), [receive](#receive)

#### moveToDeadLetter
> `Abstract` moveToDeadLetter(message: [MessageEnvelope](../message_envelope), callback?: function): void

Permanently removes a message from the queue and sends it to dead letter queue.

- message: [MessageEnvelope](../message_envelope) a message to be removed.
- `Optional` callback: (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### open
> open(correlationId: string, callback?: function): void

Opens the component.

- correlationId: string (optional) transaction id to trace execution through call chain.
- `Optional` callback: callback function that receives error or null no errors occured.
    - (err: any): void
        - err: any

#### peek
> `Abstract` peek(correlationId: string, callback: function): void

Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

- correlationId: string (optional) transaction id to trace execution through call chain.
- callback: callback function that receives a message or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)): void
        - err: any
        - result: [MessageEnvelope](../message_envelope)

#### peekBatch
> `Abstract` peekBatch(correlationId: string, messageCount: number, callback: function): void

Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

- correlationId: string (optional) transaction id to trace execution through call chain.
- messageCount: number a maximum number of messages to peek.
- callback: callback function that receives a list with messages or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)[]): void
        - err: any
        - result: [MessageEnvelope](../message_envelope)[]

#### readMessageCount
> `Abstract` readMessageCount(callback: function): void

Reads the current number of messages in the queue to be delivered.

- callback: callback function that receives number of messages or error.
    - (err: any, count: number): void
        - err: any
        - count: number

#### receive
> `Abstract` receive(correlationId: string, waitTimeout: number, callback: function): void

Receives an incoming message and removes it from the queue.

- correlationId: string (optional) transaction id to trace execution through call chain.
- waitTimeout: number a timeout in milliseconds to wait for a message to come.
- callback: callback function that receives a message or error.
    - (err: any, result: [MessageEnvelope](../message_envelope)): void
        - err: any
        result: [MessageEnvelope](../message_envelope)

#### renewLock
> `Abstract` renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number, callback?: function): void

Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

- message: [MessageEnvelope](../message_envelope) a message to extend its lock.
- lockTimeout: number a locking timeout in milliseconds.
- `Optional` callback: (optional) callback function that receives an error or null for success.
    - (err: any): void
        - err: any

#### send
> `Abstract` send(correlationId: string, envelope: [MessageEnvelope](../message_envelope), callback?: function): void

Sends a message into the queue.

- correlationId: string (optional) transaction id to trace execution through call chain.
- envelope: [MessageEnvelope](../message_envelope) a message envelop to be sent.
- `Optional` callback: (optional) callback function that receives error or null for success.
    - (err: any): void
        - err: any

#### sendAsObject
> sendAsObject(correlationId: string, messageType: string, message: any, callback?: function): void

Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

- correlationId: string (optional) transaction id to trace execution through call chain.
- messageType: string a message type
- message: any
- `Optional` callback: (optional) callback function that receives error or null for success.
    - (err: any): void
        - err: any

See [send](#send)

#### setReferences
> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

Sets references to dependent components.

- references: [IReferences](../../../commons/refer/ireferences) references to locate the component dependencies.

#### toString
> toString(): string

Gets a string representation of the object.

- Returns string a string representation of the object.


#### openWithParams
> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credential: [CredentialParams](../../../components/auth/credential_params), callback: function): void

Opens the component with given connection and credential parameters.

- correlationId: (optional) transaction id to trace execution through call chain.
- connection: connection parameters
- credential: credential parameters
- callback: callback function that receives error or null no errors occured.
    - (err: any): void
        - err: any
        

#### checkOpen
> `protected` checkOpen(correlationId: string): any

Checks if the queue has been opened

- correlationId: (optional) transaction id to trace execution through call chain.
- Returns Error if queue wasn't opened or `null` otherwise

