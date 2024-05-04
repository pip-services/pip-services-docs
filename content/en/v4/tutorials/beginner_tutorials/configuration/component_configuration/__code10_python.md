
```python
from pip_services4_components.config import OptionsResolver

config = ConfigParams.from_tuples(
    #...
	"options.param1", "ABC",
	"options.param2", 123
)
options = OptionsResolver.resolve(config)   # Result: param1=ABC;param2=123
```
