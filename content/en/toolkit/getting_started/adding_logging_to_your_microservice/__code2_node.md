
```ts
public myTask(correlationId: string): void {
    // create an artificial problem
    try{
        throw Error('Logging demo. Error created');
    }
    catch (ex) {
        logger.error(correlationId, ex, "Error created.")  
    }
        
}

```
