
```dart
class Descriptor {

  Descriptor(String group, String type, String kind, String name, String version) 

  String getGroup()

  String getType()

  String getKind()

  String getName()

  String getVersion()

  bool match(Descriptor descriptor)

  bool exactMatch(Descriptor descriptor)

  bool isComplete()

  bool equals(value)

  @override
  String toString()

  static Descriptor fromString(String value)
}


```

