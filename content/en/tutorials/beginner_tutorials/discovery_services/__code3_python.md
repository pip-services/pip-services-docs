
```python
config = ConfigParams.from_tuples(
    "connections.key1.host", "10.1.1.100",
    "connections.key1.port", "8080",
    "connections.key2.host", "10.1.1.100",
    "connections.key2.port", "8082"
)

discovery = MemoryDiscovery()
discovery.configure(config)
``
