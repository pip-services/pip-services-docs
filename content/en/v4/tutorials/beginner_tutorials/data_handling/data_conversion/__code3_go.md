
```go
// Date time converter

// Returns 2021-11-09 17:24:50.75
value0 := convert.DateTimeConverter.ToDateTime("2021-11-09T17:24:50.750Z")

// Returns nil
value1, err := convert.DateTimeConverter.ToNullableDateTime("ABC")

// Returns 2021-11-09 17:24:50.75
value2, err := convert.DateTimeConverter.ToNullableDateTime("2021-11-09T17:24:50.750Z")

// Returns 2361-03-21 16:22:35
value3, err := convert.DateTimeConverter.ToNullableDateTime(12345657755000)

// Returns current datetime
value4 := convert.DateTimeConverter.ToDateTimeWithDefault("ABC", time.Now())

// Returns 2021-11-09 17:24:50.75
value5 := convert.DateTimeConverter.ToDateTimeWithDefault("2021-11-09T17:24:50.750Z", time.Now())
```
