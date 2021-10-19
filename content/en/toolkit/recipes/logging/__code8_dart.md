
```dart
import 'package:pip_services3_datadog/pip_services3_datadog.dart';

var logger = DataDogLogger();

logger.configure(ConfigParams.fromTuples([
    'credential.access_key', '827349874395872349875493']));

logger.setLevel(LogLevel.Debug);

logger.info('123', 'My message');

```
