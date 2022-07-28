
See [PrometheusCounters](../../../toolkit_api/dart/prometheus/count/prometheus_counters.md)

```dart
  /// Sets references to dependent components.
  ///
  /// - [references] 	references to locate the component dependencies.
  @override
  void setReferences(IReferences references) {
    _logger.setReferences(references);
    _connectionResolver.setReferences(references);

    var contextInfo = references.getOneOptional<ContextInfo>(
        Descriptor('pip-services', 'context-info', 'default', '*', '1.0'));
    if (contextInfo != null && _source == null) {
      _source = contextInfo.name;
    }
    if (contextInfo != null && _instance == null) {
      _instance = contextInfo.contextId;
    }
  }
```
