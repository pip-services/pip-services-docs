See [PrometheusMetricsService](../../../toolkit_api/python/prometheus/controllers/prometheus_metrics_controller.md)

```python
 def set_references(self, references: IReferences):
        """
        Sets references to dependent components.
        :param references: references to locate the component dependencies.
        """
        super().set_references(references)

        self.__cached_counters = self._dependency_resolver.get_one_required('prometheus-counters')
        if self.__cached_counters is None:
            self.__cached_counters = self._dependency_resolver.get_one_required('cached-counters')

        context_info = references.get_one_required(Descriptor("pip-services", "context-info", "default", "*", "1.0"))

        if context_info is not None and (self.__source == '' or self.__source is None):
            self.__source = context_info.name

        if context_info is not None and (self.__instance == '' or self.__instance is None):
            self.__instance = context_info.context_id
```
