
```ts
import { CloudFunctionRequestHelper, CloudFunction, CloudFunctionController } from "pip-services4-gcp-node";
import { Descriptor, Factory, IReferenceable, IReferences } from "pip-services4-components-node";
import { HttpResponseSender } from "pip-services4-http-node";

export class MyCloudFunctionController extends CloudFunctionController {
    private _service: MyService1;

    private _headers = {
        'Content-Type': 'application/json'
    };

    public constructor() {
        super("myservice");
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._service = references.getOneRequired(new Descriptor("mygroup", "service", "*", "service1", "1.0"));
    }

    private async action(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._service.greeting1(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction("greetings1", null, this.action);
    }
}

export class MyService1 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting1(name: string): Promise<string> {
        return "Greetings from service: Hello, " + name + " !";
    }
}

export class MyService2 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting2(name: string): Promise<string> {
        return "Greetings from container: Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service1", "1.0"), MyService1);
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service2", "1.0"), MyService2);
        this.registerAsType(new Descriptor("mygroup", "controller", "gcp-function", "*", "1.0"), MyCloudFunctionController)
    }
}

export class MyCloudFunction extends CloudFunction {
    private _service: MyService2;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._service = references.getOneRequired(new Descriptor("mygroup", "service", "*", "service2", "1.0"));
    }

    private async action(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._service.greeting2(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction('greetings2', null, this.action);
    }
}
```
