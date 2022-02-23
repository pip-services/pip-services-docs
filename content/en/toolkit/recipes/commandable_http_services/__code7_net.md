
```cs
class Program
{
    static void Main(string[] args)
    {
        try
        {
            var runner = (new HelloFriendProcess()).RunAsync(args);
            runner.Wait();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
        }
    }
}

```
