---
type: docs
no_list: true
title: "Adding logging to a component"
linkTitle: "Logging"
weight: 1
---

### Key takeaways

<table>
  <tr>
    <td>Logging </td>
    <td>Logging is the capacity to create tagged messages from events in our code.</td>
  </tr>
  <tr>
    <td>Logging levels</td>
    <td>Logging levels: nothing, fatal, error, warn, info, debug, and trace. </td>
  </tr>
  <tr>
    <td>ConsoleLogger</td>
    <td>PIP.Services component for displaying logging messages on the console. </td>
  </tr>
  <tr>
    <td>CachedLogger</td>
    <td>PIP.Services component that caches log messages in memory.</td>
  </tr>
  <tr>
    <td>CompositeLogger</td>
    <td>PIP.Services component for aggregating logging messages.</td>
  </tr>
  <tr>
    <td>DataDogLogger, ElasticSearchLogger, CloudWatchLogger</td>
    <td>PIP.Services logger implementations for Datadog, Elasticsearch, and Amazon CloudWatch components.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to add logging capacity to a microservice. First, we will understand what logging consists of. Then, we will use the microservice we created in the “Creating a component” tutorial, replace the printed messages with logger messages and create an exception in our business process (my_task). After running the code, we will see the tagged messages from the logger.

Once we have seen how to create a logger that displays messages on our console, we will learn how to create a composite logger, which will add the capacity to aggregate the log messages from different sources and centralize their display on our console.

Finally, we will see how to add loggers for Datadog, Elasticsearch, and Amazon CloudWatch components.

### What is logging?
Logging is the capacity to create tagged messages from events in our code. These messages can inform us about the running process. 

There are different logging levels. PIP.Services defines them as:

<table>
  <tr>
    <th>Level name</th>
    <th>Level number</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Nothing</td>
    <td>0</td>
    <td>Nothing to be logged.</td>
  </tr>		
  <tr>
    <td>Fatal</td>
    <td>1</td>
    <td>Logs only fatal errors that cause a microservice to fail.</td>
  </tr>		
  <tr>
    <td>Error</td>
    <td>2</td>
    <td>Logs all errors - fatal or recoverable.</td>
  </tr>		
  <tr>
    <td>Warn</td>
    <td>3</td>
    <td>Logs errors and warnings.</td>
  </tr>		
  <tr>
    <td>Info</td>
    <td>4</td>
    <td>Logs errors and important information messages.</td>
  </tr>		
  <tr>
    <td>Debug</td>
    <td>5</td>
    <td>Logs everything up to high-level debugging information.</td>
  </tr>		
  <tr>
    <td>Trace</td>
    <td>6</td>
    <td>Logs everything down to fine-granular debugging messages.</td>
  </tr>		
</table>
	
	
Once generated, log messages need to be stored or displayed. PIP.Services provides specific tools for this: [CachedLogger](http://docs.pipservices.org/python/components/log/cached_logger/) and [ConsoleLogger](http://docs.pipservices.org/python/components/log/console_logger/). The first class stores log messages in memory. The second class displays them on a console. The toolkit also provides us with the [CompositeLogger](http://docs.pipservices.org/python/components/log/composite_logger/), which allows for message aggregation and thus, creating a centralized logging point.
	
Additionally, PIP.Services provides implementations of loggers for [CloudWatch](http://docs.pipservices.org/python/aws/log/cloud_watch_logger/), [ElasticSearch](http://docs.pipservices.org/python/elasticsearch/log/elasticsearch_logger/), and [DataDog](http://docs.pipservices.org/python/datadog/log/datadog_logger/).  

Now, we will see how to create a console logger and a composite logger.

### Adding a console logger to our component

In our example, we will add a logger that sends messages to our console. For this, we will use the ConsoleLogger class. After we created an instance of this class, we will set the logging level to five, which will allow us to log everything up to debug level. 

<div class="btn-group" role="group" aria-label="Lnguage selector">

  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>

</div>



<div  id="python">
```python
# Logger setting
logger = ConsoleLogger()
logger.set_level(5) 
```  
</div>


Then, we will replace our print messages with info-level log messages. For example, *print("MyComponentA has been created.")* will be replaced with  *logger.info(None, "MyComponentA has been created.")*.

Finally, we will force an exception in the my_task method. As we had explained in the “Creating a component” tutorial, this method performs business-related tasks. Thus, we can simulate a problem within it by forcibly raising an exception. This method will look like this:

<div class="btn-group" role="group" aria-label="Lnguage selector">

  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>

</div>



<div  id="python">
```python
    def my_task(self, correlation_id):
        # create an artificial problem        
        try:
            raise Exception('Logging demo', 'Error created')
        except Exception as inst:
            logger.error(None, inst, "Error created.") 
```  
</div>

And, our final code will look like this:
a)	Our components
