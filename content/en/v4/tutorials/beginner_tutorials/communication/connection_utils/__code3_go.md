
```go
configA := cconf.NewConfigParamsFromTuples(
	"host", "broker1,broker2",
	"port", "8082",
	"username", "user2",
	"password", "pass123",
	"param1", "ABC",
	"param2", "XYZ",
	"param3", "p3A",
)

configB := cconf.NewConfigParamsFromTuples(
	"host", "broker3,broke42",
	"port", "8083",
	"username", "user2",
	"password", "pass1234",
	"param1", "ABCD",
	"param2", "WXYZ",
	"param3", "p3B",
)

config := ccon.ConnectionUtils.Concat(configA, configB, "username", "password")
```