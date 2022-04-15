
```python
from pip_services3_commons.config import ConfigParams

counters = DataDogCounters()
counters.configure(ConfigParams.from_tuples(
   "credential.access_key", "e1be2e70036b8f05f2777f5f038fc222"
))

counters.open('123')
```
