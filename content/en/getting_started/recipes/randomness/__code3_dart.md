
```ts
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  // Possible result: 2015-01-05 00:00:00
  var value1 = RandomDateTime.nextDate(DateTime(2010, 1, 1));

  // Possible result: 2012-01-03
  var value2 =
      RandomDateTime.nextDate(DateTime(2010, 1, 1), DateTime(2015, 1, 1));

  // Possible result: 2020-03-11 11:20:32
  var value3 = RandomDateTime.nextDate(DateTime(2017, 1, 1));

  // Possible result: 2010-01-02 00:00:01
  var value4 = RandomDateTime.updateDateTime(DateTime(2010, 1, 2), 50);
}

```
