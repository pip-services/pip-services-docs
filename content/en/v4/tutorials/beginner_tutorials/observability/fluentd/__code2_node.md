
```ts
import { ConfigParams, IConfigurable, IOpenable, Context } from "pip-services4-components-node";
import { FluentdLogger } from 'pip-services4-fluentd-node';

class MyComponent implements IConfigurable, IOpenable {
    private _logger = new FluentdLogger();

    public constructor(){
        this._logger.configure(ConfigParams.fromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", 24224
        ));
        this._logger.setLevel(5);
        this._logger.open(null);
        this._logger.info(null, "MyComponent has been created.666666");
        this._logger.debug(null, "Everything is OK.");

    }
    
    public configure(config: ConfigParams): void {

        this._logger.info(null, "MyComponent is configured.")
    }

    public open(ctx: Context): Promise<void> {
        this._logger.info(ctx, "MyComponent is open.");
        return null;
    }

    public close(ctx: Context): Promise<void> {
        this._logger.info(ctx, "MyComponent is closed.");
        // this._logger.close(null);
        return null;
    }


    public isOpen(): boolean {
        
        return true;
    }
    public myMethod(ctx: Context): void {
        // create an artificial problem
        try {
            throw Error('Logging demo. Error created');
        }
        catch (ex) {
            this._logger.error(ctx, ex, "Error created.")
        }

    }
}
```
