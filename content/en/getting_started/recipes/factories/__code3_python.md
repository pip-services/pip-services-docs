
```python
factory = Factory()

factory.register_as_type(Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1)

component1 = factory.create(Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
```
