
```python
persistence = BeaconsMongoDbPersistence()
# ...

persistence.open("test")

beacon = BeaconV1(id="1", site_id="0001", udi="0002")

persistence.set("test", beacon)
item = persistence.get_one_by_udi("test", "1")
persistence.close("test")
print(item) 
```
