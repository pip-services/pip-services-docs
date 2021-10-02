
```cs

public Task OpenAsync(string correlationId)
{
   _messageQueue?.BeginListen(correlationId, async (message, q) =>
   {
      await PerformAnalysisAsync(correlationId);
    	await q.CompleteAsync(message);
   }); 
   return Task.CompletedTask;
}
public async Task PerformAnalysisAsync(string correlationId)
{
  ... // Long running tasks
}

```

