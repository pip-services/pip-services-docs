
```go
func (c *MyMongoDbPersistence) composeFilter(filter *cquery.FilterParams) bson.M {
	if &filter == nil || filter == nil {
		filter = cquery.NewEmptyFilterParams()
	}

	key, _ := filter.GetAsNullableString("key")
	var filterObj bson.M
	if key != "" {
		filterObj = bson.M{"key": key}
	} else {
		filterObj = bson.M{}
	}

	return filterObj
}

func (c *MyMongoDbPersistence) composeSort(sort *cquery.SortParams) bson.M {
	if &sort == nil || sort == nil {
		sort = cquery.NewEmptySortParams()
	}

	sortObj := bson.M{}

	for _, field := range *sort {
		if field.Ascending {
			sortObj[field.Name] = 1
		} else {
			sortObj[field.Name] = -1
		}

	}

	return sortObj
}
```
