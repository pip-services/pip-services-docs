
```ts
const restify = require('restify-clients');

export async function main() { 
    let url = 'http://localhost:8080';
    let rest = restify.createJsonClient({ url: url, version: '*' });

    let data = await new Promise<string>((resolve, reject) => {
        rest.post('/commandable_hello_friend/greeting',
            {name: "Peter"},
            (err, req, res, data) => {
                if (err != null) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
    });

    console.log(data);
}

```
