
```cs
public class MyController : IReferenceable
{
    public void SetReferences(IReferences references)
    {
    }

    public async Task<string> GreetingsAsync(string name)
    {
        return "Hello, " + name + " !";
    }
}


```