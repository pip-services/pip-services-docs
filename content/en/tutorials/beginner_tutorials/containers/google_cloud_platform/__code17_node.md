
```ts
import { Descriptor, IReferenceable, IReferences, ObjectSchema, TypeCode } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CloudFunction, CloudFunctionRequestHelper, CloudFunctionService } from "pip-services3-gcp-nodex";
import { HttpResponseSender } from "pip-services3-rpc-nodex";

export class MyCloudService extends CloudFunctionService {
    private _controller: MyController;
    private _headers = {
        'Content-Type': 'application/json'
    }

    public constructor() {
        super();
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '1.0'))
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

export class MyController implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController);
        this.registerAsType(new Descriptor("mygroup", "service", "gcp-function", "function", "1.0"), MyCloudService);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller: MyController;
    private _service: MyCloudService;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        // this._dependencyResolver.put('service', new Descriptor('mygroup', 'service', 'gcp-function', 'function', '*'))
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
        // this._controller = this._dependencyResolver.getOneRequired('controller');
        // this._service = this._dependencyResolver.getOneRequired('service');
        // Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
        this._service = references.getOneRequired(new Descriptor('mygroup', 'service', 'gcp-function', 'function', '*'));
    }
}

```