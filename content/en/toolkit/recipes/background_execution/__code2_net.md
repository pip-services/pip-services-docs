
```cs
public async Task PerformAnalysisAsync(string correlationId)
{
   var key = typeof(ImageBatchProcessor).FullName;
   if (!Lock.TryAcquireLock(correlationId, key, Parameters.GetAsInteger("interval")))
 	   return Task.Completed;

   ... // Long running tasks
   Lock.ReleaseLock(correlationId, key);
   await Task.Completed;
}

```

