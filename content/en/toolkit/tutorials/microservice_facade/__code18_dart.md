
**/bin/main.go**

```dart
import 'package:pip_facade_sample_dart/pip_facade_sample_dart.dart';

void main(List<String> argument) {
  try {
    var proc = FacadeProcess();
    proc.configPath = './config/config.yml';
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}

```
