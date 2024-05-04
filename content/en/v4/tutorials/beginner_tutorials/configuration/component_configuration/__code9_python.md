
See: [NameResolver](../../../toolkit_api/python/components/config/name_resolver/), [OptionsResolver](../../../toolkit_api/python/components/config/options_resolver/)

```python
from pip_services4_components.config import NameResolver

config = ConfigParams.from_tuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
)
name = NameResolver.resolve(config) # Result: connector1
```
