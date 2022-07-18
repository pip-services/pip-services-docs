
```dart
import 'package:pip_services3_expressions/pip_services3_expressions.dart';

void main(List<String> arguments) {
  // "if else" construction
  var template = MustacheTemplate();
  template.template =
      'Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}{{{^EXCLAMATION}}}.{{{/EXCLAMATION}}}';
  var variables = {'NAME': 'Alex', 'EXCLAMATION': false};

  var result = template.evaluateWithVariables(variables);
  print(result);
}


```
