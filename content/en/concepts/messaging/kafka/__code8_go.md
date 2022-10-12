
```go
var listOfMessages []*kafka.ProducerMessage
for i, val := range []string{"message 1", "message 2"} {
	msg := &kafka.ProducerMessage{}
	msg.Key = kafka.StringEncoder(i)
	msg.Value = kafka.ByteEncoder(val)
	msg.Timestamp = time.Now()
	listOfMessages = append(listOfMessages, msg)
}
kc.Publish(context.Background(), "my_topicA", listOfMessages)
```
