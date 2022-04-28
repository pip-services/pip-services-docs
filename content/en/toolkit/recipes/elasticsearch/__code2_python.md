
```python
import time

class MyComponentA:

    start_time = time.time()
    _Elasticsearch_log = True
    
    def __init__(self, logger: ElasticSearchLogger):
        self._logger = logger

        if self._Elasticsearch_log:
            logger.info("123" , "MyComponentA has been created.")

    def mymethod(self):

        try:
            if self._Elasticsearch_log:
                print("Hola amigo")
                print("Bonjour mon ami")
                logger.info("123" , "Greetings created.")
        finally:
                logger.info("123" , "Finally reached.")
```
