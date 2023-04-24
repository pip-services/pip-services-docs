
```ts
import { DataDogLogger } from 'pip-services-datadog-nodex';

class MyComponentA {
    private dataDogLog = true;

    protected logger: DataDogLogger;

    public constructor(logger: DataDogLogger) {
        this.logger = logger; 
        if (this.dataDogLog) {
            this.logger.info("123", "MyComponentA has been created.");
        }
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
