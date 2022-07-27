
```cs
new Thread(() =>
{
    Thread.CurrentThread.IsBackground = true;
    messageQueue.ListenAsync("123", new MyMessageReceiver()).Wait();
}).Start();
```
