
```go
import (
    "context"
    refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
)
```
