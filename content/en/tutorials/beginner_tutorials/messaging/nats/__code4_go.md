
```go
err = queue.Send(context.Background(), "123", cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
if err != nil {
	panic(err)
}
```
