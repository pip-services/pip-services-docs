
```ts
import { ElasticSearchLogger } from 'pip-services4-elasticsearch-node';
import { ILogger } from 'pip-services4-observability-node';
import { Context } from 'pip-services4-components-node';

export class MyComponentA {
    private _logger: ILogger;
    private _console_log = true;

    public constructor(ctx: Context, logger: ElasticSearchLogger) {
        this._logger = logger;

        this._logger.info(ctx, "MyComponentA has been created.");
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
