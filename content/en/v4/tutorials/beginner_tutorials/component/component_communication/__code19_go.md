
```go
// SetReferences is sets references to dependent components.
//
//	Parameters:
//		- ctx context.Context	operation context
//		- references cref.IReferences
//
// references to locate the component dependencies.
func (c *PrometheusMetricsController) SetReferences(ctx context.Context, references cref.IReferences) {
	c.RestController.SetReferences(ctx, references)

	resolv := c.DependencyResolver.GetOneOptional("prometheus-counters")
	c.cachedCounters = resolv.(*pcount.PrometheusCounters).CachedCounters
	if c.cachedCounters == nil {
		resolv = c.DependencyResolver.GetOneOptional("cached-counters")
		c.cachedCounters = resolv.(*ccount.CachedCounters)
	}
	ref := references.GetOneOptional(
		cref.NewDescriptor("pip-services", "context-info", "default", "*", "1.0"))
	contextInfo := ref.(*cctx.ContextInfo)

	if contextInfo != nil && c.source == "" {
		c.source = contextInfo.Name
	}
	if contextInfo != nil && c.instance == "" {
		c.instance = contextInfo.ContextId
	}
}
```
