
```go
import (
        "context"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
)
```
