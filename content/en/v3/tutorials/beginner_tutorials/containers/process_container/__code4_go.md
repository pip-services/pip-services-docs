
```go
import (
    crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
    ccont "github.com/pip-services3-gox/pip-services3-container-gox/container"
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
