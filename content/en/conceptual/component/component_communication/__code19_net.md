
```cs
    /// <summary>
    /// Sets references to dependent components.
    /// </summary>
    /// <param name="references">references to locate the component dependencies.</param>
    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _cachedCounters = _dependencyResolver.GetOneOptional<PrometheusCounters>("prometheus-counters");

        var contextInfo = references.GetOneOptional<ContextInfo>(
            new Descriptor("pip-services3", "context-info", "default", "*", "1.0"));
            
        if (contextInfo != null && string.IsNullOrEmpty(_source))
            _source = contextInfo.Name;
        if (contextInfo != null && string.IsNullOrEmpty(_instance))
            _instance = contextInfo.ContextId;
        if (_cachedCounters == null)
            _cachedCounters = _dependencyResolver.GetOneOptional<CachedCounters>("cached-counters");
    }
```
