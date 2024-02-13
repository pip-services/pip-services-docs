
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;
using PipServices3.Grpc.Clients;


public class MyCommandableGrpcClient : CommandableGrpcClient, IMyDataClient
{
    public MyCommandableGrpcClient() : base("mydata") { }

    public Task<DataPage<MyData>> GetMyDatasAsync(string correlationId, FilterParams filter, PagingParams paging)
    {
        filter = filter ?? new FilterParams();
        paging = paging ?? new PagingParams();

        var requestEntity = new
        {
            correlationId=correlationId,
            filter=filter,
            paging= paging,
        };

        return CallCommandAsync<DataPage<MyData>>("get_my_datas", correlationId, requestEntity);
    }

    public Task<MyData> GetMyDataByIdAsync(string correlationId, string id)
    {
        var requestEntity = new
        {
            correlationId = correlationId,
            my_data_id=id
        };

        return CallCommandAsync<MyData>("get_my_data_by_id", correlationId, requestEntity);
    }

    public Task<MyData> CreateMyDataAsync(string correlationId, MyData entity)
    {
        var requestEntity = new
        {
            correlationId = correlationId,
            my_data =entity
        };

        return CallCommandAsync<MyData>("create_my_data", correlationId, requestEntity);
    }

    public Task<MyData> DeleteMyDataAsync(string correlationId, string id)
    {
        var requestEntity = new
        {
            correlationId = correlationId,
            my_data_id =id
        };

        return CallCommandAsync<MyData>("delete_my_data", correlationId, requestEntity);
    }
   

    public Task<MyData> UpdateMyDataAsync(string correlationId, MyData entity)
    {
        var requestEntity = new
        {
            correlationId= correlationId,
            my_data=entity
        };

        return CallCommandAsync<MyData>("update_my_data", correlationId, requestEntity);
    }
}

```
