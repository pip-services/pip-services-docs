
Looking at the configuration file, we can conclude that the following components will be created in the microservice:

- [ContextInfo](../../toolkit_api/golang/components/info/context_info) - standard Pip.Services component for determining the name and description of a microservice.
- [ConsoleLogger](../../toolkit_api/golang/components/log/console_logger) - standard Pip.Services component for writing logs to stdout,
- [LogCounters](../../toolkit_api/golang/components/count/log_counters) - standard Pip.Services component for logging performance counters.
- HelloWorldService - the service of our microservice, implemented in step 2. Make note of the service's descriptor, as it will be used to link the service class to the REST controller.
- [HttpEndpoint](../../toolkit_api/golang/rpc/services/http_endpoint) - standard Pip.Services component that allows multiple services to use a single HTTP port simultaneously.
- HelloWorldRestController - the REST controller we implemented on step 3.
- [HeartbeatRestController](../../toolkit_api/golang/rpc/services/heartbeat_rest_controller) - standard Pip.Services component that is used to check whether or not a microservice is still up and running by calling GET /heartbeat.
- [StatusRestController](../../toolkit_api/golang/rpc/services/status_rest_controller/) - standard Pip.Services component for getting the status of a microservice by calling GET /status.
