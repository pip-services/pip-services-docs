
```go
package data1

type BeaconV1 struct {
	Id     string     `json:"id" bson:"_id"`
	SiteId string     `json:"site_id" bson:"site_id"`
	Type   string     `json:"type" bson:"type"`
	Udi    string     `json:"udi" bson:"udi"`
	Label  string     `json:"label" bson:"label"`
	Center GeoPointV1 `json:"center" bson:"center"` // GeoJson
	Radius float32    `json:"radius" bson:"radius"`
}

func (b BeaconV1) Clone() BeaconV1 {
	return BeaconV1{
		Id:     b.Id,
		SiteId: b.SiteId,
		Type:   b.Type,
		Udi:    b.Udi,
		Label:  b.Label,
		Center: b.Center.Clone(),
		Radius: b.Radius,
	}
}


```
