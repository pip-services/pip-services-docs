
```ts
 /**
	 * Sets references to dependent components.
	 * 
	 * @param references 	references to locate the component dependencies. 
     */
    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._cachedCounters = this._dependencyResolver.getOneOptional<PrometheusCounters>("prometheus-counters");
        if (this._cachedCounters == null)
            this._cachedCounters = this._dependencyResolver.getOneOptional<CachedCounters>("cached-counters");

        let contextInfo = references.getOneOptional<ContextInfo>(
            new Descriptor("pip-services", "context-info", "default", "*", "1.0"));

        if (contextInfo != null && (this._source == "" || this._source == undefined)) {
            this._source = contextInfo.name;
        }
        if (contextInfo != null && (this._instance == "" || this._instance == undefined)) {
            this._instance = contextInfo.contextId;
        }
    }
```
