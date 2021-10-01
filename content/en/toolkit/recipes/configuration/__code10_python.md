
```python
config = ConfigParams.from_tuples(
    ...
	"options.param1", "ABC",
	"options.param2", 123
)
options = OptionsResolver.resolve(config)   # Result: param1=ABC;param2=123

```

