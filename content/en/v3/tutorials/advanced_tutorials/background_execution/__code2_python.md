
```python
def perform_analysis(self, correlation_id):

    key = ImageBatchProcessor.__name__
    if not Lock.try_acquire_lock(correlation_id, key, Parameters.get_as_integer("interval")):
 	    return
   
    ... # Long running tasks
    Lock.release_lock(correlation_id, key)

```

