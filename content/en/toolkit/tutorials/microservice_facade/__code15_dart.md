
**lib/src//build/FacadeFactory.dart**

```dart
pimport 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../services/version1/FacadeServiceV1.dart';

class FacadeFactory extends Factory {
  static final FacadeServiceV1Descriptor =
      Descriptor('pip-facades-example', 'service', 'http', '*', '1.0');

  FacadeFactory() : super() {
    registerAsType(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1);
  }
}

```
