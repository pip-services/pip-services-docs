
```python
credential[0].add_section("sectionA", ConfigParams.from_tuples("key1", "ABCDE"))
# Returns
# {'username': 'user1',
# 'password': 'password1',
# 'store_key': 'store key1',
# 'access_key': 'access key 1',
# 'access_id': 'access id 1',
# 'sectionA.key1': 'ABCDE'}

```
