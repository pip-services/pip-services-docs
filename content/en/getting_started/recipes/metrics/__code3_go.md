
```go
import (
	"context"
	"fmt"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	ccount "github.com/pip-services3-gox/pip-services3-components-gox/count"
	clog "github.com/pip-services3-gox/pip-services3-components-gox/log"
)

func main() {
	counters := ccount.NewLogCounters()
	counters.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
		cref.NewDescriptor("pip-services", "logger", "console", "default", "1.0"),
		clog.NewConsoleLogger(),
	))

	mycomponentLog := NewMyComponent(counters)

	countExec := 2

	for i := 0; i < countExec; i++ {
		mycomponentLog.Mymethod(context.Background())
	}

	resultLog := counters.GetAll()

	fmt.Println("Metrics")

	for _, res := range resultLog {
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
```
