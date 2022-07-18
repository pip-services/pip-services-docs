
```python
from pip_services3_commons.data.IStringIdentifiable import IStringIdentifiable


class MyData(IStringIdentifiable):

    def __init__(self, id: str = None, key: str = None, content: str = None):
        self.id = id
        self.key = key
        self.content = content

    def clone(self):
        return MyData(self.id, self.key, self.content)

    @staticmethod
    def to_dict(my_data: 'MyData') -> dict:
        if my_data is not None:
            return {'id': my_data.id, 'key': my_data.key, 'content': my_data.content}
```
