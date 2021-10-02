
```cs
private FixedRateTimer Timer { get; set; } = new FixedRateTimer();
private IJobsClientV1 JobsClient { get; set; }
private const string JobType = “AnalysisOfNewFiles”;
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

