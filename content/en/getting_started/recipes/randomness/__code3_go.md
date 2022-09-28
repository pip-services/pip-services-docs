
```go
package main

import (
	"fmt"
	"time"

	rand "github.com/pip-services3-gox/pip-services3-commons-gox/random"
)

func main() {
	maxDate := time.Date(2050, 1, 1, 0, 0, 0, 0, time.Local)

    // Possible result: 2015-01-05 00:00:00
	value1 := rand.RandomDateTime.NextDate(time.Date(2010, 1, 1, 0, 0, 0, 0, time.Local), maxDate)  

    // Possible result: 2012-01-03
	value2 := rand.RandomDateTime.NextDate(time.Date(2010, 1, 1, 0, 0, 0, 0, time.Local), time.Date(2015, 1, 1, 0, 0, 0, 0, time.Local))

    // Possible result: 2020-03-11 11:20:32
	value3 := rand.RandomDateTime.NextDateTime(time.Date(2017, 1, 1, 0, 0, 0, 0, time.Local), maxDate)

    // Possible result: 2010-01-02 00:00:01
	value4 := rand.RandomDateTime.UpdateDateTime(time.Date(2010, 1, 2, 0, 0, 0, 0, time.Local), 500)
}

```
