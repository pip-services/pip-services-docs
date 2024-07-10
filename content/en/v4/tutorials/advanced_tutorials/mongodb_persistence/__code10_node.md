
```ts

private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();

    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null) {
        criteria.push({ _id: id });
    }

    let siteId = filter.getAsNullableString('site_id');
    if (siteId != null) {
        criteria.push({ site_id: siteId });
    }

    let label = filter.getAsNullableString('label');
    if (label != null) {
        criteria.push({ label: label });
    }

    let udi = filter.getAsNullableString('udi');
    if (udi != null) {
        criteria.push({ udi: udi });
    }

    let udis = filter.getAsObject('udis');
    if (typeof udis === "string") {
        udis = udis.split(',');
    }
    if (Array.isArray(udis)) {
        criteria.push({ udi: { $in: udis } });
    }

    return criteria.length > 0 ? { $and: criteria } : null;
}



```
