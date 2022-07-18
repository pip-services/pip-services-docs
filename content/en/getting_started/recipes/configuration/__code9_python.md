
```python
config = ConfigParams.from_tuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
)
name = NameResolver.resolve(config) # Result: connector1


```

