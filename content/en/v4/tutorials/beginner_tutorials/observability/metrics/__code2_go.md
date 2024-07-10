
```go
import (
	"context"
	"fmt"

	ccount "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/count"
)

func main() {
	countersCached := NewMyCachedCounters()
	mycomponentCached := NewMyComponentA(countersCached)

	countExec := 2

	for i := 0; i < countExec; i++ {
		mycomponentCached.Mymethod()
	}

	resultCached := countersCached.GetAll()

	fmt.Println("Metrics")

	for _, res := range resultCached {
		fmt.Printf("Count: %d\n", res.Count())
		fmt.Printf("Min: %02f\n", res.Min())
		fmt.Printf("Max: %02f\n", res.Max())
		fmt.Printf("Average: %02f\n", res.Average())
		fmt.Printf("Time: %s\n", res.Time())
		fmt.Printf("Name: %s\n", res.Name())
		fmt.Printf("Type: %d\n", res.Type())
		fmt.Printf("-----------------")
	}
}

type MyCachedCounters struct {
	*ccount.CachedCounters
}

func NewMyCachedCounters() *MyCachedCounters {
	c := &MyCachedCounters{}
	c.CachedCounters = ccount.InheritCacheCounters(c)
	return c
}

func (c *MyCachedCounters) Save(ctx context.Context, counters []ccount.Counter) error {
	fmt.Println("Saving " + counters[0].Name + " and " + counters[1].Name)
	return nil
}

```
