
```dart
class DependencyResolver implements IReferenceable, IReconfigurable {

  DependencyResolver([ConfigParams config, IReferences references])

  @override
  void configure(ConfigParams config)

  @override
  void setReferences(IReferences references)

  void put(String name, locator)

  dynamic locate(String name)

  List<T> getOptional<T>(String name)

  List<T> getRequired<T>(String name)

  T getOneOptional<T>(String name)

  T getOneRequired<T>(String name)

  List<T> find<T>(String name, bool required)

  static DependencyResolver fromTuples(List tuples)
}

```

