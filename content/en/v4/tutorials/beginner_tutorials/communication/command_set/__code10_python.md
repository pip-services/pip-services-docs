
```python
class MyEventSet(CommandSet):
    _service = None
    _event = None
    def __init__(self, service):
        super(MyEventSet, self).__init__()
        self.add_events([self._event2(),self._event3()])
    
    def _event2(self):
        return Event("event2")
        
    def _event3(self):
        return Event("event3")
```
