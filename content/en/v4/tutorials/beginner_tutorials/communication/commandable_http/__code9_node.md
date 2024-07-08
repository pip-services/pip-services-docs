
```ts
export class MyCommandableHttpClient extends CommandableHttpClient {
    public constructor(baseRoute: string) {
        super(baseRoute);
    }

    public async greeting(ctx: Context): Promise<string> {
        return await this.callCommand<string>("greeting", ctx, { name: "Peter" });
    }
}
```
