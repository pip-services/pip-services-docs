
```ts
import { DataDogLogger  } from 'pip-services4-datadog-node';
import { ConfigParams, Context, IConfigurable, IOpenable } from 'pip-services4-components-node';

class MyComponentA implements IConfigurable, IOpenable {
    private dataDogLog = true;

    protected logger: DataDogLogger;

    public constructor(ctx: Context, logger: DataDogLogger) {
        this.logger = logger; 
        if (this.dataDogLog) {
            this.logger.info(ctx, "MyComponentA has been created.");
        }
    }
    public configure(config: ConfigParams): void {
        this.logger.configure(config);
    }

    public isOpen(): boolean {
        return this.logger.isOpen();
    }

    public async open(ctx: Context): Promise<void> {
        this.logger.open(ctx);
    }

    public async close(ctx: Context): Promise<void> {
        this.logger.close(ctx);
    }

    public myMethod(ctx: Context): void {
        try {
            if (this.dataDogLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
                this.logger.info(ctx, "Greetings created.");
            }
        } finally {
            this.logger.info(ctx, "Finally reached.");
        }
    }
}
```
