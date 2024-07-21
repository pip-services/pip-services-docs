
```go
import (
        crefer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	ccont "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
)

type MyProcess struct {
	*ccont.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := &MyProcess{}
	c.ProcessContainer = ccont.NewProcessContainer("myservice", "My service running as a process")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	return c
}
```
