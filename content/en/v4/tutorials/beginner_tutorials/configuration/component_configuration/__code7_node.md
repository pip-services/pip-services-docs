
```ts
export class DataController implements IConfigurable {
    private _max_page_size: number = 5;
    public constructor() { }

    public configure(config: ConfigParams): void {
     this._max_page_size = config.getAsIntegerWithDefault('max_page_size', this._max_page_size);
    }

    public getData(ctx: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
     paging.take = Math.min(paging.take, this._max_page_size);  
          // Get data using max page size constraint.
    }
}
```
