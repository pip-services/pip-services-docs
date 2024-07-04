
```ts
import { ElasticSearchLogger } from 'pip-services4-elasticsearch-node';
import { ConfigParams, Context, IConfigurable, IOpenable } from 'pip-services4-components-node';

export class MyComponentA implements IConfigurable, IOpenable {
    private _logger: ElasticSearchLogger;
    private _console_log = true;

    public constructor(ctx: Context, logger: ElasticSearchLogger) {
        this._logger = logger;

        this._logger.info(ctx, "MyComponentA has been created.");
    }

    public configure(config: ConfigParams): void {
        this._logger.configure(config);
    }

    public isOpen(): boolean {
        return this._logger.isOpen();
    }

    public async open(ctx: Context): Promise<void> {
        await this._logger.open(ctx);
    }

    public async close(ctx: Context): Promise<void> {
        await this._logger.close(ctx);
    }

    public myMethod(ctx: Context): void {
        try {
            if (this._console_log) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
            this._logger.info(ctx, "Greetings created.")
        } finally {
            this._logger.info(ctx, "Finally reached.")
        }
    }
}
```
