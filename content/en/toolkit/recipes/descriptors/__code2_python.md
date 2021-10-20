
```python
# Locate all connectors (match by type)
locator = Descriptor.from_string("*:connector:*:*:*") 

# Locate all connectors for a specific microservice (match by group and type)
locator = Descriptor.from_string("mygroup:connector:*:*:*") 

# Locate a specific component (match by name)
locator = Descriptor.from_string("*:*:*:my_name:*") 

```
