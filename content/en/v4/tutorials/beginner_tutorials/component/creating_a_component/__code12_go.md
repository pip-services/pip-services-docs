
```go
import (
	container "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
)

type MyProcess struct {
	*container.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := &MyProcess{
		ProcessContainer: container.NewProcessContainer("myservice", "My service running as a process"),
	}
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyClassFactory())

	return c
}
```
