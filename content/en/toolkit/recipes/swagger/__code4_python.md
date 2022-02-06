
```yaml
openapi: '3.0.2'
info:
  title: 'Friends Service'
  description: 'REST API from YAML file'
  version: '1'
paths:
  /hello_friend/greeting:
    get:
      tags:
        - hello_friend
      parameters:
        - in: query
          name: name
          schema:
            type: string
          required: true
      responses:
        201:
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: 'object'
```
