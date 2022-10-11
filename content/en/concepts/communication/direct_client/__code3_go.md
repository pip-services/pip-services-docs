
```go
// Pre-requisites
import (
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

// Reference setting
client := NewMyDirectClient()
client.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
	cref.NewDescriptor("pip-services", "controller", "controller", "default", "1.0"), myController,
))
```
