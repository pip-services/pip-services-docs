
```go
myCachedValue, _ := myCache.Store(context.Background(), "123", "key1", "1234", 180000) // Returns "1234"
```
