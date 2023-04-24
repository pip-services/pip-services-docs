
```ts
export class MyCloudService extends CloudFunctionService {
    private _controller: MyController;
    private _headers = {
        'Content-Type': 'application/json'
    }

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
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

                let result = await this._controller.greeting(name);

                for (let key of Object.keys(this._headers))
                    res.headers.append(key, this._headers[key]);
                
                HttpResponseSender.sendResult(req, res, result);
            } 
        );
    } 
}

```