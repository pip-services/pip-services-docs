---
type: docs
no_list: true
title: "Swagger"
linkTitle: "Swagger"
description: >-
     How to generate Swagger documentation with Pip.Services.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways

<table class="full-width-table">
  <tr>
    <td>Swagger module</td>
    <td>Contains components used to generate Swagger UIs.</td>
  </tr>
  <tr>
    <td>Swagger YAML file</td>
    <td>File used to declare methods to be documented via Swagger.</td>
  </tr>
  <tr>
    <td>Swagger</td>
    <td>An Interface Description Language for describing RESTful APIs using JSON.</td>
  </tr>
</table>

### Introduction

In this tutorial, you will learn how to generate Swagger documentation for a REST service. We will see three different cases. The first is a common REST service, which is documented via a YAML file containing a description of its methods. The second is a commandable REST service, which has a defined set of commands that is used to define the Swagger document. Finally, the last case considers a commandable REST component with a command set and a Swagger UI defined by a YAML file. 

### Swagger document generation

Pip.Services offers two types of REST services, which are defined by two different classes. The first is an ordinary REST service and is defined by the RestService component. The second is a REST service that contains a set of predefined commands (or methods) that can be called from other services and is defined by the CommandableHttpService class. 

As such, they represent two different approaches when it comes to Swagger documentation: A REST service needs a YAML file that describes its UI in order to generate its documentation, whereas a commandable service allows for automatic generation via a description of the command set or via a YAML file if the path to it is included in the configuration file. Moreover, it should be noted that an automatically-generated description always considers an HTTP method as POST.

To explain these cases, we will create an app that given a name returns the phrase "Hello {name}" by calling a method named greeting. In this app, we will include the necessary elements to create a Swagger UI that documents this method. The following sections teach the steps to achieve this goal.

#### Pre-requisites

First of all, to create a Swagger UI, we need to install the swagger module. This can be done with the following command:

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

#### Document 1: REST service

In this case, we want to document the greeting method as part of a REST service. For this, we need to define a YAML file containing the information necessary to create the Swagger UI. 

##### Service

Our REST service is called HelloFriendService. It is defined by a class that inherits from the RestService component and has a method named greetings, which given a name, returns "Hello {name}" on a web page. 

It also contains a reference to the controller and a method named register that defines the necessary elements for the Swagger UI. Its code is as follows:

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

##### Configuration

As we will use a process container to run the example, we need to describe this service in the configuration file. In this description, we set the Swagger's enable field to true to specify that we want to generate a Swagger UI for the service, and we define the path to our YAML file containing the Swagger UI description.

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

##### Swagger YAML file

Now, we create a YAML file that will be used by Swagger to define the UI. In our case, the service has the greeting method only, which we consider of type GET. An example of this file is:

```yaml
openapi: '3.0.2'
info:
  title: 'Friends Service'
  description: 'REST API from YAML file'
  version: '1'
paths:
  /hello_friend/greeting:
    get:
      tags:
        - hello_friend
      parameters:
        - in: query
          name: name
          schema:
            type: string
          required: true
      responses:
        201:
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: 'object'
```

#### Documents 2 & 3: Commandable REST service

These two cases document the same commandable REST service. The difference between them is that the first automatically generates the Swagger UI based on a command set, and the second uses a YAML file.

##### Command set

To create a command set, we extend the CommandSet class and define our greeting command in it. The code below illustrates how to do this:

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

##### Service for document 2

Once our command set has been defined, we create our commandable REST service by extending the CommandableHttpService class and we link it to our controller. This service checks for a YAML file in the configuration file. If not found, it builds the Swagger UI from the command set. In our example, the configuration file doesn't include a path to a YAML file, and the Swagger UI is generated from the command set previously defined.

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
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Configuration for document 2

To be able to generate a Swagger UI, we need to set the swagger's enable field to true. Besides, as we want to document the commands defined in the command set, we declare auto as true and we define the route field that will be part of the URL for the generated Swagger UI. The example below shows this configuration.

```yaml
- descriptor: "hello-friend:controller:commandable-http1:default:1.0"
  swagger:
    enable: true
    auto: true
    route: swagger
    name: Friends Service
    description: Commandable REST API - Automatic
```

##### Service for document 3

Similar to the previous one, this service builds the Swagger UI from the YAML file defined in the configuration file.

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
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Configuration for document 3

In this case, we declare a path to a YAML file containing the description for the Swagger UI. As a result, even though we have declared auto as true, the system will choose this file over the automatic generation.

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
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Swagger yam file for document 3

Here, we use the YAML file below to describe the UI. As we can see, the main difference with the previous one is that we declare the HTTP method as POST instead of GET, and therefore, we define the requestBody as required.

```yaml
openapi: '3.0.2'
info:
  title: 'Friends Service'
  description: 'Commandable REST API from YAM file'
  version: '1'
paths:
  /commandable_hello_friend/greeting:
    post:
      tags:
        - commandable_hello_friend
      requestBody:
        required: true
        description: Friend name
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string

      responses:
        201:
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: 'object'
```

#### Containerization

Now that our REST services are defined, we want to create a process container to run them. For this, we need to define our factory of components and a class extending ProcessContainer. The following sections explain how to do this.

##### Factory

To create our factory of components, we extend the Factory class and register our REST and commandable REST services. 

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
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Process container

Once we have our factory, we define our process container by extending the ProcessContainer class and adding the factories for the services and Swagger. Our code will look something like this:

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
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Runner

After our components are defined, we can run our app by invoking the run method from our process container.

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
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And, after executing our code, we will see the following messages on our console:

![figure 1](./figure1.png)

### Results

To see the generated Swagger UIs, we can use the following URL:

[http://localhost:8080/swagger/index.html ]()


#### General Interface

The generated Swagger UI presents a drop-down menu that can be used to select any of the cases defined in this exercise.

![figure 2](./figure2.png)

#### Document 1: REST service

If we select the hello_friend option, we will see a UI that presents all the information defined in the Swagger YAML file.

![figure 3](./figure3.png)

#### Document 2: Commandable REST service

Alternatively, if we choose the commandable_hello_friend1 option, we will be presented by a UI showing the information automatically generated from the command set.

![figure 4](./figure4.png)

#### Document 3: Commandable REST service.

Finally, if we select commandable_hello_friend2, we get a similar UI but generated from our YAML file.

![figure 5](./figure5.png)

### Final code

In this section, we show the complete code and the corresponding configuration YAML file.

##### swagger.py

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code10_node.md" >}} 
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
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code11_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


##### config.yaml

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code11_node.md" >}}
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
  {{< collapse >}}
  Not available  
  {{< /collapse >}}
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

In this tutorial, we have seen how to create Swagger UIs from a REST service and a commandable REST service. First, we created a REST service that is Swagger enabled and obtained all the information necessary to create the UI from a YAML file. After that, we created a commandable REST service, which developed a UI from a set of commands or a YAML file. Finally, we created a process container used to run our app. Once run, our app produced Swagger UIs documenting the greeting method for each case.
