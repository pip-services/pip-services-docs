Create a /go.mod file at the root of the project with the following content to configure dependencies and project parameters:

**/go.mod**

```
module github.com/pip-services-samples/pip-samples-facade-go

go 1.14

require (
	github.com/gorilla/mux v1.8.0
	github.com/pip-services-samples/client-beacons-go v0.0.0-20211014053826-3c0dad449019
	github.com/pip-services-samples/service-beacons-go v0.0.0-20211012180859-9b862cf4be13
	github.com/pip-services-users/pip-clients-accounts-go v0.0.0-20211012190608-0275957ed72a
	github.com/pip-services-users/pip-clients-passwords-go v0.0.0-20211012192517-7356fde7658f
	github.com/pip-services-users/pip-clients-roles-go v0.0.0-20211012191010-cc2b4284b1ad
	github.com/pip-services-users/pip-clients-sessions-go v0.0.0-20211012191122-ad67c479e2d2
	github.com/pip-services3-gox/pip-services3-commons-gox v1.1.2
	github.com/pip-services3-gox/pip-services3-components-gox v1.2.0
	github.com/pip-services3-gox/pip-services3-container-gox v1.1.5
	github.com/pip-services3-go/pip-services3-mongodb-go v1.1.0
	github.com/pip-services3-go/pip-services3-rpc-go v1.5.0-64
	github.com/stretchr/testify v1.7.0
)

```

