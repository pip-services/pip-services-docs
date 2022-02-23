
```ts
export class MyCommandableHttpClient extends CommandableHttpClient {
    public constructor(baseRoute: string) {
        super(baseRoute);
    }

    public async greeting(correlationId: string): Promise<string> {
        return await this.callCommand<string>("greeting", correlationId, { name: "Peter" });
    }
}

```
