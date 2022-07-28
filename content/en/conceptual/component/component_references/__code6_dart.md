
See: [Descriptor](../../../toolkit_api/dart/commons/refer/descriptor/)

```dart
class Descriptor {
  String? _group;
  String? _type;
  String? _kind;
  String? _name;
  String? _version;

  Descriptor(String? group, String? type, String? kind, String? name, String? version)

  String? getGroup()

  String? getType()

  String? getKind()

  String? getName()

  String? getVersion()

  bool match(Descriptor descriptor)

  bool _exactMatchField(String? field1, String? field2)

  bool exactMatch(Descriptor descriptor)

  bool isComplete()

  bool equals(value)

  @override
  String toString()

  static Descriptor? fromString(String? value)
}

```

