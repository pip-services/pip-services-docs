
```python
 def __compose_filter(self, filter: FilterParams) -> Callable:
        filter = filter if filter is not None else FilterParams()

        id = filter.get_as_nullable_string("id")
        site_id = filter.get_as_nullable_string("site_id")
        label = filter.get_as_nullable_string("label")
        udi = filter.get_as_nullable_string("udi")
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")

        def filter_beacons(item):
            if id is not None and item.id != id:
                return False
            if site_id is not None and item.site_id != site_id:
                return False
            if label is not None and item.label != label:
                return False
            if udi is not None and item.udi != udi:
                return False
            if udis is not None and item.udi not in udis:
                return False
            return True

        return filter_beacons
```
