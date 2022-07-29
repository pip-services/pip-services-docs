
Looking at the configuration file, we can conclude that the following components will be created in the microservice:

- [ContextInfo](../../toolkit_api/node/components/info/context_info) - standard Pip.Services component for determining the name and description of a microservice.
- [ConsoleLogger](../../toolkit_api/node/components/log/console_logger) - standard Pip.Services component for writing logs to stdout,
- [LogCounters](../../toolkit_api/node/components/count/log_counters) - standard Pip.Services component for logging performance counters.
- HelloWorldController - the controller of our microservice, implemented in step 2. Make note of the controller's descriptor, as it will be used to link the controller class to the REST service.
- [HttpEndpoint](../../toolkit_api/node/rpc/services/http_endpoint) - standard Pip.Services component that allows multiple services to use a single HTTP port simultaneously.
- HelloWorldRestServices - the REST service we implemented on step 3.
- [HeartbeatRestService](../../toolkit_api/node/rpc/services/heartbeat_rest_service) - standard Pip.Services component that is used to check whether or not a microservice is still up and running by calling GET /heartbeat.
- [StatusRestService](../../toolkit_api/node/rpc/services/status_rest_service/) - standard Pip.Services component for getting the status of a microservice by calling GET /status.
