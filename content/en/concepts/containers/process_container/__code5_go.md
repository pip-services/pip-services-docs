
```go
func main() {
	proc := NewMyProcess()
    // proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}
```
