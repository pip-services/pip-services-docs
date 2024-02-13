
```cs
using System;
using System.Collections.Generic;

using PipServices3.Commons.Commands;
using PipServices3.Commons.Run;

namespace ExampleApp
{
    class Program
    {

        static void Main(string[] args)
        {
            var mySet = new MyCommandSet();

            mySet.ExecuteAsync(null, "command1", null).Wait();
            mySet.ExecuteAsync(null, "command2", null).Wait();
            mySet.ExecuteAsync(null, "command3", null).Wait();
            mySet.ExecuteAsync(null, "command1B", null).Wait();

        }
    }

    public class MyCommandSetB : CommandSet
    {
        public MyCommandSetB() : base()
        {
            AddCommand(Command1B());
        }

        private ICommand Command1B()
        {
            return new Command("command1B",
                null,
                async (string correlationId, Parameters args) =>
                {
                    Console.WriteLine("command 1B");
                    return null;
                }
            );
        }
    }

    public class MyCommandSet : CommandSet
    {
        private CommandSet _commandSet = new MyCommandSetB();
        public MyCommandSet() : base()
        {
            AddCommand(Command1());
            AddCommandSet(_commandSet);
            AddCommands(new List<ICommand> { Command2(), Command3() });
        }

        private ICommand Command1()
        {
            return new Command("command1",
                null,
                async (string correlationId, Parameters args) =>
                {
                    Console.WriteLine("command 1");
                    return null;
                }
            );
        }

        private ICommand Command2()
        {
            return new Command("command2",
                null,
                async (string correlationId, Parameters args) =>
                {
                    Console.WriteLine("command 2");
                    return null;
                }
            );
        }

        private ICommand Command3()
        {
            return new Command("command3",
                null,
                async (string correlationId, Parameters args) =>
                {
                    Console.WriteLine("command 3");
                    return null;
                }
            );
        }
    }
}
```

After running it, this code produces the following output:         
   
![figure 1](./figure1.png) 
