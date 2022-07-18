
```cs
class Program
{
    static void Main(string[] args)
    {
        try
        {
            Environment.SetEnvironmentVariable("MYSQL_ENABLED", "true");
            //Environment.SetEnvironmentVariable("POSTGRES_ENABLED", "true");
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
