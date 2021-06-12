---
type: docs
no_list: true
title: "Logging"
linkTitle: "Logging"
weight: 1
---

- by Dmitry Levichev

### Introduction

Any and all nontrivial systems need logging, and microservices are no exception. Messages in logs  help us track running transactions and sort out any problems that may occur. The quality of the information that is stored in logs largely defines how simple or difficult it is to support a system.
The Pip.Services Toolkit contains logging components that can either output messages to the console, or hand them over to specialized services, such as ElasticSearch, AppInsights or CloudWatch.

### Logging

#### The logger interface

The logger interface is defined in the Log package of the Components module. This interface contains methods that are common for most logger implementations.

```python

class ILogger(ABC):

    def get_level(self) -> LogLevel:
        raise NotImplementedError('Method from interface definition')

    def set_level(self, level: LogLevel):
        raise NotImplementedError('Method from interface definition')

    def log(self, level: LogLevel, correlation_id: Optional[str], error: Optional[Exception], message: Optional[str], *args:    Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def fatal(self, correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def error(self, correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def warn(self, correlation_id: Optional[str], message: Exception, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def info(self, correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def debug(self, correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')

    def trace(self, correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any):
        raise NotImplementedError('Method from interface definition')
```

The log method writes messages to the log, using the provided log level. The other methods collect messages at various logging levels and can be used in your code to add transparency. 
The level property can be used to optimize code. Generating log messages can cost you resources. We can optimize the use of these resources by only generating messages for the log level that is currently set, as is shown in the example below:

```python
if logger.Level >= LogLevel.Trace:
    message = ...  # Costly message preparation
    logger.trace(correlation_id, message)
```

One differentiating factor of the Pip.Services Toolkit is the required correlation_id parameter. correlation_id is used in all business methods and is passed in a standardized way when calling microservices. This way, the correlation_id is passed along the entire chain of microservice calls, from start to finish, and is included in any and all errors and log messages. This allows us to grasp an understanding of what’s going on, in conditions where information is fragmented and collected from various sources.

#### Log levels
To be able to generate quality logs, it’s crucial to know how the various LogLevels should be used. For some reason, most developers don’t consider this to be important, which makes it harder for users, technical support, and for developers themselves to use the system. The main purpose of LogLevel is to filter messages by their importance. When LogLevel is used incorrectly, important messages are bound to be lost, or the opposite can occur, where the output is spammed by various messages, making the search for information a real burden.

- Nothing - disable all messages
- Fatal - critical errors that lead to partial or complete system failures 
- Error - user errors that don’t affect the system’s performance
- Warning - warnings that technical support should check out 
- Info - messages relating to important transactions running in the system. These help get an idea of what’s going on in the system under normal conditions.
- Debug - detailed information on what’s happening in the system. These messages are used by technical support and are turned on for short periods of time to help debug the system.
- Trace - very detailed information on what’s happening in the system. These messages are used only by developers and are almost never turned on in production. 

It’s also important to write messages to the log in such a way that they can be understood by people who don’t possess knowledge of the inner workings of the system.

#### Logger types

The Pip.Services Toolkit contains a variety of logger implementations: 

- **NullLogger** - Empty logger for debugging (in the [Components](../../components/log/null_logger) module)
- **ConsoleLogger** - Logger for writing messages to the console (in the [Components](../../components/log/console_logger) module)
- **CompositeLogger** - Virtual logger for collecting and transferring messages to other loggers (in the [Components](../../components/log/composite_logger) module)
- **ElasticSearchLogger** - Logger for saving messages in ElasticSearch (inthe [ElasticSearch](../../../elasticsearch/elastic_search_logger) module)
- **FluentdLogger** - Logger for transferring messages to Fluentd (in the [Fluentd](../../../fluentd/log/fluentd_logger) module)
- **CloudWatchLogger** - Logger for collecting messages in AWS CloudWatch (in the [AWS](../../../aws/log/cloudwatch_logger) module)
- **AppInsightsLogger** - Logger for collecting messages in Azure AppInsights (in the [Azure](../../../azure/log/app_insights_logger) module)

#### Adding a logger

Loggers are usually added to microservices dynamically using a yml configuration:
**‍config.yml**

```yml
. . . 
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"
# ElasticSearch logger
- descriptor: "pip-services:log:elasticsearch:default:1.0"
  source: "test"
  connection:
    protocol: "http"
    host: "localhost"
    port: 9200
  options:
    interval: 10000
    max_cache_size: 100
    index: "log"
    daily: true      
```

#### Composite logger

It’s not rare for multiple loggers to be used simultaneously. One logger can be used to output messages to the console, allowing developers to debug the microservice, while another logger collects messages from all running microservices in a distributed storage, allowing technical support to monitor the system.
To simplify the collection of log messages in situations when the amount of loggers and/or their configurations are bound to change, the CompositeLogger from the [Components](../../components/log/console_logger) module is used. The CompositeLogger’s task is to pass along any messages it receives to all of the other loggers included in the container it’s in. Logger linking is performed in the SetReferences method ([see the References Recipe](../component_references)).


The CompositeLogger is used in the following way:

```python
class MyComponent(IConfigurable, IReferenceable):
    __logger = CompositeLogger()
    def configure(self, config):
        self.__logger.configure(config)
    def set_references(self, references):
        self.__logger.set_references(references)
    def my_method(self, correlation_id):
        self.__logger.debug(correlation_id, "Called method mycomponent.mymethod")
```

Example output from the console logger:

![ConsoleScreen1](/images/tutorials/data_microservice/python_console_screen1.png)

