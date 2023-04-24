
```ts
type MyFriend struct {
	Id   string `bson:"_id" json:"id"`
	Type string `bson:"type" json:"type"`
	Name string `bson:"name" json:"name"`
}

func (d *MyFriend) SetId(id string) {
	d.Id = id
}

func (d MyFriend) GetId() string {
	return d.Id
}

func (d MyFriend) Clone() MyFriend {
	return MyFriend{
		Id:   d.Id,
		Type: d.Type,
		Name: d.Name,
	}
}

```
