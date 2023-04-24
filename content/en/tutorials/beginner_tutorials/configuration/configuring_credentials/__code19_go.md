
```go
result, _ := credentialStore.Lookup(context.Backgroudn(), "123", "key2")
fmt.Println(result) // Returns {'user': 'bsmith', 'pass': 'mypass'}
```
