
```dart
import 'package:pip_services3_container/pip_services3_container.dart';


class MyDataProcess extends ProcessContainer
{
    MyDataProcess() : super('my_data', 'simple my data microservice')
    {
        factories.add(DefaultMyDataFactory());
        factories.add(DefaultGrpcFactory());
    }
}
```
