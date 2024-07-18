
```python
references = References.from_tuples(
    Descriptor('my-component', 'logger', 'console', 'default', '1.0'), elasticsearch_logger,
    Descriptor('my-component', 'logger', 'elasticsearch', 'default', '1.0'), console_logger
)
```
