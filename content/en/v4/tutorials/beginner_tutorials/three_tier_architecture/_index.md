---
type: docs
no_list: true
title: "Three tier architecture"
linkTitle: "Three tier architecture"
weight: 25
description: >-
     How to architect a Pip.Services app.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>Three-tier architecture</td>
    <td>Software application architecture that organizes applications into three logical tiers.</td>
  </tr>
  <tr>
    <td>Inversion of control</td>
    <td>Design principle used to invert control in OO programming to achieve loose coupling.</td>
  </tr>
  <tr>
    <td>Factory</td>
    <td>A method used to define a separate operation for object creation.</td>
  </tr>
  <tr>
    <td>Locator pattern</td>
    <td>A pattern that considers a registry known as the "service locator", which stores the information necessary to perform a certain task.</td>
  </tr>
  <tr>
    <td>Configuration file</td>
    <td>A YAML file containing information about the different components and their configurations.</td>
  </tr>
     
</table>

### Introduction

In this tutorial,  you will learn how to construct an application using Pip.Services components and a three-tier structure. 

We will begin with a brief description of the example that we will be constructing and a list of the necessary pre-requisites.

Then, we will see a detailed description of the three tiers with code examples for each of them. We will continue by explaining how two important concepts are applied in Pip.Services: inversion of control and locator pattern, and how to construct a process container for our program.

Next, we will see how to run our app by selecting a specific database, and how the results obtained from its execution are presented on our browser.

We will finish by showing the complete code of our example and summarizing what was learned.


### Brief description of the example

The example in this tutorial consists of an application that sends a message to a browser. The message has the format "Hello {name}!" where name is the random name of a person that was selected from a database.

In order to achieve this, we divide our app into three tiers. The first is the presentation or view layer, which consists of a REST service that will provide information to the browser. The second is the application layer. This tier contains a controller that connects the REST service to the database and extracts a random name from it. The last one is the data or persistence layer, which is created by using a MySQL database. The following table summarizes this and the concepts behind.

|Name(s) of the tier|Function|Example|
|---|---|---|
|- Presentation layer <br>- View<br>- Controller|- Endpoints: expose the microservice to external consumers <br> - There can be more than one endpoint|HTTP/-  Controller<br>- Presents the message "Hello {name}"|
|- Application layer<br>- Service|- Core business logic|- Obtains a random name from the database|
|- Data layer<br>|- Persistence layer| - Data storage| - Stores different names|


### Pre-requisites

Before creating this app, we need to install several modules that contain the necessary components. They are:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available
{{< /tabsection >}}

{{< tabsection >}}
  Not available
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1b_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}




{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}



{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Data object

In order to use the data obtained from the database, we define a data structure that mirrors the table where the data is stored. 

This table contains three columns of type varchar, namely id, type, and name. Thus, our data structure looks like this:

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Tier 1: Presentation layer or view

This layer is used to show the result of our app on the browser. It is constructed as a subclass of the RestService class. In it, we set a reference to the controller to create the connection between the two and be able to use the greetings() method. We also define the elements of the URL to the resulting webpage.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Tier 2: Application layer or controller

The controller allows us to connect the presentation and persistence layers and produce some data transformations. 

Thus, it sets a reference to the database. This reference is not to a specific database, but a general persistence component that will allow us to select between different databases at deployment time.

This class also defines the greeting method, which selects a random name from the database and then passes it to the view. It also defines a default name, which will be used if no name is obtained from the database query.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Tier 3: Data layer or persistence layer

This layer connects to a database containing a table with names. The class constructor accepts the name of the table to be used, which in this example is called 'myfriends'. 

The class also contains the defineSchema() method, which ensures that if our table doesn't exist in the database, it is created.

Next, it contains the composeFilter() method, which customizes a filter to the needs of the database, and the getOneRandom() method, which is an override of the parent class.

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Containerization

Now that we have the code for our three tiers, we can put it together in an executable container. This is done in two steps: object creation and binding. 

The first is based on the inversion of control principle through the use of factories. The second considers the Locator pattern through an external configuration file with information on the different modules and their properties. The following sections explain them in detail.

#### Inversion of control: Factories

Pip.Services uses the Inversion of Control principle to create different objects. As such, it employs factories to create instances of classes. 

In our example, we create the HelloFriendServiceFactory, which is a subclass of Factory and registers the HelloFriendRestService, HelloFriendController, and HelloFriendPersistence components as classes to be instantiated.

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Locator pattern: config file

Pip.Services uses the locator pattern to create the bindings between the different objects. To do this, we create a configuration file with information about the different components. Among them, we specify the actual configuration of our MySQL database. 

```yaml
---
# Container context
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "hello-friend"
  description: "HelloFriend microservice"

# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"

# Service
- descriptor: "hello-friend:service:default:default:1.0"
  default_name: "Friend"

# Shared HTTP Endpoint
- descriptor: "pip-controller:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: {{HTTP_PORT}}{{#unless HTTP_PORT}}8085{{/unless}}

# HTTP Service V1
- descriptor: "hello-friend:controller:http:default:1.0"

# Heartbeat service
- descriptor: "pip-controller:heartbeat-controller:http:default:1.0"

# Status service
- descriptor: "pip-controller:status-controller:http:default:1.0"

# Persistnece - MySQL
- descriptor: "hello-friend:persistence:mysql:default:1.0"
  connection:
    host: 'localhost'
    port: '3306'
    database: 'pip'
  credential:
    username: 'root'
    password: ''
```

#### Process container

Now that our support structure has been created, we add the components to a process container. This container will allow us to run our code as a sole app.

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Running the app
Our final step is to execute the app via the container's run() command. The following example shows how to do this.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Result
Once our app is running, we can see the results by calling the previously defined link.  In our example, the URL is:

[http://localhost:8080/hello_friend/greeting](http://localhost:8080/hello_friend/greeting)

And, if everything went right, we will see something similar to:

![figure 1](./images/figure1.png)

### Complete code

Below, we can see the complete code of our example.
{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code13_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
   Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
 Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code12_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create a simple application based on a three-tier architecture. First, we saw how to create a view based on a REST service. Then, we understood how to create a controller that manages the connection between the view and the third layer, namely persistence. Next, we saw how to create a persistence layer that includes a MySQL database. Finally, we executed the application and saw the result on our browser.

