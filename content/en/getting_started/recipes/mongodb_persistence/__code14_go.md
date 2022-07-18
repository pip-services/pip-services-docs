
```go
persistence := persist.NewBeaconsMongoDbPersistence()

persistence.Configure(cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test",
))
	
persistence.Open("123")
beacon := &data1.BeaconV1{Id: "1", SiteId: "0001", Udi: "0002"}

persistence.Set("test", beacon)
item, _ := persistence.GetOneByUdi("test", "0002")

fmt.Println(item.Udi) // Result: 0002

itemsPage, _ := persistence.GetPageByFilter("test", cdata.NewFilterParamsFromTuples("udi", "0002"), nil)

fmt.Println(len(itemsPage.Data))   // Result: 1
fmt.Println(itemsPage.Data[0].Udi) // Result: 0002
persistence.Close("test")
```
