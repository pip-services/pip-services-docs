
```cs
public class DependencyResolver : IReferenceable, IReconfigurable
{
    public DependencyResolver(ConfigParams config);
    public void Configure(ConfigParams config);
    public void SetReferences(IReferences references);
    public void Put(string name, object locator);
    public List<object> GetOptional(string name);
    public List<T> GetOptional<T>(string name);
    public List<object> GetRequired(string name);
    public List<T> GetRequired<T>(string name);
    public object GetOneOptional(string name);
    public T GetOneOptional<T>(string name);
    public object GetOneRequired(string name);
    public T GetOneRequired<T>(string name);
    public List<object> Find(string name, bool required);
    public List<T> Find<T>(string name, bool required);
    public static DependencyResolver FromTuples(params object[] tuples);
}


```

