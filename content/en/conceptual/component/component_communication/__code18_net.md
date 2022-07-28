
See [PrometheusCounters](../../../toolkit_api/net/prometheus/count/prometheus_counters.md)

```cs
    /// <summary>
    /// Sets references to dependent components.
    /// </summary>
    /// <param name="references">references to locate the component dependencies.</param>
    public virtual void SetReferences(IReferences references)
    {
        _logger.SetReferences(references);
        _connectionResolver.SetReferences(references);

        var contextInfo = references.GetOneOptional<ContextInfo>(
            new Descriptor("pip-services3", "context-info", "default", "*", "1.0"));
            
        if (contextInfo != null && string.IsNullOrEmpty(_source))
            _source = contextInfo.Name;
        if (contextInfo != null && string.IsNullOrEmpty(_instance))
            _instance = contextInfo.ContextId;
    }
```
