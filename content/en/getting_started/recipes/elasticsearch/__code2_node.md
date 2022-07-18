
```ts
export class MyComponentA {
    private _logger: ILogger;
    private _elasticsearch_log = true;

    public constructor(logger: ElasticSearchLogger) {
        this._logger = logger;

        if (this._elasticsearch_log)
            this._logger.info("123", "MyComponentA has been created.");
    }

    public myMethod(): void {
        try {
            if (this._elasticsearch_log) {
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
