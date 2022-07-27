
```cs
public class DataController: IConfigurable
{
	int _maxPageSize = 5;

   	public void Configure(ConfigParams config)
   	{
		this._maxPageSize = config.GetAsIntegerWithDefault("max_page_size", this._maxPageSize);
   	}
		
   	public DataPage get_data(string correlationId, FilterParams filter, PagingParams paging)
   	{
		paging.Take = Math.Min(paging.Take, this._maxPageSize);
		// Get data using max page size constraint.
   	}
	        
}

```


