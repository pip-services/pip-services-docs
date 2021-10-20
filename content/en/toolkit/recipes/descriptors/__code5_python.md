
```python
locator1 = Descriptor("mygroup", "connector", "aws", "default", "1.0")
locator2 = Descriptor.from_string("mygroup:connector:*:*:1.0")

locator1.is_complete()   # returns True
locator2.is_complete()   # returns False

```
