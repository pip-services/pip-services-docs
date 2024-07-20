
See: [IReferences](../../../toolkit_api/golang/commons/refer/ireferences/), [References](../../../toolkit_api/golang/commons/refer/references/)

```go
type IReferences interface {

	Put(ctx context.Context, locator any, component any)

	Remove(ctx context.Context, locator any) any

	RemoveAll(ctx context.Context, locator any) []any

	GetAllLocators() []any

	GetAll() []any

	GetOptional(locator any) []any

	GetRequired(locator any) ([]any, error)

	GetOneOptional(locator any) any

	GetOneRequired(locator any) (any, error)

	Find(locator any, required bool) ([]any, error)
}
```
