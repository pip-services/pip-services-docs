
```cs
using System;
using System.Threading;
using System.Threading.Tasks;
using PipServices3.Messaging.Queues;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Message queue
            var messageQueue = new MemoryMessageQueue();
            messageQueue.OpenAsync("123").Wait();

            // Listener
            new Thread(() =>
            {
                Thread.CurrentThread.IsBackground = true;
                messageQueue.ListenAsync("123", new MyMessageReceiver()).Wait();
            }).Start();

            // Send message
            messageQueue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC")).Wait();
            // Close message queue
            messageQueue.CloseAsync("123").Wait();
        }
    }

    // Message receiver
    class MyMessageReceiver : IMessageReceiver
    {
        public async Task ReceiveMessageAsync(MessageEnvelope envelope, IMessageQueue queue)
        {
            Console.WriteLine("Received message: " + envelope.GetMessageAsString());
        }
    }
}

```
