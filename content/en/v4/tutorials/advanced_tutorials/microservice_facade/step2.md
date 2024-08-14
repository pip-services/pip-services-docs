---
type: docs
no_list: true
title: "Step 3. Business operations"
linkTitle: "Step 3. Business operations" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Since facades are usually the point of entry into a system, they can contain dozens or even hundreds of REST operations. The classic microservices structure, when all the logic is contained in a single service, becomes quite impractical in this case. Furthermore, it's critical for a facade to support versioning. When the interface is changed, the facade must continue to provide stability for existing clients using interface versioning. Usually around 80% of the logic remains the same when an interface is changed, so duplicating the logic would just increase the amount of code and make it more difficult to support.


To solve these problems, the Pip.Services Toolkit offers a new pattern that breaks up logic into separate operations. The operations can be developed and tested individually, and then integrated into the RESTful controller using unique routes. When implementing a new version, only the operations that require changes need to be rewritten. The remaining operations are simply imported from the old version by being reregistered in the new RESTful controller.


The example facade in this tutorial will contain just 2 sets of operations:

- Operations that work with Beacons
- Operations for managing sessions and users

We'll be creating a separate file for each set of operations and placing them in the folder **operations/version1**

Let's start with the first set of operations - the ones responsible for working with Beacons.

Create a file named **BeaconsOperationsV1.py** and place the following code inside:

{{< tabsection >}}
  {{< include "../__code4_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code4_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

This component's logic is based on calling the Beacons microservice via any client that implements the IBeaconsClientV1 interface. The component receives a link to the client through its SetReferences method (see the [Component References](../../../../tutorials/beginner_tutorials/component/component_references/) recipe). The component's business methods mainly just wrap the client's methods to convert facade's RESTful requests into calls to the client. Generally speaking, all of these methods perform the same set of steps: extract parameters from the request, call the corresponding method in the Beacons client, receive any results or errors, and send this information back as a response.


In the next (third) [Step 4 - Authentication and sessions](../step3) - we'll be examining the second set of operations, which manage sessions and authenticate users.

<span class="hide-title-link">

### [Step 4. Authentication and sessions](../step3)

</span>
