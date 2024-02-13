
```python
class MyController(IReferenceable):

    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass

    def greeting(self, name):
        return f"Hello, {name} !"

```