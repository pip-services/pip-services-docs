
```cs
using System.Threading.Tasks;
using PipServices3.Commons.Data;

public interface IMyDataPersistence
{
    Task<MyFriend> GetOneRandomAsync(string correlationId, FilterParams filter);
    Task<MyFriend> CreateAsync(string correlationId, MyFriend item)
}


```

