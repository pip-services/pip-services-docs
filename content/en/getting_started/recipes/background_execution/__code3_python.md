
```python

def open(self, correlation_id):
   self._message_queue.begin_listen(correlation_id, self.perform_analysis)


def perform_analysis(self, correlation_id):
   ... # Long running tasks

```

