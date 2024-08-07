
```python
class MyComponentA:

    _console_log = True
    
    def __init__(self, logger: ElasticSearchLogger):
        self._logger = logger

        self._logger.info(ctx, "MyComponentA has been created.")

    def mymethod(self):

        try:
            if self._console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
            self._logger.info(ctx, "Greetings created.")
        finally:
                self._logger.info(ctx, "Finally reached.")
```
