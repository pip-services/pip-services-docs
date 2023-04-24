
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Components.Log;
using System;

using System.Threading.Tasks;

namespace ExampleApp
{
    class MyComponentB : IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable
    {
        private string _param1 = "ABC2";
        private int _param2 = 456;
        private bool _opened = false;

        private string _status;

        private ConsoleLogger _logger = new ConsoleLogger();

        /// <summary>
        /// Creates a new instance of the component.
        /// </summary>
        public MyComponentB()
        {
            this._status = "Created";
            this._logger.Level = LogLevel.Debug;
            this._logger.Info(null, "MyComponentB has been configured.");
        }

        public void Configure(ConfigParams config)
        {
            this._param1 = config.GetAsStringWithDefault("param1", this._param1);
            this._param2 = config.GetAsIntegerWithDefault("param2", this._param2);

            this._logger.Info(null, "MyComponentB has been configured.");
        }

        public void SetReferences(IReferences references)
        {

        }

        public bool IsOpen()
        {
            return _opened;
        }

        public async Task OpenAsync(string correlationId)
        {
            await Task.FromResult(0);
        }


        public async Task CloseAsync(string correlationId)
        {
            await Task.FromResult(0);
        }

        public void MyTask(string correlationId)
        {
            var logger = new ConsoleLogger();
            logger.Level = LogLevel.Debug;
            // create an artificial problem
            try
            {
                throw new Exception("Logging demo. Error created");
            }
            catch (Exception e)
            {
                logger.Error(correlationId, e, "Error created.");
            }
        }

        /// <summary>
        /// Unsets (clears) previously set references to dependent components.
        /// </summary>
        public void UnsetReferences()
        {

        }

        /// <summary>
        /// Clears component state.
        /// </summary>
        /// <param name="correlationId">(optional) transaction id to trace execution through call chain.</param>
        /// <returns></returns>
        public async Task ClearAsync(string correlationId)
        {
            await Task.FromResult(0);
        }

    }


    class MyComponentA : IReferenceable, IUnreferenceable, IConfigurable, IOpenable, ICleanable
    {
        private string _param1 = "ABC";
        private int _param2 = 123;
        private bool _opened = false;
        private string _status;

        private MyComponentB _another_component;

        private ConsoleLogger _logger = new ConsoleLogger();

        public string dummy_variable = "resource variable";

        /// <summary>
        /// Creates a new instance of the component.
        /// </summary>
        public MyComponentA()
        {
            this._status = "Created";
            this._logger.Level = LogLevel.Debug;
            this._logger.Info(null, "MyComponentA has been configured.");
        }

        public void Configure(ConfigParams config)
        {
            this._param1 = config.GetAsStringWithDefault("param1", this._param1);
            this._param2 = config.GetAsIntegerWithDefault("param2", this._param2);
            this._status = "Configured";

            this._logger.Info(null, "MyComponentA has been configured.");
        }

        public void SetReferences(IReferences references)
        {
            this._another_component = references.GetOneRequired(
                new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
            ) as MyComponentB;

            this._status = "Configured";
            this._logger.Info(null, "MyComponentA's references have been defined.");
        }

        public bool IsOpen()
        {
            return this._opened;
        }

        public async Task OpenAsync(string correlationId)
        {
            this._opened = true;
            this._status = "Open";
            this._logger.Info(correlationId, "MyComponentA has been opened.");
            // artificial problem
            this.MyTask(correlationId);

            await Task.FromResult(0);
        }


        public async Task CloseAsync(string correlationId)
        {
            this._opened = false;
            this._status = "Closed";
            this._logger.Info(correlationId, "MyComponentA has been closed.");

            await Task.FromResult(0);
        }

        public void MyTask(string correlationId)
        {
            var logger = new ConsoleLogger();
            logger.Level = LogLevel.Debug;
            // create an artificial problem
            try
            {
                throw new Exception("Logging demo. Error created");
            }
            catch (Exception e)
            {
                logger.Error(correlationId, e, "Error created.");
            }
        }

        /// <summary>
        /// Unsets (clears) previously set references to dependent components.
        /// </summary>
        public void UnsetReferences()
        {
            this._another_component = null;
            this._status = "Un-referenced";
            this._logger.Info(null, "References cleared");
        }

        /// <summary>
        /// Clears component state.
        /// </summary>
        /// <param name="correlationId">(optional) transaction id to trace execution through call chain.</param>
        /// <returns></returns>
        public async Task ClearAsync(string correlationId)
        {
            this.dummy_variable = null;
            this._status = null;
            this._logger.Info(null, "Resources cleared");

            await Task.FromResult(0);
        }

    }
}

```
