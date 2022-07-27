
```dart
  /// Sets references to dependent components.
  ///
  /// - [references] 	references to locate the component dependencies.
  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _cachedCounters = dependencyResolver
        .getOneOptional<PrometheusCounters>('prometheus-counters');
    _cachedCounters ??=
        dependencyResolver.getOneOptional<CachedCounters>('cached-counters');

    var contextInfo = references.getOneOptional<ContextInfo>(
        Descriptor('pip-services', 'context-info', 'default', '*', '1.0'));

    if (contextInfo != null && (_source == '' || _source == null)) {
      _source = contextInfo.name;
    }
    if (contextInfo != null && (_instance == '' || _instance == null)) {
      _instance = contextInfo.contextId;
    }
  }
```
