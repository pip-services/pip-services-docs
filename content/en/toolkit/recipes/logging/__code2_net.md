
```cs
public void MyTask(string correlationId)
{
    var logger = new ConsoleLogger();
    logger.Level = LogLevel.Debug;
    // create an artificial problem
    try
    {
        throw new Exception("Logging demo. Error created");
    }
    catch (Exception e)
    {
        logger.Error(correlationId, e, "Error created.");
    }
}

```
