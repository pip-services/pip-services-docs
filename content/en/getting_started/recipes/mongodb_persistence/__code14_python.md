
```python
persistence = BeaconsMongoDbPersistence()

persistence.configure(ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test"
))

persistence.open(None)
beacon = BeaconV1(id="1", site_id="0001", udi="0002")

persistence.set("test", beacon)
item = persistence.get_one_by_udi("test", "0002")

print(item.udi)   # Result: 0002

items_page = persistence.get_page_by_filter("test", FilterParams.from_tuples("udi", "0002"), None)

print(len(items_page.data)) # Result: 1
print(items_page.data[0].udi)   # Result: 0002
persistence.close("test")


```
