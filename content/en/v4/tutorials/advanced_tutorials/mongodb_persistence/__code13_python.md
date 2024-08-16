
```python
class BeaconsMongoDbPersistence(IdentifiableMongoDbPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMongoDbPersistence, self).__init__("beacons")
        self._max_page_size = 1000

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter if filter is not None else FilterParams()
        criteria = []

        id = filter.get_as_nullable_string("id")
        if id is not None:
            criteria.append({"id": id})
        site_id = filter.get_as_nullable_string("site_id")
        if site_id is not None:
            criteria.append({"site_id": site_id})
        label = filter.get_as_nullable_string("label")
        if label is not None:
            criteria.append({"label": label})
        udi = filter.get_as_nullable_string("udi")
        if udi is not None:
            criteria.append({"udi": udi})
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")
            criteria.append({"udi": {"$in": udis}})
        return {"$and": criteria} if len(criteria) > 0 else None

    def get_page_by_filter(self, context: IContext, filter: FilterParams, paging: PagingParams) -> T
        return get_page_by_filter(context, self.__compose_filter(filter), paging, None, None)

    def get_one_by_udi(self, context: Optional[IContext], udi: Any) -> T:

        item = self._collection.find_one({'udi': udi})

        if item is None:
            self._logger.trace(context, "Nothing found from %s with udi = %s", self._collection_name, udi)
        else:
            self._logger.trace(context, "Retrieved from %s with udi = %s", self._collection_name, udi)

        item = self._convert_to_public(item)

        return item


```
