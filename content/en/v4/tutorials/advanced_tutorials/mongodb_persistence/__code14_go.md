
```go
persistence := NewBeaconsMongoDbPersistence()

persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test",
))

persistence.Open(context.Background())
beacon := &data1.BeaconV1{Id: "1", SiteId: "0001", Udi: "0002"}

persistence.Set(context.Background(), *beacon)
item, _ := persistence.GetOneByUdi(context.Background(), "0002")

fmt.Println(item.Udi) // Result: 0002

itemsPage, _ := persistence.GetPageByFilter(context.Background(), "test", cquery.NewFilterParamsFromTuples("udi", "0002"), cquery.PagingParams{})

fmt.Println(len(itemsPage.Data))   // Result: 1
fmt.Println(itemsPage.Data[0].Udi) // Result: 0002
persistence.Close(context.Background())
```
