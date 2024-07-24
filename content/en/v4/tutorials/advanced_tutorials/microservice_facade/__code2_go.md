Create a /go.mod file at the root of the project with the following content to configure dependencies and project parameters:

**/go.mod**

```
module github.com/pip-services-samples/pip-samples-facade-go

go 1.22

require (
	github.com/pip-services-users/pip-clients-accounts-go v0.0.0-20211012190608-0275957ed72a
	github.com/pip-services-users/pip-clients-passwords-go v0.0.0-20211012192517-7356fde7658f
	github.com/pip-services-users/pip-clients-roles-go v0.0.0-20211012191010-cc2b4284b1ad
	github.com/pip-services-users/pip-clients-sessions-go v0.0.0-20211012191122-ad67c479e2d2
	github.com/pip-services4/pip-services4-go/pip-services4-commons-go v0.0.1-2
	github.com/pip-services4/pip-services4-go/pip-services4-components-go v0.0.1-2
	github.com/pip-services4/pip-services4-go/pip-services4-http-go v0.0.1-4
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/golang/snappy v0.0.1 // indirect
	github.com/klauspost/compress v1.13.6 // indirect
	github.com/montanaflynn/stats v0.0.0-20171201202039-1bf9dbcd8cbe // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-expressions-go v0.0.1-2 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-logic-go v0.0.1-3 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/xdg-go/pbkdf2 v1.0.0 // indirect
	github.com/xdg-go/scram v1.1.2 // indirect
	github.com/xdg-go/stringprep v1.0.4 // indirect
	github.com/youmark/pkcs8 v0.0.0-20181117223130-1be2e3e5546d // indirect
	go.mongodb.org/mongo-driver v1.12.0 // indirect
	golang.org/x/crypto v0.0.0-20220622213112-05595931fe9d // indirect
	golang.org/x/sync v0.0.0-20220722155255-886fb9371eb4 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
)

require (
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/golang/protobuf v1.5.2 // indirect
	github.com/google/uuid v1.6.0 // indirect
	github.com/gorilla/handlers v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0 // indirect
	github.com/jinzhu/copier v0.3.5 // indirect
	github.com/pip-services3-go/pip-services3-commons-go v1.1.2 // indirect
	github.com/pip-services3-go/pip-services3-components-go v1.2.0 // indirect
	github.com/pip-services3-go/pip-services3-data-go v1.1.7 // indirect
	github.com/pip-services3-go/pip-services3-grpc-go v1.2.2 // indirect
	github.com/pip-services3-go/pip-services3-rpc-go v1.4.4-62 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-config-go v0.0.0-20240325121312-3b0195749a25 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-container-go v0.0.1-3
	github.com/pip-services4/pip-services4-go/pip-services4-data-go v0.0.1-2 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go v0.0.1-3
	github.com/pip-services4/pip-services4-go/pip-services4-observability-go v0.0.1-3 // indirect
	github.com/pip-services4/pip-services4-go/pip-services4-rpc-go v0.0.0-20240304141352-928143cb0946 // indirect
	github.com/rs/cors v1.9.0 // indirect
	github.com/satori/go.uuid v1.2.0 // indirect
	github.com/stretchr/testify v1.9.0
	goji.io v2.0.2+incompatible // indirect
	golang.org/x/net v0.0.0-20220722155237-a158d28d115b // indirect
	golang.org/x/sys v0.0.0-20220722155257-8c9f86f7a55f // indirect
	golang.org/x/text v0.7.0 // indirect
	google.golang.org/genproto v0.0.0-20200526211855-cb27e3aa2013 // indirect
	google.golang.org/grpc v1.37.0 // indirect
	google.golang.org/protobuf v1.26.0 // indirect
)

```

