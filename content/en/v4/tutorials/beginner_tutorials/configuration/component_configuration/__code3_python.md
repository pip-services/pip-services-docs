
```python
from datetime import datetime

param1 = config.get_as_integer("param1")
param2 = config.get_as_datetime_with_default("param2", datetime.now())
```
