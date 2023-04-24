
```python
def my_task(self, correlation_id):
    # create an artificial problem        
    try:
        raise Exception('Logging demo', 'Error created')
    except Exception as inst:
        logger.error(correlation_id, inst, "Error created.")  
```
