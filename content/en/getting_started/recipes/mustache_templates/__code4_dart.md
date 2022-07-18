
```dart
import 'package:pip_services3_expressions/pip_services3_expressions.dart';

void main(List<String> arguments) {
  // variable
  var template = MustacheTemplate();
  template.template = 'Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}';
  var variables = {'NAME': 'Alex', 'EXCLAMATION': '1'};

  var result = template.evaluateWithVariables(variables);
  print(result);
}

```
