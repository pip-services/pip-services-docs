
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;

public class MyDataController : IMyDataController, ICommandable
{
    private IList<MyData> _entities = new List<MyData>();
    private CommandSet _commandSet;

    public CommandSet GetCommandSet()
    {
        if (this._commandSet == null)
            this._commandSet = new MyDataCommandSet(this);
        return this._commandSet;
    }

    public async Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
    {
        filter = filter != null ? filter : new FilterParams();
        var key = filter.GetAsNullableString("key");

        paging = paging != null ? paging : new PagingParams();
        var skip = paging.GetSkip(0);
        var take = paging.GetTake(100);

        List<MyData> result = new List<MyData>();
        for (var i = 0; i < this._entities.Count; i++)
        {
            var entity = this._entities[i];
            if (key != null && key != entity.Key)
                continue;

            skip--;
            if (skip >= 0) continue;

            take--;
            if (take < 0) break;

            result.Add(entity);
        }

        return new DataPage<MyData>(result);
    }

    public async Task<MyData> GetOneByIdAsync(string correlationId, string id)
    {
        for (var i = 0; i < this._entities.Count; i++)
        {
            var entity = this._entities[i];
            if (id == entity.Id)
                return entity;
        }
        return null;
    }

    public async Task<MyData> CreateAsync(string correlationId, MyData entity)
    {
        if (entity.Id == null || entity.Id == "")
            entity.Id = IdGenerator.NextLong();
        _entities.Add(entity);
        return entity;
    }

    public async Task<MyData> DeleteByIdAsync(string correlationId, string id)
    {
        for (var index = 0; index < this._entities.Count; index++)
        {
            var entity = this._entities[index];
            if (entity.Id == id)
            {
                this._entities.RemoveAt(index);
                return entity;
            }
        }
        return null;
    }


    public async Task<MyData> UpdateAsync(string correlationId, MyData newEntity)
    {
        for (var index = 0; index < this._entities.Count; index++)
        {
            var entity = this._entities[index];
            if (entity.Id == newEntity.Id)
            {
                this._entities[index] = newEntity;
                return newEntity;
            }
        }
        return null;
    }
}

```
