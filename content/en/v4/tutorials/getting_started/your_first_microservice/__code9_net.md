
**/Program.cs**

```cs
namespace HelloWorld { 

    class Program { 

        static void Main(string[] args) {   

            var process = new HelloWorldProcess();            
            process.RunAsync(args).Wait();        
        }

    }
}
```
