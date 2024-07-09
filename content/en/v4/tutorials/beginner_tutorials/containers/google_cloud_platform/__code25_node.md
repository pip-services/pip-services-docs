
```ts
import { CloudFunctionRequestHelper, CloudFunction } from "pip-services4-gcp-node";
import { Descriptor, Factory, IReferenceable, IReferences } from "pip-services4-components-node";
import { HttpResponseSender } from "pip-services4-http-node";

export class MyService1 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting1(name: string): Promise<string> {
        return "greetings1: Hello, " + name + " !";
    }
}

export class MyService2 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting2(name: string): Promise<string> {
        return "greetings2: Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service1", "1.0"), MyService1);
        this.registerAsType(new Descriptor("mygroup", "service", "default", "service2", "1.0"), MyService2);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _service1: MyService1;
    private _service2: MyService2;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = './config.yaml';
        this._dependencyResolver.put('service1', new Descriptor('mygroup', 'service', 'default', 'service1', '*'))
        this._dependencyResolver.put('service2', new Descriptor('mygroup', 'service', 'default', 'service2', '*'))
        this._factories.add(new MyFactory())
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._service1 = this._dependencyResolver.getOneRequired('service1');
        this._service2 = this._dependencyResolver.getOneRequired('service2');
    }

    private async action1(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._service1.greeting1(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    private async action2(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._service2.greeting2(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction("greetings1", null, this.action1);
        this.registerAction("greetings2", null, this.action2);
    }
}
```
