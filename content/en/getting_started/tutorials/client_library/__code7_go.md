
```go
package data1

import (
	rand "github.com/pip-services3-gox/pip-services3-commons-gox/random"
)

type RandomBeaconV1 struct {
}

func NextBeaconType() string {
	return rand.RandomArray.Pick([]string{AltBeacon, EddyStoneUdi, Unknown, IBeacon}).(string)
}

func NextBeaconCenter() GeoPointV1 {
	return GeoPointV1{
		Type:        "Point",
		Coordinates: [][]float32{{rand.RandomFloat.NextFloat(1, 1000), rand.RandomFloat.NextFloat(1, 1000)}},
	}
}

func NextBeacon() *BeaconV1 {
	return &BeaconV1{
		Type:   NextBeaconType(),
		Radius: rand.RandomFloat.NextFloat(1, 1000),
		Udi:    rand.RandomArray.Pick([]string{"00001", "00002", "00003", "00004"}).(string),
		Center: NextBeaconCenter(),
	}

}

```

