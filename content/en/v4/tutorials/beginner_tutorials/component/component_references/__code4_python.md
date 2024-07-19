
See: [IUnreferenceable](../../../toolkit_api/python/components/refer/iunreferenceable/)

```python
class SimpleController(IReferenceable, IUnreferenceable):
  
  def set_references(self, references):
    self._worker = self._references.get_one_required(111)
  
  def unset_references(self):
    self._worker = None
  
  def greeting(self, name):
    self._worker.do(LogLevel.Info,  "Hello, " + (name) + "!")
  

```

