
```dart
class MyComponentA {
  ILogger _logger;
  bool _elasticsearch_log = true;

     MyComponentA(ElasticSearchLogger logger): _logger = logger {
        if (_elasticsearch_log) {
          _logger.info('123', 'MyComponentA has been created.');
        }
    }

    void myMethod() {
        try {
            if (_elasticsearch_log) {
                print('Hola amigo');
                print('Bonjour mon ami');
            }
            _logger.info('123', 'Greetings created.')
        } finally {
            _logger.info('123', 'Finally reached.')
        }
    }
}
```
