---
type: docs
no_list: true
title: "Step 6. Services and versioning"
linkTitle: "Step 6. Services" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

A facade's RESTful operations are implemented by REST services, which receive external requests and delegate their execution to operations.

To process requests made to the API's first version, let's create a file named **FacadeServiceV1.py** in the **services/version1** folder with the following code:

{{< tabsection >}}
  {{< include "../__code8_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The FacadeServiceV1 component extends the standard RestService, which implements the majority of the component's basic functionality. All that we have left to do is define some routes and delegate their processing to the operations we defined in the previous steps.


A base route is defined in the constructor, which contains the API version that is implemented in the service.


In the **register** method, before we register our routes, we make sure to register the **load_session** interceptor, which will be loading user sessions using the parameters set in the REST requests.


Next, the routes are registered, access limits are set up using our Authorizer, and request handlers are defined using the business methods we implemented in our REST operation sets. For the sake of convenience, the registration functions are divided into 2 groups, each of which belongs to a specific operation-component.


When implementing a new version of the API, the following must be done:


1. Implement new REST operations or modify a copy of the existing ones;
2. Create a new FacadeServiceVx and set a new "/api/vx" base route;
3. Register routes for the new API and delegate their processing to the newly added and to already existing REST operations.

Continue on to [Step 7 - Testing of Operations](../step6) to see how we can automate the testing of the service and operations we've created, including the authentication and authorization of requests.

<span class="hide-title-link">

### [Step 7 - Testing of Operations](../step6)

</span>
