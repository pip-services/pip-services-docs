
```ts
import { ConfigParams, Descriptor, ICleanable, IOpenable, IUnreferenceable } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { CompositeLogger, ConsoleLogger, Factory } from 'pip-services3-components-nodex';
import { ProcessContainer } from 'pip-services3-container-nodex';

export class MyComponentB implements IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable {
    private _param1: string = 'ABC2';
    private _param2: number = 456;
    private _opened:boolean = false;

    private _status: string;

    private _logger = new ConsoleLogger();
     

    /**
     * Creates a new instance of the component.
     */
    public constructor(){
        this._status = 'Created';
        this._logger.setLevel(5);
        this._logger.info(null, "MyComponentB has been configured.");

    }
    
    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault('param1', this._param1);
        this._param2 = config.getAsIntegerWithDefault('param2', this._param2);

        this._logger.info(null, "MyComponentB has been configured.")
    }

    public setReferences(refs: IReferences): void {
        // pass
    }

    public isOpen(): boolean {
        // pass
        return;
    }
    public open(correlationId: string): Promise<void> {
        // pass
        return;
    }
    public close(correlationId: string): Promise<void> {
        // pass
        return;
    }

    public myTask(correlationId: string): void {
        // create an artificial problem
        try {
            throw Error('Logging demo. Error created');
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Error created.")
        }

    }

    /**
     * Unsets (clears) previously set references to dependent components.
     */
    public unsetReferences(): void {
        // pass
    }

    /**
     * Clears component state.
     * @param correlationId (optional) transaction id to trace execution through call chain.
     */
    public clear(correlationId: string): Promise<void> {
        // pass
        return;
    }
}

export class MyComponentA implements IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable {
    private _param1: string = 'ABC';
    private _param2: number = 123;
    private _opened: boolean = false;

    private _status: string;

    private _another_component: MyComponentB;

    public dummy_variable = "resource variable";

    private _logger = new CompositeLogger();


    /**
     * Creates a new instance of the component.
     */
    public constructor() {
        this._status = 'Created';
        this._logger.setLevel(5);
        this._logger.info(null, "MyComponentA has been configured.");

    }

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault('param1', this._param1);
        this._param2 = config.getAsIntegerWithDefault('param2', this._param2);
        this._status = "Configured";

        this._logger.info(null, "MyComponentA has been configured.")
    }

    public setReferences(refs: IReferences): void {
        this._another_component = refs.getOneRequired(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        )
        this._status = "Configured"
        this._logger.setReferences(refs);

        this._logger.info(null, "MyComponentA's references have been defined.")
    }

    public isOpen(): boolean {
        return this._opened;
    }
    public open(correlationId: string): Promise<void> {
        this._opened = true;
        this._status = "Open";
        this._logger.info(correlationId, "MyComponentA has been opened.")
        // artificial problem
        this.myTask(correlationId);
        return;
    }
    public close(correlationId: string): Promise<void> {
        this._opened = false;
        this._status = "Closed";
        this._logger.info(correlationId, "MyComponentA has been closed.");
        return;
    }

    public myTask(correlationId: string): void {
        // create an artificial problem
        try {
            throw Error('Logging demo. Error created');
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Error created.")
        }

    }

    /**
     * Unsets (clears) previously set references to dependent components.
     */
    public unsetReferences(): void {
        this._another_component = null;
        this._status = "Un-referenced";
        this._logger.info(null, "References cleared");
    }

    /**
     * Clears component state.
     * @param correlationId (optional) transaction id to trace execution through call chain.
     */
    public clear(correlationId: string): Promise<void> {
        this.dummy_variable = null;
        this._status = null;
        this._logger.info(null, "Resources cleared");
        return;
    }
}


```
