
```go
persistence := NewBeaconsMongoPersistence()
// ...

persistence.Open(context.Background())

beacon := data1.BeaconV1{
	Id:     "1",
	Udi:    "0002",
	SiteId: "0001",
}

persistence.Set(context.Background(), beacon)
item, _ := persistence.GetOneByUdi(context.Background(), "0002")
persistence.Close(context.Background())
fmt.Println(item.Id)
```
