
```python
# "if else" construction
template3 = MustacheTemplate()
template3.template = "Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}{{{^EXCLAMATION}}}.{{{/EXCLAMATION}}}"
variables = {
    'NAME': 'Alex',
    'EXCLAMATION': False
}

result = template3.evaluate_with_variables(variables)
print(result)
```
