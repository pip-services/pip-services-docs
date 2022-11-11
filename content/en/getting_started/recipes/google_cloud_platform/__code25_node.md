
```ts
import { Descriptor, IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CloudFunction, CloudFunctionRequestHelper } from "pip-services3-gcp-nodex";
import { HttpResponseSender } from "pip-services3-rpc-nodex";

export class MyController1 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting1(name: string): Promise<string> {
        return "greetings1: Hello, " + name + " !";
    }
}

export class MyController2 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting2(name: string): Promise<string> {
        return "greetings2: Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller1", "1.0"), MyController1);
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller2", "1.0"), MyController2);
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller1: MyController1;
    private _controller2: MyController2;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = './config.yaml';
        this._dependencyResolver.put('controller1', new Descriptor('mygroup', 'controller', 'default', 'controller1', '*'))
        this._dependencyResolver.put('controller2', new Descriptor('mygroup', 'controller', 'default', 'controller2', '*'))
        this._factories.add(new MyFactory())
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller1 = this._dependencyResolver.getOneRequired('controller1');
        this._controller2 = this._dependencyResolver.getOneRequired('controller2');
    }

    private async action1(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._controller1.greeting1(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    private async action2(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._controller2.greeting2(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction("greetings1", null, this.action1);
        this.registerAction("greetings2", null, this.action2);
    }
}
```