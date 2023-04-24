
```cs
// Pre-requisites
using PipServices3.Commons.Config;
using PipServices3.Nats.Queues;
using PipServices3.Messaging.Queues;

namespace ExampleApp
{
    class Program
    {
        /// <summary>
        /// Running the container
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            // Create and configure a component
            var queue = new NatsMessageQueue();

            queue.Configure(ConfigParams.FromTuples(
                "topic", "mytopic",
                "connection.protocol", "nats",
                "connection.host", "localhost",
                "connection.port", 4222,
                "options.autosubscribe", true
            ));

            // Connect
            queue.OpenAsync(null).Wait();

            // Send a message
            queue.SendAsync("123", new MessageEnvelope("123", "mymessage", "ABC")).Wait();

            // Receive a message
            var message = queue.ReceiveAsync("123", 10000).Result;
            Console.WriteLine("my message is: " + message.GetMessageAsString());

            // Close the connection
            queue.CloseAsync("123").Wait();
            Console.WriteLine("Program executed");
        }
    }
}
```