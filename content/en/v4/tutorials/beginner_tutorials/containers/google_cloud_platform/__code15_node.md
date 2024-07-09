
```ts
export class MyCloudController extends CloudFunctionController {
    private _service: MyService;
    private _headers = {
        'Content-Type': 'application/json'
    }

    public constructor() {
        super();
        this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._service = this._dependencyResolver.getOneRequired('service');
    }

    protected register(): void {
        this.registerAction(
            'greetings',
            new ObjectSchema(true)
                .withRequiredProperty('body',
                    new ObjectSchema()
                        .withRequiredProperty('name', TypeCode.String)
                ),
            async (req: Request, res: Response) => {
                let params = CloudFunctionRequestHelper.getParameters(req);
                let name = params.getAsStringWithDefault('name', 'default name');

                let result = await this._service.greeting(name);

                for (let key of Object.keys(this._headers))
                    res.headers.append(key, this._headers[key]);
                
                HttpResponseSender.sendResult(req, res, result);
            }
        );
    }
}
```
