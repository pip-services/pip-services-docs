
```go
persistence := persist.NewBeaconsMongoDbPersistence()
// ...

persistence.Open("test")

beacon := &data1.BeaconV1{
	Id:  "1",
	Udi: "0002",
	SiteId: "0001",
}

persistence.Set("test", beacon)
item, _ := persistence.GetOneByUdi("test", "0002")
persistence.Close("test")
fmt.Println(item.Id)
```
