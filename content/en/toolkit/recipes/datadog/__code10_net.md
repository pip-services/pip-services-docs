
```cs
using System;
using System.Threading.Tasks;
using PipServices3.Commons.Config;
using PipServices3.Commons.Run;
using PipServices3.DataDog.Log;

    public class MyComponentA: IConfigurable, IOpenable
    {
        private bool dataDogLog = true;

        protected DataDogLogger logger;

        public MyComponentA(DataDogLogger logger)
        {
            this.logger = logger;
            if (dataDogLog)
                logger.Info("123", "MyComponentA has been created.");
        }

        public void Configure(ConfigParams config)
        {
            logger.Configure(config);
        }

        public DataDogLogger GetCounters()
        {
            return logger;
        }

        public bool IsOpen()
        {
            return logger.IsOpen();
        }

        public async Task OpenAsync(string correlationId)
        {
            await logger.OpenAsync(correlationId);
        }

        public async Task CloseAsync(string correlationId)
        {
            await logger.CloseAsync(correlationId);
        }

        public void MyMethod()
        {
            try
            {
                if (dataDogLog)
                {
                    Console.WriteLine("Hola amigo");
                    Console.WriteLine("Bonjour mon ami");
                    logger.Info("123", "Greetings created.");
                }
            } finally
            {
                logger.Info("123", "Finally reached.");
            }
        }
    }
```
