
```python
def my_task(self, context):
    # create an artificial problem        
    try:
        raise Exception('Logging demo', 'Error created')
    except Exception as inst:
        logger.error(context, inst, "Error created.")  
```
