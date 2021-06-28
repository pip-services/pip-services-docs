---
type: docs
title: "DataPage"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
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
- The *takes* parameter sets the number of items to return in the page.
- An optional *total* paramter allows you to specify the total number of items returned from a request. However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.   

### Constructors
Creates a new instance of data page and assigns its values.

> `public` DataPage(List\<T\> data, long? total = null)

- **data**: List\<T\> - list of items from the retrieved page.
- **total**: long - total amount of items in a request.


Creates a new instance of data page.

> `public` DataPage()



### Properties


#### Data
Items of the retrieved page.
> `public` List\<T\> Data { get; set; }

#### Total
Total amount of items in a request.
> `public` long Total { get; set; }



### Examples

```cs
myDataClient.GetDataByFilter(
    "123", 
    FilterParams.FromTuples("completed", true),
    new PagingParams(0, 100, true),
    async(DataPage<MyData> page) => {
    Console.WriteLine("Items: ");
    for (MyData item : page.getData()) {
        Console.WriteLine(item);
    }
    Console.WriteLine("Total items: " + page.getTotal());
    };
);

```

### See also
- #### [PagingParams](../paging_params)
