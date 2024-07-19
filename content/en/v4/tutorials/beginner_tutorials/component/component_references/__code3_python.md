
```python
class Worker1:
    def __init(self, name):
        self._default_name = name or "Default name1"
  
    def do(self, level, message):
        print(f'Write to {self._default_name}.${level} message: ${message}')
  

class Worker2: 
	def __init(self, name):
         self._default_name = name or "Default name2"
  
	def do(self, level, message):
         print(f'Write to {self._default_name}.${level} message: ${message}')
```
