---
type: docs
title: "DataPage<T>"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Data transfer object that is used to pass the results of a paginated query.
    This object contains items of the retrieved page.
---

### Description

The DataPage class allows you to create a data transfer object that can be used to pass the results of a paginated query. This object contains items of the retrieved page.

**Important points**

- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [PagingParams](../paging_params) object.
- The *skip* parameter in the PagingParams indicates how many items to skip.
- The *takes* parameter sets number of items to return in the page.
- An optional *total* paramter allows you to specify the total number of items returned from a request. However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.   

### Constructors
Creates a new instance of DataPage and assigns its values.

> `public` DataPage(List<T> data, Long total)

- **data**: List<T> - list of items from the retrieved page.
- **total**: Long - total amount of items in a request.

### Fields


<span class="hide-title-link">

#### data
Items of the retrieved page.
> `private` **_data**: T[]

#### total
Total amount of items in a request.
> `private` Long **_total**

</span>
### Instance methods

#### getTotal
Total.

> `public` Long getTotal()

- **returns**: Long - total.

#### SetTotal
Total.

> `public` setTotal(Long value)

- **value**: Long - total.

#### getData
Data.

> `public` List<T> getData() 

- **returns**: List<T> - data.

#### SetData
Data.

> `public` setData(List<T> value)

- **value**: List<T> - total.  

### Examples

```java
{
  myDataClient.getDataByFilter(
    "123",
    FilterParams.fromTuples("completed", true),
    new PagingParams(0, 100, true),
    (DataPage<MyData> page) -> {
        System.out.println("Items: ");
        for (MyData item : page.getData()) {
          System.out.println(item);
        }
        System.out.println("Total items: " + page.getTotal());
    };
  );
  }

```

### See also
- #### [PagingParams](../paging_params)
