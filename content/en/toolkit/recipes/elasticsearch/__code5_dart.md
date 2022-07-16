
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_elasticsearch/pip_services3_elasticsearch.dart';

void main(List<String> argument) async {
  var logger = ElasticSearchLogger();

  logger.configure(ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    9200
  ]));

  await logger.open('123');

  var mycomponent = MyComponentA(logger);
  for (var i = 0; i < 10; i++) {
    mycomponent.myMethod();
  }
}

class MyComponentA {
  ILogger _logger;
  bool _elasticsearch_log = true;

  MyComponentA(ElasticSearchLogger logger) : _logger = logger {
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
      _logger.info('123', 'Greetings created.');
    } finally {
      _logger.info('123', 'Finally reached.');
    }
  }
}
```
