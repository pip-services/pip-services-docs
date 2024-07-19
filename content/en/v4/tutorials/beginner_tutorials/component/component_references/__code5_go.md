
```go
references := crefer.NewReferencesFromTuples(context.Background(),
		111, mymodule.NewWorker1("worker1"),
		222, mymodule.NewWorker2("worker2"),
	)

	controller := mymodule.NewSimpleController()
	controller.SetReferences(context.Background(), references)
	controller.Greeting(context.Background(), "world")
	controller.UnsetReferences(context.Background())
	controller = nil
```
