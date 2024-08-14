---
type: docs
no_list: true
title: "REST Controller"
linkTitle: "REST Controller"
description: >-
     How to create a simple REST controller.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>RestController </td>
    <td>Component available in the HTTP module, Controller library. This component is used to create REST controllers that receive remote calls via the HTTP/REST protocol.</td>
  </tr>
</table>

### Introduction

This tutorial will help you understand how REST controllerss can be created with Pip.Services. It begins by explaining the necessary pre-requisites. Then, it proceeds to explain how to create a simple REST controller using the RestController component, and how to configure and run it. It ends by showing the results on a browser.

### Creating our REST Controller

#### Pre-requisites

In order to create our REST controller, we need to import the RestController class, which is available in the Controller library, controller module. This can be done with the following command:

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

#### REST Controller

First, we need to create our REST controller. For this, we will create a class that inherits the Pip. Services' component RestController, which has different methods that can be used to handle REST controllers. The most important one is configure, and we will use it to set up our microservice.

In this class, we first define a method to be used as a handler. In it, we define some parameters that will help us to connect to our application . In our example, this method is called my_page and the parameters are name and message.

We also define the register() method to register the controler's route. We use the GET method, and as we are not using a schema, we define it as None.

The first part of our code will look something like this:

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
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}  

#### Configuration

Now that we have our REST controller defined, we will configure and run it. To configure our component, we first need to create an instance of our class and use the method configure to set up our connection protocol, host and port. As the configure method requires a ConfigParams input type, we import this class and use its method "from_tuples" to define our configuration. Lastly, we open our component. The second part of our code will look something like this:

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
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### Our microservice

Our final code will be:

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
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Running our REST controller

With our REST controller complete, we can now proceed to run it. To see the result of our code, we use the following URL:


```bash
http://localhost:15239/my_controller/my_page/John?message=hello
```


Which should display "Hello John" on our browser

![figure 2](./figure2.png)

### Wrapping up

In this tutorial, we have seen how to create a simple REST controller using the RestController component available in the Pip.Services toolkit, RPC module, Controller library. First, we created our controller class. Then, we configured and run it. Finally, the result was shown as a page on our browser. 

