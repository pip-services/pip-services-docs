
```go
package main

func main() {
	proc := NewMyProcess()
	proc.Run(context.Background(), os.Environ())
}

```
