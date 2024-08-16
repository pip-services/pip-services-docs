
```go
func (c *BeaconsMongoDbPersistence) composeFilter(filter *cquery.FilterParams) interface{} {
	if filter == nil {
		filter = cquery.NewEmptyFilterParams()
	}

	criteria := make([]bson.M, 0, 0)

	id := filter.GetAsString("id")
	if id != "" {
		criteria = append(criteria, bson.M{"_id": id})
	}

	siteId := filter.GetAsString("site_id")
	if siteId != "" {
		criteria = append(criteria, bson.M{"site_id": siteId})
	}
	label := filter.GetAsString("label")
	if label != "" {
		criteria = append(criteria, bson.M{"label": label})
	}
	udi := filter.GetAsString("udi")
	if udi != "" {
		criteria = append(criteria, bson.M{"udi": udi})
	}

	udis := filter.GetAsString("udis")
	var arrUdis []string = make([]string, 0, 0)
	if udis != "" {
		arrUdis = strings.Split(udis, ",")
		if len(arrUdis) > 1 {
			criteria = append(criteria, bson.M{"udi": bson.D{{"$in", arrUdis}}})
		}
	}
	if len(criteria) > 0 {
		return bson.D{{"$and", criteria}}
	}
	return bson.M{}
}
```
