
```python
class MyController(IReferenceable):
    def __init__(self):
        super().__init__()

    def set_references(self, references):
        pass
    
    def greetings(self, name: str):
        return f"Hello, {name} !"


```