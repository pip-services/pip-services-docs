---
type: docs
no_list: true
title: "Step 5. Implementing a controller"
linkTitle: "Step 5. Controller"
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it's time to add some logic to our service. Our microservice needs to be able to calculate a device's position based on the beacons it "sees", as well as initiate CRUD operations for the data it handles. Let's create a **logic** folder under the **src** directory and start by defining an interface:

{{< tabsection >}}
  {{< include "../__code12_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code12_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code12_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device's position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

{{< tabsection >}}
  {{< include "../__code13_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code13_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code13_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Pay special attention to the following two methods in the code above: 
- `setReferences`
- `getCommandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don't necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you're not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](../../../../toolkit_api/node/commons/commands/icommandable). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

{{< tabsection >}}
  {{< include "../__code14_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code14_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code14_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


To sum up this class's code: we're creating commands for each of the controller's methods, and then registering them in the constructor. To create a command, we give it a name, a validation schema (if needed), and a callback function with the following three parameters:

- `correlationId`: string – used to identify the operation,
- `args`: Parameters - the set of parameters received from the command being called,
- `callback` – callback function for returning the command's result, or an error, if one occurs.

To be sure that our new methods are working correctly, let's add some tests for the controller. The code for testing the controller is listed below:

{{< tabsection >}}
  {{< include "../__code15_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


These tests can be run using the same pip test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 6. Implementing an HTTP service.](../step5)

<span class="hide-title-link">

### [Step 6. Implementing an HTTP service.](../step5)

</span>
