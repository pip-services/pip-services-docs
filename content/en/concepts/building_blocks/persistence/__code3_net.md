
```cs
using MongoDB.Bson.Serialization.Attributes;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using PipServices3.Commons.Data;
using PipServices3.Postgres.Persistence;
using System.Collections.Generic;

class MyIdentifiableObject : IIdentifiable<string>
{
    [BsonElement("id")]
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [BsonElement("key")]
    [DataMember(Name = "key")]
    public string Key { get; set; }
    [BsonElement("name")]
    [DataMember(Name = "name")]
    public string Name { get; set; }
}

interface MyIdentifiablePersistence
{
    Task<DataPage<MyIdentifiableObject>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging);
    Task<MyIdentifiableObject> CreateAsync(string correlationId, MyIdentifiableObject item);
    Task<MyIdentifiableObject> GetOneByIdAsync(string correlationId, string id);
    Task<MyIdentifiableObject> DeleteByIdAsync(string correlationId, string id);
}

class MyMongoDbPersistence : IdentifiablePostgresPersistence<MyIdentifiableObject, string>, MyIdentifiablePersistence
{
    public MyMongoDbPersistence() : base("mycollection") { }

    private string composeFilter(FilterParams filter)
    {
        filter = filter ?? new FilterParams();
        var criteria = new List<string>();

        var id = filter.GetAsString("id");
        if (id != null)
            criteria.Add("id='" + id + "'");
        

        var name = filter.GetAsString("name");
        if (name != null)
            criteria.Add("name='" + name + "'");
        

        return criteria.Count > 0 ? string.Join(" AND ", criteria) : null;
    }

    public async Task<DataPage<MyIdentifiableObject>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, composeFilter(filter), paging);
    }
}


```