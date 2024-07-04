
```ts
import { DataDogLogger  } from 'pip-services4-datadog-node';
import { Context } from 'pip-services4-components-node';

class MyComponentA {
    private dataDogLog = true;

    protected logger: DataDogLogger;

    public constructor(ctx: Context, logger: DataDogLogger) {
        this.logger = logger; 
        if (this.dataDogLog) {
            this.logger.info(ctx, "MyComponentA has been created.");
        }
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
