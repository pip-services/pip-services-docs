
```go
err := messageQueue.Send(context.Background(), cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
```
