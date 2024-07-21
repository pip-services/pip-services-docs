
```go
package main

import (
	"fmt"

	"context"

	ccon "github.com/pip-services3-gox/pip-services3-components-gox/connect"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cerror "github.com/pip-services3-gox/pip-services3-commons-gox/errors"
	mongodrv "go.mongodb.org/mongo-driver/mongo"
	mongoclopt "go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/x/mongo/driver/connstring"
)

func main() {
	options := cconf.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", ",27017",
		"username", "user",
		"password", "pass123",
		"protocol", "mongodb",
		"collection", "my_db_name",
	)

	conn := NewMongoDbConnector(false)
	conn.Configure(options)
	err := conn.Open("123")

	fmt.Println(err)
}

type MongoDbConnector struct {
	//   The configuration options.
	Config *cconf.ConfigParams
	//   The MongoDB connection object.
	Connection *mongodrv.Client
	//   The MongoDB database name.
	DatabaseName string
	//   The MongoDb database object.
	Db *mongodrv.Database

	secureMongo bool
}

// NewMongoDbConnector are creates a new instance of the connection component.
// Returns *MongoDbConnector with default config
func NewMongoDbConnector(secureMongo bool) *MongoDbConnector {
	c := MongoDbConnector{
		// The configuration options.
		secureMongo: secureMongo,
		Config:      cconf.NewEmptyConfigParams(),
	}
	return &c
}

func (c *MongoDbConnector) GetCollection() *mongodrv.Collection {
	return c.Db.Collection("test")
}

func (c *MongoDbConnector) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.Config = config

	// if connection passed as uri
	if *c.Config.GetAsNullableString("uri") != "" {
		c.Config = ccon.ConnectionUtils.ParseUri(c.Config.GetAsString("uri"), "mongodb", 27017)
	}

	// if mongo without auth
	if !c.secureMongo {
		c.Config = ccon.ConnectionUtils.Exclude(c.Config, "username", "password")
	}
}

func (c *MongoDbConnector) IsOpen() bool {
	return c.Connection != nil
}

func (c *MongoDbConnector) composeSettings(settings *mongoclopt.ClientOptions) {
	authUser := c.Config.GetAsString("auth_user")
	authPassword := c.Config.GetAsString("auth_password")

	// Auth params
	if authUser != "" && authPassword != "" {
		authParams := mongoclopt.Credential{
			Username: authUser,
			Password: authPassword,
		}
		settings.SetAuth(authParams)
	}
}

func (c *MongoDbConnector) Open(ctx context.Context, correlationId string) error {
	collection := c.Config.GetAsNullableString("collection")

	c.Config = ccon.ConnectionUtils.Exclude(c.Config, "collection")

	uri := ccon.ConnectionUtils.ComposeUri(c.Config, "mongodb", 27017)
	uri += "/" + *collection

	settings := mongoclopt.Client()
	settings.ApplyURI(uri)
	c.composeSettings(settings)

	client, err := mongodrv.NewClient(settings)

	if err != nil {
		err = cerror.NewConnectionError(correlationId, "CONNECT_FAILED", "Create client for mongodb failed").WithCause(err)
		return err
	}
	cs, _ := connstring.Parse(uri)
	c.DatabaseName = cs.Database

	err = client.Connect(ctx)
	if err != nil {
		err = cerror.NewConnectionError(correlationId, "CONNECT_FAILED", "Connection to mongodb failed").WithCause(err)
		return err
	}
	c.Connection = client
	c.Db = client.Database(c.DatabaseName)
	return nil
}

func (c *MongoDbConnector) Close(ctx context.Context, correlationId string) error {
	if c.Connection == nil {
		return nil
	}

	err := c.Connection.Disconnect(ctx)
	c.Connection = nil
	c.Db = nil
	c.DatabaseName = ""

	if err != nil {
		err = cerror.NewConnectionError(correlationId, "DISCONNECT_FAILED", "Disconnect from mongodb failed: ").WithCause(err)
	}

	return err
}

```
