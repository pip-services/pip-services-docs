---
type: docs
no_list: true
title: "Adding logging to a component"
linkTitle: "Logging"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
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

In this tutorial, you will learn how to add logging capacity to a microservice. First, we will understand what logging consists of. Then, we will use the microservice we created in the "Creating a component" tutorial, replace the printed messages with logger messages and create an exception in our business process (my_task). After running the code, we will see the tagged messages from the logger.

Once we have seen how to create a logger that displays messages on our console, we will learn how to create a composite logger, which will add the capacity to aggregate the log messages from different sources and centralize their display on our console.

Finally, we will see how to add loggers for Datadog, Elasticsearch, and Amazon CloudWatch components.

### What is logging?
Logging is the capacity to create tagged messages from events in our code. These messages can inform us about the running process. 

There are different logging levels. PIP.Services defines them as:

<table class="full-width-table">
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
	

{{< tabsection >}}
  {{< include "./__code0_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Now, we will see how to create a console logger and a composite logger.

### Adding a console logger to our component

In our example, we will add a logger that sends messages to our console. For this, we will use the **ConsoleLogger** class. After we created an instance of this class, we will set the logging level to five, which will allow us to log everything up to debug level. 

{{< tabsection >}}
  {{< include "./__code1_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



Then, we will replace our print messages with info-level log messages. For example, *print("MyComponentA has been created.")* will be replaced with  *logger.info(None, "MyComponentA has been created.")*.

Finally, we will force an exception in the **my_task** method. As we had explained in the "Creating a component" tutorial, this method performs business-related tasks. Thus, we can simulate a problem within it by forcibly raising an exception. This method will look like this:

{{< tabsection >}}
  {{< include "./__code2_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



And, our final code will look like this:    

a)	Our components

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
	
	
b)	Our factory

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
	
	
c)	Our service

{{< tabsection >}}
  {{< include "./__code5_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


d)  The dynamic configuration file for the components:

**config.yaml**

```yml
---
- descriptor: "myservice:mycomponentA:*:default:1.0"
  param1: XYZ
  param2: 987

- descriptor: myservice:mycomponent-b:*:*:1.0
  param1: XYZ
  param2: 987

```
	
	
e)	Running our service

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
	
	
After running this code, we will get the following result:


<img src="figure1.png" alt="Console logger messages" style="width:100%">

As we can see from the above figure, the program has logged all messages with level info and from our artificial error. 

This concludes our first task. 

### Adding a composite logger to our component

Now, we will extend our logging capacity by adding a composite logger. This logger will allow us to aggregate all loggers from our component's references into a centralized log. 
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

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
	
Once we run our service with the re-defined components, we will get the following results:

<img src="figure2.png" alt="Composite logger messages" style="width:100%">

As we can see, we have log messages received from both MyComponentA and MyComponentB. 

### Adding specific loggers
As we said earlier, PIP.Services has specific loggers for Datadog, Elasticsearch, and  Amazon CloudWatch. The process to add any of them to a component is similar to what we saw in our console logger example: we need to declare an instance of the logger, configure it, set the message level, and add the messages we need. Here below are examples of how to define each of them.

#### a)	Datadog

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
	
#### b) Elasticsearch

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}	
	
#### c)	Amazon CloudWatch

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}	

### Example

In this example, we will combine two features: displaying log information on our console and sending log information to ElasticSearch.

#### Pre-requisites

In order to be able to create a composite logger for both outputs, we need to import the following components:

{{< tabsection >}}
 {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code11_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Component creation

The next step is to create our two logging components, namely our console and ElasticSearch. For this, we instantiate the ConsoleLogger and ElasticSearchLogger classes. Our code is:

{{< tabsection >}}
 {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code12_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once these instances have been created, we can configure them. To address this, we create a common configuration object that contains all the necessary parameters and their values:

{{< tabsection >}}
 {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code13_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

and we assign these values to the respective objects

{{< tabsection >}}
 {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code14_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Next, we connect our ElasticSearch logger:

{{< tabsection >}}
 {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code15_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Composite logger
After defining our two loggers, we define a composite logger that manages both. For this, we first declare a reference object that points to both loggers:

{{< tabsection >}}
 {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code16_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Then, we create an instance of the CompositeLogger class:

{{< tabsection >}}
 {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code17_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code17_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And, we add our references to it:

{{< tabsection >}}
 {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code18_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code18_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding log messages:

Now that our structure is complete, we can create different log messages, which will be sent to ElasticSearch and the console after executing our code:

{{< tabsection >}}
 {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code19_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code19_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After code execution, the following messages will appear on our console:

<img src="figure3.png" alt="Console logger messages" style="width:100%">

And, we can see the ElasticSearch messages by using the URL:

 [http://localhost:9200/index_name/_search?pretty]()
 
where index_name is  is "log" + "-" + current date (in date_format from config params).

For example, for January 25, 2022, our URL is

[http://localhost:9200/log-20220125/_search?pretty]()

which will show:

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code20_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code20_net.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code20_go.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code20_dart.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code20_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up
In this tutorial, we have learned what logging is, the different logging levels, and how to use the **ConsoleLogger** and **CompositeLogger** from PIP.Services to display log messages. The main advantage of the composite logger is its capacity to aggregate all logging messages, thus creating a centralized logging point.

We have also learned that PIP.Services provides several implementations of loggers, such as **CloudWatchLogger**, **ElasticSearchLogger**, and **DataDogLogger**.  

Although the examples presented here are quite general, the concepts learned continue to apply to the development of more complex applications.


