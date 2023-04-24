
```python
# conditional construction
template = MustacheTemplate()
template.template = "Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}"
variables = {
    'NAME': 'Alex',
    'EXCLAMATION': '1'
}

result = template.evaluate_with_variables(variables)
print(result)
```
