
```go
func main() {
	// Step 1 - Database selection
	// os.Setenv("MYSQL_ENABLED", "true")
	os.Setenv("POSTGRES_ENABLED", "true")

	// Step 2 - The run() command
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Args)
}

```
