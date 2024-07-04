
```ts
let config = ConfigParams.fromTuples(
	...
	"options.param1", "ABC",
	"options.param2", 123
);
let options = OptionsResolver.resolve(config); // Result: param1=ABC;param2=123


```
