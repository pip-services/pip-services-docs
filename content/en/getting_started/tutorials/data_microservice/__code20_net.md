
**/src/service/process/Program.cs**

```cs
namespace Process
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var process = new BeaconsProcess();
                process.RunAsync(args).Wait();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.ReadLine();
            }
        }
    }
}
```
