
```python
locator = Descriptor("mygroup", "connector", "aws", "default", "1.0")

locator.get_group()   # returns "my_group"
locator.get_kind()    # returns "aws"
locator.get_name()    # returns "default"
locator.get_version() # returns "1.0"

```
