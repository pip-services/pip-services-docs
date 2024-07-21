
```go

config := cconf.NewConfigParamsFromTuples(
	"host", "broker1,broker2",
	"port", ",8082",
	"username", "user",
	"password", "pass123",
	"param1", "ABC",
	"param2", "XYZ",
	"param3", nil,
)

config2 := ccon.ConnectionUtils.Exclude(config, "username", "password")
```
