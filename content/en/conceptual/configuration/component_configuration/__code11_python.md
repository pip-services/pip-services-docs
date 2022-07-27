
```python
class IConfigReader(ABC):

    def read_config_(self, correlation_id: Optional[str], parameters: ConfigParams) -> ConfigParams:
        raise NotImplementedError('Method from interface definition')

```

