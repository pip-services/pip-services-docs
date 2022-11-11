
```ts
import { Descriptor, IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CloudFunction, CloudFunctionRequestHelper, CloudFunctionService } from "pip-services3-gcp-nodex";
import { HttpResponseSender } from "pip-services3-rpc-nodex";

export class MyCloudFunctionService extends CloudFunctionService {
    private _controller: MyController1;

    private _headers = {
        'Content-Type': 'application/json'
    };

    public constructor() {
        super("myservice");
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor("mygroup", "controller", "*", "controller1", "1.0"));
    }

    private async action(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._controller.greeting1(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction("greetings1", null, this.action);
    }
}

export class MyController1 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting1(name: string): Promise<string> {
        return "Greetings from service: Hello, " + name + " !";
    }
}

export class MyController2 implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting2(name: string): Promise<string> {
        return "Greetings from container: Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller1", "1.0"), MyController1);
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller2", "1.0"), MyController2);
        this.registerAsType(new Descriptor("mygroup", "service", "gcp-function", "*", "1.0"), MyCloudFunctionService)
    }
}

export class MyCloudFunction extends CloudFunction {
    private _controller: MyController2;

    public constructor() {
        super("mygroup", "Mygroup service");
        this._configPath = "./config.yaml";
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = references.getOneRequired(new Descriptor("mygroup", "controller", "*", "controller2", "1.0"));
    }

    private async action(req: Request, res: Response): Promise<void> {
        let params = CloudFunctionRequestHelper.getParameters(req);
        let name = params.getAsStringWithDefault('name', 'default name');

        let result = await this._controller.greeting2(name);

        HttpResponseSender.sendResult(req, res, result);
    }

    protected register(): void {
        this.registerAction('greetings2', null, this.action);
    }
}

```