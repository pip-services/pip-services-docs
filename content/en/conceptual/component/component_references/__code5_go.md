
```go
references := crefer.NewReferencesFromTuples(
	111, mymodule.NewWorker1("worker1"),
	222, mymodule.NewWorker2("worker2"),
)

controller := mymodule.NewSimpleController()
controller.SetReferences(references)
controller.Greeting("world")
controller.UnsetReferences()
controller = nil
```
