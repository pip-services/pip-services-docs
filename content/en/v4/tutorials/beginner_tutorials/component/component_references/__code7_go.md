
```go
///

func (c *SimpleController) SetReferences(ctx context.Context, references crefer.IReferences) {
	c._worker, _ = references.GetOneRequired(crefer.NewDescriptor("*", "worker", "worker1", "*", "1.0"))
}

///

references := crefer.NewReferencesFromTuples(context.Background(),
	crefer.NewDescriptor("sample", "worker", "worker1", "111", "1.0"), mymodule.NewWorker1(""),
	crefer.NewDescriptor("sample", "worker", "worker2", "222", "1.0"), mymodule.NewWorker2(""),
)

controller := mymodule.NewSimpleController()
controller.SetReferences(context.Background(), references)
controller.Greeting(context.Background(), "world")
controller.UnsetReferences(context.Background())
controller = nil
```
