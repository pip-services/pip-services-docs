
**lib/src/container/FacadeProcess.dart**

```dart
import 'package:pip_facade_sample_dart/src/build/ClientFacadeFactory.dart';
import 'package:pip_facade_sample_dart/src/build/ServiceFacadeFactory.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import '../build/FacadeFactory.dart';

class FacadeProcess extends ProcessContainer {
  FacadeProcess() : super('pip-facades-example', 'Public facade for samples') {
    factories.add(ClientFacadeFactory());
    factories.add(ServiceFacadeFactory());
    factories.add(FacadeFactory());
    factories.add(DefaultRpcFactory());
    factories.add(DefaultMongoDbFactory());
  }
}
```
