
```dart
class MyComponentA implements IReferenceable {
  bool consoleLog = true; // console log flag
  CachedCounters? counters;

  MyComponentA() {
    if (consoleLog) print('MyComponentA has been created.');
  }

  @override
  void setReferences(IReferences references) {
    counters = references.getOneRequired<CachedCounters>(
        Descriptor('*', 'counters', '*', '*', '*'));
  }
}
```
