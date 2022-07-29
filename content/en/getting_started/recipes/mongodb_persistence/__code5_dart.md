
And add the [DefaultMongoDbFactory](../../../toolkit_api/dart/mongodb/build/default_mongodb_factory/) to the microservice's ProcessContainer:

```dart
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import '../build/BeaconsServiceFactory.dart';

class BeaconsProcess extends ProcessContainer {
  BeaconsProcess() : super('beacons', 'Beacons microservice') {
    factories.add(BeaconsServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}

```

