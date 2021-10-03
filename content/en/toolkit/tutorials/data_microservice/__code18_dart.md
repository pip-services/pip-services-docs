
**/src/build/BeaconsServiceFactory.dart**

```dart
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../persistence/BeaconsMemoryPersistence.dart';
import '../persistence/BeaconsFilePersistence.dart';
import '../persistence/BeaconsMongoDbPersistence.dart';
import '../logic/BeaconsController.dart';
import '../services/version1/BeaconsCommandableHttpServiceV1.dart';

class BeaconsServiceFactory extends Factory {
  static final MemoryPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
  static final FilePersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'file', '*', '1.0');
  static final MongoDbPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
  static final ControllerDescriptor =
      Descriptor('beacons', 'controller', 'default', '*', '1.0');
  static final CommandableHttpServiceV1Descriptor =
      Descriptor('beacons', 'service', 'commandable-http', '*', '1.0');
  
  BeaconsServiceFactory() : super() {
    registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor,
        BeaconsMemoryPersistence);
    registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor,
        BeaconsFilePersistence);
    registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor,
        BeaconsMongoDbPersistence);
    registerAsType(
        BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
    registerAsType(BeaconsServiceFactory.CommandableHttpServiceV1Descriptor,
        BeaconsCommandableHttpServiceV1);
    
  }
}
```

