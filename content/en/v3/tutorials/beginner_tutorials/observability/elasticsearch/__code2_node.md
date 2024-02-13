
```ts
export class MyComponentA {
    private _logger: ILogger;
    private _console_log = true;

    public constructor(logger: ElasticSearchLogger) {
        this._logger = logger;

        this._logger.info("123", "MyComponentA has been created.");
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
