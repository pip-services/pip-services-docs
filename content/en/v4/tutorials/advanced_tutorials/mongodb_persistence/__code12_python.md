
```python
 def get_one_by_udi(self, context: Optional[IContext], udi: Any) -> T:

    item = self._collection.find_one({'udi': udi})

    if item is None:
        self._logger.trace(context, "Nothing found from %s with udi = %s", self._collection_name, udi)
    else:
        self._logger.trace(context, "Retrieved from %s with udi = %s", self._collection_name, udi)

    item = self._convert_to_public(item)

    return item


```
