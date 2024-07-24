---
type: docs
no_list: true
title: "Step 6. Implementing an HTTP service"
linkTitle: "Step 6. HTTP service" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

The Pip.Services Toolkit has a dedicated component in the RPC module for processing external requests. To make use of this service, create a new class `BeaconsHttpServiceV1`, extending the `CommandableHttpService` class:

{{< tabsection >}}
  {{< include "../__code16_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


The `CommandableHttpService` class from the pip-services3-rpc module implements all of the basic functionality needed by the service, right out of the box. All that we need to do on our side is configure it in the child class. This is done by defining a base route to the API (e.g. 'v1/beacons') and by setting references to the service. The rest is taken care of by the parent class and the process container: a service will be searched for and referenced, after which the controller will receive a set of commands, register it, and make those commands available through the API interface. This allows us to run commands by simply posting requests to a URL of the following format:

```
http://{ip}:{port}/v1/beacons/{command_name}
```

Even though the `BeaconsHttpServiceV1` class barely has any lines of code, there's a large amount of code being executed in the service itself. To make sure that everything is working as it should, we should add tests for the service itself, as well as for the commands we wrote in the CommandSet. Create a file for the service's test and paste the following code:

{{< tabsection >}}
  {{< include "../__code17_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Congratulations! This step finishes off the development of our microservice! However, before we can start our service up as a fully fledged microservice, we'll first need to compose all of its components using a process container. And that's exactly what we'll be doing in [Step 7. Wrapping microservice into container.](../step6)


<span class="hide-title-link">

### [Step 7. Wrapping the microservice into a container.](../step6)

</span>
