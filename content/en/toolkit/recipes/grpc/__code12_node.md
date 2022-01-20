
```ts
export class MyGrpcClient extends GrpcClient {
    public constructor() {
        super(services.SummatorClient);
    }

    public async getData(correlationId: string, value1: number, value2: number): Promise<number> {
        let request = new messages.Number1();
        request.setValue1(value1);
        request.setValue2(value2);

        let res = await this.call<any>("sum", correlationId, request);

        return res.getValue();
    }
}
```
