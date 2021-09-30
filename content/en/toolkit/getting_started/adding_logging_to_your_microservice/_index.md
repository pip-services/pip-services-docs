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

In our example, we will add a logger that sends messages to our console. For this, we will use the **ConsoleLogger** class. After we created an instance of this class, we will set the logging level to five, which will allow us to log everything up to debug level. 

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code1_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Then, we will replace our print messages with info-level log messages. For example, *print("MyComponentA has been created.")* will be replaced with  *logger.info(None, "MyComponentA has been created.")*.

Finally, we will force an exception in the **my_task** method. As we had explained in the “Creating a component” tutorial, this method performs business-related tasks. Thus, we can simulate a problem within it by forcibly raising an exception. This method will look like this:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>



And, our final code will look like this:    

a)	Our components

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
	
	
b)	Our factory

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code4_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
	
	
c)	Our service

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code5_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
	
	
d)	Running our service

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code6_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
	
	
After running this code, we will get the following result:


<img src="figure1.png" alt="Console logger messages" style="width:100%">

As we can see from the above figure, the program has logged all messages with level info and from our artificial error. 

This concludes our first task. 

### Adding a composite logger to our component

Now, we will extend our logging capacity by adding a composite logger. This logger will allow us to aggregate all loggers from our component’s references into a centralized log. 
Our code will remain the same, except that now we need to create a composite logger for MyComponentA. For this, we will create an instance of this logger and set the logging level to 5. 

Then, we will use the configure and set_references methods to let our composite logger know where to ask for log messages. 
Our factory and process container code sections will remain the same, but we will have to add a reference to our console logger in our configuration file. The syntax will be:
```  
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: {{LOG_LEVEL}}{{^LOG_LEVEL}}info{{/LOG_LEVEL}}
``` 
Finally, we will add a console logger to MyComponentB.
After these changes, our component section will look like this:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>	
	
Once we run our service with the re-defined components, we will get the following results:

<img src="figure2.png" alt="Composite logger messages" style="width:100%">

As we can see, we have log messages received from both MyComponentA and MyComponentB. 

### Adding specific loggers
As we said earlier, PIP.Services has specific loggers for Datadog, Elasticsearch, and  Amazon CloudWatch. The process to add any of them to a component is similar to what we saw in our console logger example: we need to declare an instance of the logger, configure it, set the message level, and add the messages we need. Here below are examples of how to define each of them.

#### a)	Datadog

#### b) Elasticsearch

#### c)	Amazon CloudWatch

### Wrapping up
In this tutorial, we have learned what logging is, the different logging levels, and how to use the **ConsoleLogger** and **CompositeLogger** from PIP.Services to display log messages. The main advantage of the composite logger is its capacity to aggregate all logging messages, thus creating a centralized logging point.

We have also learned that PIP.Services provides several implementations of loggers, such as **CloudWatchLogger**, **ElasticSearchLogger**, and **DataDogLogger**.  

Although the examples presented here are quite general, the concepts learned continue to apply to the development of more complex applications.


