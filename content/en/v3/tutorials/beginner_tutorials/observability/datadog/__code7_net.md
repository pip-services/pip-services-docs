
```cs
using PipServices3.DataDog.Log;

    public class MyComponentA
    {
        private bool dataDogLog = true;

        protected DataDogLogger logger;

        public MyComponentA(DataDogLogger logger)
        {
            this.logger = logger;
            if (dataDogLog)
                logger.Info("123", "MyComponentA has been created.");
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
