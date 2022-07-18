
```go
result[0].(MyData).Id        // Returns '3'
result[0].(MyData).Key       // Returns 'key 3'
result[0].(MyData).Content   // Returns 'content 3'
result[1].(MyData).Id        // Returns '2'
result[1].(MyData).Key       // Returns 'key 2'
result[1].(MyData).Content   // Returns 'content 2'
```
