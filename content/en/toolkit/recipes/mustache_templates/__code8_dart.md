
```dart
import 'package:pip_services3_expressions/pip_services3_expressions.dart';

void main(List<String> arguments) {
  // equivalent constructions
  var template = MustacheTemplate();
  template.template =
      'Hello, {{{NAME}}}{{{#unless EXCLAMATION}}}.{{{/unless}}}';
  var variables = {'NAME': 'Alex', 'EXCLAMATION': '1'};

  var result = template.evaluateWithVariables(variables);
  print(result);
}


```
