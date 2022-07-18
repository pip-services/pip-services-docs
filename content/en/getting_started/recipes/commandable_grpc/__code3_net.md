
```cs
using Newtonsoft.Json;
using PipServices3.Commons.Data;


public class MyData : IStringIdentifiable
    {
        public MyData()
        {
        }

        public MyData(string id, string key, string content)
        {
            Id = id;
            Key = key;
            Content = content;
        }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("key")]
        public string Key { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }
    }
```
