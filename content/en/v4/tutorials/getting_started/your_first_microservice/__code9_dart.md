
**/bin/main.dart.**

```dart
import 'package:pip_quickstart/pip_quickstart.dart';

void main(List<String> argv) {
  try {
    var proc = HelloWorldProcess();
    proc.run(argv);
  } catch (ex) {
    print(ex);
  }
}

```

