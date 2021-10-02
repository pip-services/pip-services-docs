
```cs
private FixedRateTimer Timer { get; set; } = new FixedRateTimer();
...
public Task OpenAsync(string correlationId)
{
   Timer.Task = new Action(async () =>  await PerformAnalysisAsync(correlationId));
   Timer.Interval = Parameters.GetAsInteger("interval");
   Timer.Delay = Parameters.GetAsInteger("delay"); 
   Timer.Start();
   return Task.CompletedTask;
 }

```

