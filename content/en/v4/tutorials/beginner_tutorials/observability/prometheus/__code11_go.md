
```go
import (
      cinfo "github.com/pip-services4/pip-services4-go/pip-services4-components-go/context"
      refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

contextInfo := cinfo.NewContextInfo()
contextInfo.Name = "Test"
contextInfo.Description = "This is a test container"

references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "context-info", "default", "default", "1.0"), contextInfo,
	refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
	refer.NewDescriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
)

controller.SetReferences(context.Background(), references)
counters.SetReferences(context.Background(), references)
```
