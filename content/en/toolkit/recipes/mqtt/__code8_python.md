
##### receive()
This method receives an incoming message and removes it from the queue. It takes the correlation_id and a waiting timeout in milliseconds as input parameters. It returns a message envelope containing the received message. 

```python
message = queue.receive("123", 10000)
```

Now, to obtain the text of the received message, we can use the get_message_as_string() method. The following example shows how to do this.

```python
message_text = message.get_message_as_string() # Returns 'ABC123'
```

##### peek()

This method gets a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null. The received message is contained in a message envelope. The following example illustrates its usage.

```python
receivedPeek = queue.peek(None)
```

Where

```python
message_text = receivedPeek.get_message_as_string () # Returns 'ABCD1234'
```

##### peek_batch()

This method peeks multiple incoming messages from the queue in the form of a list and without removing them. If there are no messages available in the queue, it returns an empty list. As input parameters, it takes the correlation_id and the maximum number of messages to peek. The following example peeks up to three messages. As we had sent only one message, it retrieves it and then stores its content in a message envelope contained in a list. 

```python
receivedPeekBatch = queue.peek_batch(None, 3)
```

Where

```python
message_text = receivedPeekBatch[0].get_message_as_string () # Returns 'ABC123'
```
