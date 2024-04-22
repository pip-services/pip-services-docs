
```python
from pip_services4_persistence.persistence import JsonFilePersister

# Create the JSON persistence component
persister = JsonFilePersister("data.json")

# Save data on the JSON persistence object
persister.save("123", ["A", "B", "C"])

# Read data from the JSON persistence object
items = persister.load("123")
print(items)

```
