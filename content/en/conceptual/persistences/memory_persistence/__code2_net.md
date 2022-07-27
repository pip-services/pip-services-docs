
```cs
using PipServices3.Commons.Data;
using PipServices3.Data.Persistence;

using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace ExampleApp
{

    public class MyMemoryPersistence : IdentifiableMemoryPersistence<Dummy, string>
    {
        public MyMemoryPersistence() : base()
        {
            _maxPageSize = 1000;
        }

        private List<Func<Dummy, bool>> ComposeFilter(FilterParams filter)
        {
            filter ??= new FilterParams();

            var id = filter.GetAsNullableString("id");
            var key = filter.GetAsNullableString("key");
            var ids = filter.GetAsNullableString("ids");
            var idsList = ids != null ? new List<string>(ids.Split(',')) : null;

            return new List<Func<Dummy, bool>>()
            {
                (item) =>
                {
                    if (id != null && item.Id != id)
                        return false;
                    if (key != null && item.Key != key)
                        return false;
                    if (idsList != null && idsList.IndexOf(item.Id) < 0)
                        return false;
                    return true;
                }
            };
        }

        public async Task<Dummy> GetOneByKeyAsync(string correlationId, string key)
        {
            Dummy item = null;

            lock (_lock)
            {
                item = _items.Find((dummy) => { return dummy.Key == key; });
            }

            if (item != null) _logger.Trace(correlationId, "Found object by key={0}", key);
            else _logger.Trace(correlationId, "Cannot find by key={0}", key);

            return item;
        }

        public async Task<DataPage<Dummy>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            return await base.GetPageByFilterAsync(correlationId, this.ComposeFilter(filter), paging);
        }
    }
}

...

var persistence = new MyMemoryPersistence();
```
