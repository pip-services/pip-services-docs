
```yaml
openapi: '3.0.2'
info:
  title: 'Friends Service'
  description: 'Commandable REST API from YAM file'
  version: '1'
paths:
  /commandable_hello_friend/greeting:
    post:
      tags:
        - commandable_hello_friend
      requestBody:
        required: true
        description: Friend name
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string

      responses:
        201:
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: 'object'
```
