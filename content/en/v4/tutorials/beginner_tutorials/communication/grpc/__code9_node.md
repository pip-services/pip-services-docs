
```ts
export class MyGrpcController extends GrpcController {

    public constructor() {
        super(services.SummatorService);
    }

    private async sum(call: any): Promise<any> {
        let res = Calculations.sum(call.request.getValue1(), call.request.getValue2());

        let response = new messages.Number2();
        response.setValue(res);

        return response;
    }


    public register(): void {
        this.registerMethod(
            "sum",
            null,
            this.sum
        );
    }
}
```
