
```go
import (
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)


config := cconf.NewConfigParamsFromTuples(
	"param1", "XYZ",
	"param2", 345,
)

component.Configure(config)

/// Also, often components can have hard-coded presets. 
/// The ConfigParams class has methods that allow to easily use them as defaults:
  
type MyComponent struct { // Implements IConfigurable
 param1 string 
 param2 int
}

func NewMyComponent() MyComponent {
  return MyComponent{
	  param1: "ABC",
	  param2: 123,
  }
}

func (c* MyComponent) Configure(config *cconf.ConfigParams) {
  c.param1 = config.GetAsStringWithDefault("param1", c.param1)
  c.param2 = config.GetAsIntegerWithDefault("param2", c.param2)
}
  

```
