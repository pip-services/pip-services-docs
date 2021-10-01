
```cs
public interface IReferences
{
    void Put(object locator, object component);

    object Remove(object locator);

    List<object> RemoveAll(object locator);

    List<object> GetAllLocators();

    List<object> GetAll();

    List<object> GetOptional(object locator);

    List<T> GetOptional<T>(object locator);

    List<object> GetRequired(object locator);

    List<T> GetRequired<T>(object locator);

    object GetOneOptional(object locator);

    T GetOneOptional<T>(object locator);

    object GetOneRequired(object locator);

    T GetOneRequired<T>(object locator);

    List<object> Find(object locator, bool required);

    List<T> Find<T>(object locator, bool required);

}


```

