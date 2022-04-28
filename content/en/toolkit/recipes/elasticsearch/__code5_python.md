
```python
from pip_services3_elasticsearch.log import ElasticSearchLogger
from pip_services3_commons.run import IOpenable
from pip_services3_commons.config import IConfigurable, ConfigParams
from typing import Optional
import time

class MyComponentA(IConfigurable, IOpenable):

    start_time = time.time()
    _Elasticsearch_log = True
    
    def __init__(self):
        self._logger = ElasticSearchLogger()

        if self._Elasticsearch_log:
            self._logger.info("123" , "MyComponentA has been created.")

    def configure(self, config: ConfigParams):
        self._logger.configure(config)
        
    def open(self, correlation_id: Optional[str]):
        self._logger.open(correlation_id)
       
    def close(self, correlation_id: Optional[str]):
        self._logger.close(correlation_id)
        
    def mymethod(self):

        try:
            if self._Elasticsearch_log:
                print("Hola amigo")
                print("Bonjour mon ami")
                self._logger.info("123" , "Greetings created.")
        finally:
                self._logger.info("123" , "Finally reached.")
```
