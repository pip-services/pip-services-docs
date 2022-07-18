---
type: docs
title: "NatsMessageQueue"
linkTitle: "NatsMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-nats-dotnet"
description: >
    Message queue that sends and receives messages via a NATS message broker.
    
---

**Inherits:** [NatsAbstractMessageQueue](../nats_abstract_message_queue), [INatsMessageListener](../../connect/inats_message_listener)

### Description

The NatsMessageQueue class allows you to create a message queue that sends and receives messages via a NATS message broker.

#### Configuration parameters

- **subject**: name of NATS topic (subject) to subscribe
- **queue_group**: name of NATS queue group
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **serialize_message**: (optional) true to the serialize entire message as JSON, false to send only the message payload (default: true)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) shared connection to NATS service


### Constructors
Creates a new instance of the message queue.

> `public` NatsMessageQueue(string name = null)

- **name**: string - (optional) queue name.


### Instance methods

#### Clear!
**Note: this method is not implemented**

Clears a component's state.


#### CloseAsync
Closes a component and frees used resources.

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### EndListen!
**Note: this method is not implemented**

Ends listening for incoming messages.
When this method is call, [Listen](#listen) unblocks the thread and execution continues.


#### Listen!
**Note: this method is not implemented**

Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)


#### OnMessage
Checks if the message is not null. If this is the case, it deserializes and sends the message to the receiver if it’s set. Otherwise, it puts the message into the queue.

> `public` void OnMessage(object sender, MsgHandlerEventArgs e)

- **sender**: object - sender
- **e**: MsgHandlerEventArgs - message event handler


#### OpenAsync
Opens the component.

> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Peek!
**Note: this method is not implemented**

Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

#### PeekBatch!
**Note: this method is not implemented**

Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

#### ReadMessageCount!
**Note: this method is not implemented**

Reads the current number of messages in the queue to be delivered.

#### Receive!
**Note: this method is not implemented**

Receives an incoming message and removes it from the queue.


#### subscribe!
**TODO: this method is not implemented**

Subscribes to a subject.


### Examples

```cs
var queue = new NatsMessageQueue("myqueue");
queue.Configure(ConfigParams.FromTuples(
  "subject", "mytopic",
  "connection.protocol", "nats"
  "connection.host", "localhost"
  "connection.port", 4222
));

await queue.OpenAsync("123");
await queue.SendAsync("123", new MessageEnvelope("", "mymessage", "ABC"));
var message = await queue.ReceiveAsync("123");
if (message != null) {
    ...
    await queue.CompleteAsync("123", message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
