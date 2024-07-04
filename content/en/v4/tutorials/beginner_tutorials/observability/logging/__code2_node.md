
```ts
public myTask(ctx: Context): void {
    // create an artificial problem
    try{
        throw Error('Logging demo. Error created');
    }
    catch (ex) {
        logger.error(ctx, ex, "Error created.")  
    }
        
}
```
