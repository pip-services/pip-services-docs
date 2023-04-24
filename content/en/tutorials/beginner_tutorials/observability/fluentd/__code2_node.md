
```ts
import { ConfigParams, Descriptor, IOpenable } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { FluentdLogger } from 'pip-services3-fluentd-nodex';



class MyComponent implements IConfigurable, IOpenable {
    private _logger = new FluentdLogger();

    public constructor(){
        this._logger.configure(ConfigParams.fromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", 24224
        ));
        this._logger.setLevel(5);
        this._logger.open("123");
        this._logger.info(null, "MyComponent has been created.666666");
        this._logger.debug("123", "Everything is OK.");

    }
    
    public configure(config: ConfigParams): void {

        this._logger.info(null, "MyComponent is configured.")
    }

    public open(correlationId: string): Promise<void> {
        this._logger.info(null, "MyComponent is open.");
        return null;
    }

    public close(correlationId: string): Promise<void> {
        this._logger.info(null, "MyComponent is closed.");
        // this._logger.close(null);
        return null;
    }


    public isOpen(): boolean {
        
        return true;
    }
    public myMethod(correlationId: string): void {
        // create an artificial problem
        try {
            throw Error('Logging demo. Error created');
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Error created.")
        }

    }


}
```
