
```cs
class Program
{
    static void Main(string[] args)
    {
        try
        {
            var task = (new MyDataProcess()).RunAsync(args);
            task.Wait();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
        }
    }
}

```
