
```cs
class Program
{
    static void Main(string[] args)
    {
        try
        {
            var task = (new HelloFriendProcess()).RunAsync(args);
            task.Wait();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
        }
    }
}

```
