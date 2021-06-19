---
type: docs
title: "DataPage"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Data transfer object that is used to pass the results of a paginated query.
    This object contains items of the retrieved page.
---

### Description

The DataPage class allows you to create a data transfer object that can be used to pass the results of a paginated query. This object contains items of the retrieved page.

Important points

- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [PagingParams](../paging_params) object.
- The *skip* parameter in the PagingParams indicates how many items to skip.
- The *takes* parameter sets number of items to return in the page.
- An optional *total* paramter allows you to specify the total number of items returned from a request. However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.   

### Constructors

#### NewDataPage
Creates a new instance of data page and assigns its values.

> NewDataPage(total *int64, data []interface{}) [*DataPage]()

- **data**: *int64 - list of items from the retrieved page.
- **total**: []interface{} - total amount of items in a request.

#### NewEmptyDataPage
Creates a new empty instance of data page.

> NewEmptyDataPage() *DataPage

### Fields


<span class="hide-title-link">

#### Data
The items of the retrieved page.
> **Data**: *int64

#### Total
The total amount of items in a request.
> **Total**: []interface{}

</span>


### Examples

```go
err, page = myDataClient.GetDataByFilter(
    "123",
    FilterParams.NewFilterParamsFromTuples("completed": true),
        NewPagingParams(0, 100, true)
	};
 
	if err != nil {
		panic()
	}
	for item range page.Data {
        fmt.Println(item);
    }
);

```

### See also
- #### [PagingParams](../paging_params)
