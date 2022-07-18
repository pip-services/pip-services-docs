
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

func (c *SimpleController) Configure(config *cconfig.ConfigParams) {
	c._depedencyResolver.Configure(config)
}

func (c *SimpleController) SetReferences(references crefer.IReferences) {
	c._depedencyResolver.SetReferences(references)
	c._worker, _ = c._depedencyResolver.GetOneRequired("worker")
}

func (c *SimpleController) UnsetReferences() {
	c._depedencyResolver = *crefer.NewDependencyResolver()
}

...

references := crefer.NewReferencesFromTuples(
	crefer.NewDescriptor("sample", "worker", "worker1", "111", "1.0"), mymodule.NewWorker1(""),
	crefer.NewDescriptor("sample", "worker", "worker2", "222", "1.0"), mymodule.NewWorker2(""),
)

config := cconfig.NewConfigParamsFromTuples(
	"dependencies.worker", "*:worker:worker1:111:1.0",
)

controller := mymodule.NewSimpleController()
controller.Configure(config)
controller.SetReferences(references)
controller.Greeting("world")
controller.UnsetReferences()
controller = nil
```
