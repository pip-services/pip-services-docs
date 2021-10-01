
```dart
abstract class IReferences {

  void put(locator, component);

  dynamic remove(locator);

  List removeAll(locator);

  List getAllLocators();

  List getAll();

  List<T> getOptional<T>(locator);

  List<T> getRequired<T>(locator);

  T getOneOptional<T>(locator);

  T getOneRequired<T>(locator);

  List<T> find<T>(locator, bool required);
}

```

