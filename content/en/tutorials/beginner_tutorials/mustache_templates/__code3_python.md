
```python
# variable
template = MustacheTemplate()
template.template = "Hello, {{{NAME}}}"
variables = {
    'NAME': 'Alex',
}

result = template.evaluate_with_variables(variables)
print(result)
```
