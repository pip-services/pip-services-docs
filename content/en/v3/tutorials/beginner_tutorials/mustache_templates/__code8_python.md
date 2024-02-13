
```python
# equivalent constructions
template = MustacheTemplate()
template.template = "Hello, {{{NAME}}}{{{#unless EXCLAMATION}}}.{{{/unless}}}"
variables = {
    'NAME': 'Alex',
    'EXCLAMATION': True    
}

result = template.evaluate_with_variables(variables)
print(result)
```
