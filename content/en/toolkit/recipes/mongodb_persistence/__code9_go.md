
```go
filter := cdata.NewFilterParamsFromTuples(
	"name", "ABC",
)
result, _ := persistence.GetPageByFilter("123", filter, nil)

```
