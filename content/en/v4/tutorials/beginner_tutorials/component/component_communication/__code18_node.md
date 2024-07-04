
```ts
/**
	 * Sets references to dependent components.
	 * 
	 * @param references 	references to locate the component dependencies. 
     */
    public setReferences(references: IReferences): void {
        this._logger.setReferences(references);
        this._connectionResolver.setReferences(references);

        let contextInfo = references.getOneOptional<ContextInfo>(
            new Descriptor("pip-services", "context-info", "default", "*", "1.0"));
        if (contextInfo != null && this._source == null) {
            this._source = contextInfo.name;
        }
        if (contextInfo != null && this._instance == null) {
            this._instance = contextInfo.contextId;
        }
    }
```
