
```ts
import { ElasticSearchLogger } from 'pip-services-elasticsearch-nodex';
import { ConfigParams, IConfigurable, IOpenable } from 'pip-services3-commons-nodex';

export class MyComponentA implements IConfigurable, IOpenable {
    private _logger: ElasticSearchLogger;
    private _console_log = true;

    public constructor(logger: ElasticSearchLogger) {
        this._logger = logger;

        this._logger.info("123", "MyComponentA has been created.");
    }

    public configure(config: ConfigParams): void {
        this._logger.configure(config);
    }

    public isOpen(): boolean {
        return this._logger.isOpen();
    }

    public async open(correlationId: string): Promise<void> {
        await this._logger.open(correlationId);
    }

    public async close(correlationId: string): Promise<void> {
        await this._logger.close(correlationId);
    }

    public myMethod(): void {
        try {
            if (this._console_log) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
            this._logger.info("123", "Greetings created.")
        } finally {
            this._logger.info("123", "Finally reached.")
        }
    }
}
```
