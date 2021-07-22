---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rabbitmq-go"
description: >
    Message queue that sends and receives messages via a RabbitMQ message broker.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
The RabbitMQMessageQueue class allows you to create message queues that send and receive messages via a RabbitMQ message broker.


#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**:               (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)   
    - **host**:                        host name or IP address    
    - **port**:                        port number   
    - **uri**:                         resource URI or connection string with all parameters in it   
- **credential(s)**:
    - **store_key**:                   (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**:                    username
    - **password**:                    user's password


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors

#### NewEmptyRabbitMQMessageQueue
Creates a new instance of the message queue.

> NewEmptyRabbitMQMessageQueue(name string) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue's name.

#### NewRabbitMQMessageQueueFromConfig
Creates a new instance of the message queue with configuration.

> NewRabbitMQMessageQueueFromConfig(name string, config [*ConfigParams](../../../commons/config/config_params)) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue's name.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters


#### NewRabbitMQMessageQueue
Creates a new instance of the message queue.

> NewRabbitMQMessageQueue(name string, mqChanel *rabbitmq.Channel, queue string) [*RabbitMQMessageQueue]()

- **name**: string - (optional) queue's name.
- **mqChanel**: rabbitmq.Channel - mq channel
- **queue**: string - queue


### Fields

<span class="hide-title-link">

#### Interval
Contains filtered or unexported fields
> **Interval**: time.Duration

</span>


### Instance methods

#### Abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to the dead letter queue.

> (c [*RabbitMQMessageQueue]()) Abandon(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: (err error) - error or if nil if no errors occurred.

#### Clear
Clears a component's state.

> (c [*RabbitMQMessageQueue]()) Clear(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Close
Closes a component and frees used resources.

> (c [*RabbitMQMessageQueue]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or if nil no errors occured.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) Complete(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: (err error) - error or nil if no errors occurred.

#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQMessageQueue]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### EndListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> (c [*RabbitMQMessageQueue]()) EndListen(correlationId string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> (c [*RabbitMQMessageQueue]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c [*RabbitMQMessageQueue]()) Listen(correlationId string, receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) MoveToDeadLetter(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: (err error) - error or nil if no errors occurred.

#### OpenWithParams
Opens the component with given connection and credential parameters.

> (c [*RabbitMQMessageQueue]()) OpenWithParams(correlationId string, connections [[]*ConnectionParams](../../../components/connect/connection_params), credential [[]*CredentialParams](../../../components/auth/credential_params)) error 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connection**: [[]*ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [[]*CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: error - error or nil if no errors occurred.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

- Important: This method are not supported in this release!

> (c [*RabbitMQMessageQueue]()) Peek(correlationId string) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method are not supported in this release!

> (c [*RabbitMQMessageQueue]()) PeekBatch(correlationId string, messageCount int64) (result [[]*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: (result [[]*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*RabbitMQMessageQueue]()) ReadMessageCount() (count int64, err error)

- ***returns**: (count int64, err error) - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c [*RabbitMQMessageQueue]()) Receive(correlationId string, waitTimeout time.Duration) (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: (result [*MessageEnvelope](../../../messaging/queues/message_envelope), err error) - received message or null if nothing was received.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by RabbitMQ.

> (c [*RabbitMQMessageQueue]()) RenewLock(message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.

#### Send
Sends a message into the queue.

> (c [*RabbitMQMessageQueue]()) Send(correlationId string, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: (err error) - error or nil if no errors occured.


### Examples

```go
TODO: example
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
