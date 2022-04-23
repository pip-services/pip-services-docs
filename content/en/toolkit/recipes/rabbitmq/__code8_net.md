
```cs
using System;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.RabbitMQ.Queues;
using PipServices3.Messaging.Queues;


namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ExampleStart().Wait();
        }

        public static async Task ExampleStart()
        {
            var queue = new RabbitMQMessageQueue();

            queue.Configure(ConfigParams.FromTuples(
                "exchange", "myqueue", // rabbitmq exchange type
                "queue", "myqueue", // queue name
                "options.auto_create", true, // autocreate queue

                "connection.host", "localhost",
                "connection.port", 5672
                // if need credentials
                //"credential.username", "user",
                //"credential.password", "pass123"
            ));

            await queue.OpenAsync("123");

            await queue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC"));

            var received = await queue.ReceiveAsync("123", 0);

            Console.WriteLine(received.GetMessageAsString());
            Console.WriteLine("Task completed");
        }
    }
}
```
