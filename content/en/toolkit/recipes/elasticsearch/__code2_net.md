
```cs
class MyComponentA
{
    private ILogger _logger;
    private bool _elasticsearch_log = true;

    public MyComponentA(ElasticSearchLogger logger)
    {
        this._logger = logger;

        if (this._elasticsearch_log)
            this._logger.Info("123", "MyComponentA has been created.");
    }

    public void myMethod()
    {
        try
        {
            if (this._elasticsearch_log)
            {
                Console.WriteLine("Hola amigo");
                Console.WriteLine("Bonjour mon ami");
            }
            this._logger.Info("123", "Greetings created.");
    }
        finally
        {
            this._logger.Info("123", "Finally reached.");
      }
    }
}

```
