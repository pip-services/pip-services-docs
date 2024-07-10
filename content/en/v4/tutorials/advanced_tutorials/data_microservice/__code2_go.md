Add a go.mod file with the following lines to the root of the project's folder:

**/go.mod**

```
module github.com/pip-services-samples/service-beacons-gox

go 1.18

require (
	github.com/pip-services4-go/pip-services4-commons-go v1.0.6
	github.com/pip-services4-go/pip-services4-components-go v1.0.6
	github.com/pip-services4-go/pip-services4-container-go v1.0.6
	github.com/pip-services4-go/pip-services4-data-go v1.0.6
	github.com/pip-services4-go/pip-services4-mongodb-go v0.0.0-20221006150923-97f131215710
	github.com/pip-services4-go/pip-services4-postgres-go v1.0.3
	github.com/pip-services4-go/pip-services4-rpc-go v1.0.2
	github.com/stretchr/testify v1.8.0
	go.mongodb.org/mongo-driver v1.10.3
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/golang/snappy v0.0.1 // indirect
	github.com/google/uuid v1.3.0 // indirect
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
	github.com/klauspost/compress v1.13.6 // indirect
	github.com/montanaflynn/stats v0.0.0-20171201202039-1bf9dbcd8cbe // indirect
	github.com/pip-services3-gox/pip-services3-expressions-gox v1.0.1 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/xdg-go/pbkdf2 v1.0.0 // indirect
	github.com/xdg-go/scram v1.1.1 // indirect
	github.com/xdg-go/stringprep v1.0.3 // indirect
	github.com/youmark/pkcs8 v0.0.0-20181117223130-1be2e3e5546d // indirect
	golang.org/x/crypto v0.0.0-20220622213112-05595931fe9d // indirect
	golang.org/x/sync v0.0.0-20210220032951-036812b2e83c // indirect
	golang.org/x/text v0.3.7 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
)
```
