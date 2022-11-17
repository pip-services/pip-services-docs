
```python
class MyFactory(Factory):

    def __init__(self):
        super().__init__()
        self.register_as_type(Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)
        self.register_as_type(Descriptor("mygroup", "service", "commandable-gcp-function", "function", "1.0"), MyCommandableloudService)

```