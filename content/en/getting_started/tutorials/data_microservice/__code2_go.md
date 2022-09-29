Add a go.mod file with the following lines to the root of the project's folder:

**/go.mod**

```
module github.com/pip-services-samples/service-beacons-go

go 1.15

require (
	github.com/DataDog/zstd v1.4.4 // indirect
	github.com/jackc/pgx v3.6.2+incompatible
	github.com/kisielk/errcheck v1.2.0 // indirect
	github.com/pip-benchmark/pip-benchmark-go v1.0.6
	github.com/pip-services3-gox/pip-services3-commons-gox v1.1.2
	github.com/pip-services3-gox/pip-services3-components-gox v1.2.0
	github.com/pip-services3-go/pip-services3-container-go v1.1.5
	github.com/pip-services3-go/pip-services3-data-go v1.1.7
	github.com/pip-services3-go/pip-services3-grpc-go v1.2.2
	github.com/pip-services3-go/pip-services3-mongodb-go v1.1.0
	github.com/pip-services3-go/pip-services3-postgres-go v1.2.7
	github.com/pip-services3-go/pip-services3-rpc-go v1.4.4-62
	github.com/stretchr/testify v1.7.0
	github.com/xdg/scram v0.0.0-20180814205039-7eeb5667e42c // indirect
	github.com/xdg/stringprep v0.0.0-20180714160509-73f8eece6fdc // indirect
	go.mongodb.org/mongo-driver v1.5.1
	google.golang.org/grpc v1.37.0
	google.golang.org/protobuf v1.26.0
)

```
