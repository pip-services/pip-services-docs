
```python
class MyComponentA():
    _param1 = 'ABC'
    _param2 = 123
    _open = False
    _status = None
    
    def __init__(self):
        """
        Creates a new instance of the component.
        """
        self._status = "Created"
        print("MyComponentA has been created.")  
```
