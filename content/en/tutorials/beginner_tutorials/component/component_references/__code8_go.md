
See: [DependencyResolver](../../../toolkit_api/golang/commons/refer/dependency_resolver/)

```go
type DependencyResolver struct {
	dependencies map[string]interface{}
	references   IReferences
}

func NewDependencyResolver() *DependencyResolver {
	return &DependencyResolver{
		dependencies: map[string]interface{}{},
		references:   nil,
	}
}

func NewDependencyResolverWithParams(config *conf.ConfigParams, references IReferences) *DependencyResolver {
	c := NewDependencyResolver()

	if config != nil {
		c.Configure(context.Background(), config)
	}

	if references != nil {
		c.SetReferences(context.Background(), references)
	}

	return c
}

func (c *DependencyResolver) Configure(ctx context.Context, config *conf.ConfigParams) {
	dependencies := config.GetSection("dependencies")
	names := dependencies.Keys()
	for _, name := range names {
		locator := dependencies.Get(name)
		if locator == "" {
			continue
		}

		descriptor, err := ParseDescriptorFromString(locator)
		if err == nil {
			c.dependencies[name] = descriptor
		} else {
			c.dependencies[name] = locator
		}
	}
}

func (c *DependencyResolver) SetReferences(ctx context.Context, references IReferences) {
	c.references = references
}

func (c *DependencyResolver) Put(ctx context.Context, name string, locator interface{}) {
	c.dependencies[name] = locator
}

func (c *DependencyResolver) Locate(name string) interface{} {
	if name == "" {
		panic("Dependency name cannot be empty")
	}

	if c.references == nil {
		panic("References shall be set")
	}

	return c.dependencies[name]
}

func (c *DependencyResolver) GetOptional(name string) []interface{} {
	locator := c.Locate(name)
	if locator == nil {
		return []interface{}{}
	}
	return c.references.GetOptional(locator)
}

func (c *DependencyResolver) GetRequired(name string) ([]interface{}, error) {
	locator := c.Locate(name)
	if locator == nil {
		err := NewReferenceError("", name)
		return []interface{}{}, err
	}

	return c.references.GetRequired(locator)
}

func (c *DependencyResolver) GetOneOptional(name string) interface{} {
	locator := c.Locate(name)
	if locator == nil {
		return nil
	}
	return c.references.GetOneOptional(locator)
}

func (c *DependencyResolver) GetOneRequired(name string) (interface{}, error) {
	locator := c.Locate(name)
	if locator == nil {
		err := NewReferenceError("", name)
		return nil, err
	}
	return c.references.GetOneRequired(locator)
}

func (c *DependencyResolver) Find(name string, required bool) ([]interface{}, error) {
	if name == "" {
		panic("Name cannot be empty")
	}

	locator := c.Locate(name)
	if locator == nil {
		if required {
			err := NewReferenceError("", name)
			return []interface{}{}, err
		}
		return []interface{}{}, nil
	}

	return c.references.Find(locator, required)
}

func NewDependencyResolverFromTuples(tuples ...interface{}) *DependencyResolver {
	result := NewDependencyResolver()
	if len(tuples) == 0 {
		return result
	}

	for index := 0; index < len(tuples); index += 2 {
		if index+1 >= len(tuples) {
			break
		}

		name := convert.StringConverter.ToString(tuples[index])
		locator := tuples[index+1]

		result.Put(name, locator)
	}

	return result
}
```
