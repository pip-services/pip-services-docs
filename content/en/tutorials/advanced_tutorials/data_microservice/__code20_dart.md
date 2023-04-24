
**/bin/run.dart**

```dart
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

void main(List<String> argument) {
  try {
    var proc = BeaconsProcess();
    proc.configPath = './config/config.yml';
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}

```
