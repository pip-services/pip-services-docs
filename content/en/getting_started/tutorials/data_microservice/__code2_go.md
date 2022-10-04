Add a go.mod file with the following lines to the root of the project's folder:

**/go.mod**

```
module github.com/pip-services-samples/service-beacons-gox

go 1.18

require (
	github.com/pip-services3-gox/pip-services3-commons-gox v1.0.5
	github.com/pip-services3-gox/pip-services3-components-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-container-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-data-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-postgres-gox v1.0.3
	github.com/pip-services3-gox/pip-services3-rpc-gox v1.0.2
	github.com/stretchr/testify v1.7.0
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/gorilla/handlers v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0 // indirect
	github.com/jackc/chunkreader/v2 v2.0.1 // indirect
	github.com/jackc/pgconn v1.12.1 // indirect
	github.com/jackc/pgio v1.0.0 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgproto3/v2 v2.3.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20200714003250-2b9c44734f2b // indirect
	github.com/jackc/pgtype v1.11.0 // indirect
	github.com/jackc/pgx/v4 v4.16.1 // indirect
	github.com/jackc/puddle v1.2.1 // indirect
	github.com/jinzhu/copier v0.3.5 // indirect
	github.com/pip-services3-gox/pip-services3-expressions-gox v1.0.1 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/satori/go.uuid v1.2.0 // indirect
	golang.org/x/crypto v0.0.0-20220622213112-05595931fe9d // indirect
	golang.org/x/text v0.3.7 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c // indirect
)

```
