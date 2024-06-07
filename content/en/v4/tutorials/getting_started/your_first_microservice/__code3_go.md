
```bash
go mod init quickstart
```

Update the generated /go.mod file to add there dependencies to Pip.Services toolkit.

**/go.mod**

```
module quickstart

go 1.22

require (
	github.com/pip-services4/pip-services4-go/pip-services4-components-go v0.0.1-2
	github.com/pip-services4/pip-services4-go/pip-services4-container-go v0.0.1-3
)

require (
	github.com/pip-services4/pip-services4-go/pip-services4-config-go v0.0.0-20240325121312-3b0195749a25 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-data-go v0.0.1-2 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-expressions-go v0.0.1-2 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-logic-go v0.0.1-3 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-observability-go v0.0.1-3 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-rpc-go v0.0.0-20240304141352-928143cb0946 // indirect
	github.com/rs/cors v1.9.0 // indirect
	goji.io v2.0.2+incompatible // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
)

require (
	github.com/google/uuid v1.6.0 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-commons-go v0.0.1-2 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-http-go v0.0.1-4
)


```

In the command line execute the following command to install the dependencies:

```bash
go get -u
```
