
```go
type SimpleController struct {
	_worker            interface{}
	_depedencyResolver crefer.DependencyResolver
}

func NewSimpleController() *SimpleController {
	return &SimpleController{_depedencyResolver: *crefer.NewDependencyResolverFromTuples(
		"worker", crefer.NewDescriptor("*", "worker", "*", "*", "1.0"),
	)}
}

func (c *SimpleController) Configure(ctx context.Context, config *cconfig.ConfigParams) {
	c._depedencyResolver.Configure(ctx, config)
}

func (c *SimpleController) SetReferences(ctx, references crefer.IReferences) {
	c._depedencyResolver.SetReferences(ctx, references)
	c._worker, _ = c._depedencyResolver.GetOneRequired("worker")
}

func (c *SimpleController) UnsetReferences(ctx) {
	c._depedencyResolver = *crefer.NewDependencyResolver()
}

...

references := crefer.NewReferencesFromTuples(context.Background(),
	crefer.NewDescriptor("sample", "worker", "worker1", "111", "1.0"), mymodule.NewWorker1(""),
	crefer.NewDescriptor("sample", "worker", "worker2", "222", "1.0"), mymodule.NewWorker2(""),
)

config := cconfig.NewConfigParamsFromTuples(
	"dependencies.worker", "*:worker:worker1:111:1.0",
)

controller := mymodule.NewSimpleController()
controller.Configure(context.Background(),config)
controller.SetReferences(context.Background(),references)
controller.Greeting(context.Background(),"world")
controller.UnsetReferences(context.Background())
controller = nil
```
