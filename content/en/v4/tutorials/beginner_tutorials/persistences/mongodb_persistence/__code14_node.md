
```ts
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];

        let key = filter.getAsNullableString('key');
        if (key != null)
            criteria.push({ key: key });

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    private composeSort(sort: SortParams): any {
        sort = sort || new SortParams();
        let sortCondition = {};

        for (let field of sort) {
            sortCondition[field.name] = field.ascending ? 1 : 0;
        }

        return sortCondition;
    }

```
