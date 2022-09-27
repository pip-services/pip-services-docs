
```go
import (
    refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

references := refer.NewReferencesFromTuples(
    refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
)
```
