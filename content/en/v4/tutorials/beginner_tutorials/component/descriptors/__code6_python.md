
```python
locator1 = Descriptor("mygroup", "connector", "aws", "default", "1.0")
locator2 = Descriptor.from_string("mygroup:connector:*:*:1.0")
locator3 = Descriptor.from_string("mygroup:connector:aws:default:1.0")

locator1.match(locator2)        # returns True
locator1.exact_match(locator2)  # returns False
locator1.equals(locator3)       # returns True
```
