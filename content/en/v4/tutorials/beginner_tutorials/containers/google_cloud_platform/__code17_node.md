
```ts
import { CloudFunctionController, CloudFunctionRequestHelper, CloudFunction } from "pip-services4-gcp-node";
import { TypeCode } from "pip-services4-commons-node";
import { ObjectSchema } from "pip-services4-data-node";
import { Descriptor, Factory, IReferenceable, IReferences, Context } from "pip-services4-components-node";
import { HttpResponseSender } from "pip-services4-http-node";

export class MyCloudController extends CloudFunctionController {
    private _service: MyService;
    private _headers = {
        'Content-Type': 'application/json'
    }

    public constructor() {
        super();
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'default', 'service', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'default', 'service', '1.0'))
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

export class MyService implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "serice", "default", "service", "1.0"), MyService);
        this.registerAsType(new Descriptor("mygroup", "controller", "gcp-function", "function", "1.0"), MyCloudController);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller: MyCloudController;
    private _service: MyService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor("mygroup", "controller", "gcp-function", "function", '*'))
        // this._dependencyResolver.put('service', new Descriptor(("mygroup", "serice", "default", "service", '*'))
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor("mygroup", "controller", "gcp-function", "function", '*'));
        this._service = references.getOneRequired(new Descriptor("mygroup", "serice", "default", "service", '*'));
    }
}

```
