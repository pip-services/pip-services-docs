
```go
import (
    cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

item, err = persistence.GetOneRandom(context.Background(), "", cdata.NewFilterParamsFromTuples("key", "key 3"))
```
