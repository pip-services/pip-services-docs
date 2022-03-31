
```cs
await service.OpenAsync(null);
await counters.OpenAsync(null);

var countExec = 2;

for (int i = 0; i < countExec; i++)
    mycomponent.MyMethod();

```
