---
type: docs
no_list: true
title: "Creating a component"
linkTitle: "Component Creation"
description: >-
     How to create a component and assemble a service from it.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>Component creation </td>
    <td>How to create a component and define its behavior throughout its lifecycle.</td>
  </tr>
  <tr>
    <td>Containerization</td>
    <td>How to add a component to a container and execute it. </td>
  </tr>
</table>

### Introduction
In this tutorial, we will learn how to create a component and how to assemble a service from it. We will start with a short description of a component's lifecycle and then we will create a component by defining step-by-step all the elements that compose its lifecycle. Finally, we will assemble a service from it through a container, run it, and see the results.  

### The lifecycle of a component
A component lifecycle is implemented using interfaces. In this manner, an existing class can be turned into a Pip.Services component (code augmentation). The following diagram summarizes the main states of a component and their respective interfaces

<img src="figure1.svg" alt="Console logger messages" style="width:50%;text-align: center">

### Creating our component
Following the sequence presented in the previous figure, we will create a component and explain each step of its lifecycle.

#### Step 1 – Creating the component
A component can be seen as a class that has a default constructor. Thus, we will begin by creating a class with a constructor, such as:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}} 
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

#### Step 2 – Configuration

Now that we have a component, we will add configuration capabilities to it. For this, we need to use the **Iconfigurable** interface and define the configure method. In this method, we will receive a **ConfigParams** object (key-value map) with the values of the parameters and assign them to our variables. 

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}} 
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


#### Step 3 – Referencing
After configuring our component, we want to link MyComponentA to another component called MyComponentB. To do this, we need to use the **IReferenceable** interface. This interface contains the **set_references** method, which allows us to define references to dependent components. As a component's locator, we will use a **Descriptor** object with the connection parameters.  Our code will be like this:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}} 
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

#### Step 4 – Opening

To help define those components that require opening, Pip.Services offers the **IOpenable** interface. This interface is part of the Commons module and offers two methods: **open** and **isOpen**. In our example, we will use the first one to create the code that will open the component, and the second one to verify whether the component is open or not.

Moreover, as the opening of the component marks the start of its usage, we will add an optional component called **context**. This component is used to trace the execution of the component through the call chain. It can be a string, such as "123". 

Now, our code expands to this:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}} 
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

#### Step 5 – Execution
We will now define a function that will be used to perform business tasks, and we will call it my_task. In our example, the business task will consist of printing a message and defining a dummy variable. 

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
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

#### Step 6 – Closing

As any open component needs to be closed to ensure that the resources used are being freed for other processes, we now need to define our close method. To do this, we use the **IClosable** interface. 

Here, we must note that the **IClosable** interface was already called by the **IOpenable** interface in step 4. Thus, we don't need to explicitly call it now.
As our component already has access to this interface, we will define the **close** method for our class. The code below shows a simplified version of this method.

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
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

#### Step 7 – Un-referencing

Once our component has been closed, we need to clear the component's previously defined references. Pip.Services provides the **IUnreferenceable** interface, which defines the **unset_references** method. In our example this method will be coded as:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
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

#### Step 8 – Destruction
Finally, to complete the process, we need to dispose of the component. For this, we will use a class destructor or other instruments provided by the languages. Our code will look something like this:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}} 
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

#### Important note
In this example, we have created a component that accepts configuration parameters, links to other components, opens and executes a process, closes, deletes the links to other components, and destroys itself. 

However, the Pip.Services toolkit provides many other components that can be used to add extra functionality, such as connectivity to other services, observability, and other types of persistence. 

#### Final code
The complete code for our example is:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
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

### Executing our code

Now, we can execute our code step-by-step. Our program will look something like this:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
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

Which, after running, results in the following output:

<img src="figure2.png" alt="Console logger messages" style="width:100%">

### Assembling a service from our component

At present, we have a component that is capable of connecting to another component and can execute some actions defined by us. This component is ready for use. However, running it step-by-step can be laborious and inefficient. 

To solve this problem, we can use a container. Pip.Services offers the **ProcessContainer**, which is an Inversion of control (IoC) container that runs as a system process. 

As this container uses a factory to create the contained components, we will create one via the **Factory** class. Once again, we will use **Descriptor** objects to locate each component, and we will use the method **register_as_type** to register the component in our factory. This method requires the locator and the component's type. Our updated code is:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}} 
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

Once our factory is ready, we can proceed to create our container. First, we will create a class named MyProcess as a subclass of **ProcessContainer**. Inside this class, we will state the path to our configuration file, and add our previously created factory. 

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Our configuration file must declare our component's descriptor and the values we want to assign to our parameters. We will use YAML syntax for this purpose. Below is an example of this type of declaration.

```{include} config.md
```

<img src="figure3.png" alt="Console logger messages" style="width:50%;text-align: center" >

### Using our component
We have a service, and to use it, we just need to create an instance of our container and call the run method. 

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

After running our service, we should see the following output, which confirms that components A and B have been created and linked:

<img src="figure4.png" alt="Console logger messages" style="width:100%">

     <br>
As our component is complete and fully functional, this step marks the end of our task.

### Wrapping up

In this tutorial, we have created a component, defined all the necessary methods for managing its lifecycle, and assembled a service from it. We also saw that containers offer a more efficient way to run components.

More complex components will follow a similar structure, but with added functionality. For example, we can add things like different forms of persistence, connectivity to other services, observability, caching, and more. You can find an example of this in the [Data Microservice](../../../getting_started/tutorials/data_microservice/) tutorial.
