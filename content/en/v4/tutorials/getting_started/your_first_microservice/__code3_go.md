
```bash
go mod init quickstart
```

Update the generated /go.mod file to add there dependencies to Pip.Services toolkit.

**/go.mod**

```
module quickstart

go 1.18

require (
	github.com/pip-services3-gox/pip-services3-commons-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-components-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-container-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-rpc-gox v1.0.2
)

require (
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/google/uuid v1.3.0 // indirect
	github.com/gorilla/handlers v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0 // indirect
	github.com/pip-services3-gox/pip-services3-expressions-gox v1.0.1 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
)

```

In the command line execute the following command to install the dependencies:

```bash
go get -u
```
