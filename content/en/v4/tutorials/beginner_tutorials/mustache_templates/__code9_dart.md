
```dart
import 'package:pip_services3_expressions/pip_services3_expressions.dart';

void main(List<String> arguments) {
  // equivalent constructions
  var template = MustacheTemplate();
  template.template = 'Hello Mr, {{{NAME}}} {{{SURNAME}}}';
  var variables = {'NAME': 'Joe', 'SURNAME': 'Smith', 'EXCLAMATION': false};

  template.defaultVariables.addEntries(variables.entries);

  var result = template.evaluate();
  print(result);
}

```
