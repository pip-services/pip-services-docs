
```python
# conditional construction
template = MustacheTemplate()
template.template = "Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}"
variables = {
    'NAME': 'Alex',
    'EXCLAMATION': False
}

result = template.evaluate_with_variables(variables)
print(result)
```
