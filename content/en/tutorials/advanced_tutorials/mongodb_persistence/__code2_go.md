
```go
persistence := persist.NewBeaconsMongoDbPersistence()
// ...

persistence.Open("test")

beacon := &data1.BeaconV1{
	Id:  "1",
	Udi: "0002",
	SiteId: "0001",
}

persistence.Set(context.Background(), "test", beacon)
item, _ := persistence.GetOneByUdi(context.Background(), "test", "0002")
persistence.Close(context.Background(), "test")
fmt.Println(item.Id)
```
