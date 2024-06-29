
```go
messageQueue := cqueues.NewMemoryMessageQueue("my_queue")
err := messageQueue.Open(context.Background())
```
