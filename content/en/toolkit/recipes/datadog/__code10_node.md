
```ts
import { DataDogLogger } from 'pip-services-datadog-nodex';
import { ConfigParams, IConfigurable, IOpenable } from 'pip-services3-commons-nodex';

class MyComponentA implements IConfigurable, IOpenable {
    private dataDogLog = true;

    protected logger: DataDogLogger;

    public constructor(logger: DataDogLogger) {
        this.logger = logger; 
        if (this.dataDogLog) {
            this.logger.info("123", "MyComponentA has been created.");
        }
    }
    public configure(config: ConfigParams): void {
        this.logger.configure(config);
    }

    public isOpen(): boolean {
        return this.logger.isOpen();
    }

    public async open(correlationId: string): Promise<void> {
        this.logger.open(correlationId);
    }

    public async close(correlationId: string): Promise<void> {
        this.logger.close(correlationId);
    }

    public myMethod(): void {
        try {
            if (this.dataDogLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
                this.logger.info("123", "Greetings created.");
            }
        } finally {
            this.logger.info("123", "Finally reached.");
        }
    }
}
```
