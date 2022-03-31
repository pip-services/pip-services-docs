
```go
// SetReferences method are sets references to dependent components.
// - references  cref.IReferences
// references to locate the component dependencies.
func (c *PrometheusCounters) SetReferences(references cref.IReferences) {
	c.logger.SetReferences(references)
	c.connectionResolver.SetReferences(references)
	ref := references.GetOneOptional(
		cref.NewDescriptor("pip-services", "context-info", "default", "*", "1.0"))
	contextInfo, _ := ref.(*cinfo.ContextInfo)
	if contextInfo != nil && c.source == "" {
		c.source = contextInfo.Name
	}
	if contextInfo != nil && c.instance == "" {
		c.instance = contextInfo.ContextId
	}
}
```
