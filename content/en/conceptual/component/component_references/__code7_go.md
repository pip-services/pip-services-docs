
```go
...

func (c *SimpleController) SetReferences(references crefer.IReferences) {
	c._worker, _ = references.GetOneRequired(crefer.NewDescriptor("*", "worker", "worker1", "*", "1.0"))
}

...

references := crefer.NewReferencesFromTuples(
	crefer.NewDescriptor("sample", "worker", "worker1", "111", "1.0"), mymodule.NewWorker1(""),
	crefer.NewDescriptor("sample", "worker", "worker2", "222", "1.0"), mymodule.NewWorker2(""),
)

controller := mymodule.NewSimpleController()
controller.SetReferences(references)
controller.Greeting("world")
controller.UnsetReferences()
controller = nil
```
