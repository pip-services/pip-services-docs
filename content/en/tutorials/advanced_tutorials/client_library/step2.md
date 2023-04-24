---
type: docs
no_list: true
title: "Step 3. Designing a Direct Client"
linkTitle: "Step 3. Direct Client" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Oftentimes systems that are created using a microservices architecture end up being assembled and installed as monoliths. Sometimes this is required as a transitional step, when the operations department isn't quite yet ready to install and support such a fragmented system. It's also common for startups, who usually have to deal with limited financial resources, to use this approach. Packing a large amount of microservices into a monolith allows teams to significantly reduce the amount of containers needed to get the system up and running. Such a system can easily be broken up into microservices in the future, when the startup is ready to support an increasing number of clients.

Direct clients are key to creating microservice-based monoliths. A direct client uses direct calls to the microservice's controller from the shared address space, bypassing external interfaces in the process. On this step, we are going to create such a client. We'll be placing our code in the **src/version1** folder.

First off, let's define an interface for our clients to implement. This interface should contain a list of all the methods that are provided by our microservice's API. As a result, we get the following code:

{{< tabsection >}}
  {{< include "../__code2_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_go.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Let's start writing our direct client. This will be a class that implements the interface we defined above, that has our controller set as a dependency in the controller, and that will call the controller's methods when asked to. To learn more about the referencing and linking mechanisms, be sure to read [The Component References](../../../../tutorials/beginner_tutorials/component/component_references/). Ultimately, this will just be a wrapper class for the container. 
The direct client's code is listed below:

{{< tabsection >}}
  {{< include "../__code3_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_go.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Now that we're done writing the client, we should test it. 
To be sure that our code works as intended, we need to perform some functional testing. Let's start with creating, in a separate class, a set of tests that will be common to all our clients. This will help us simplify the process of testing multiple clients, as well as make sure that they all work the same. We'll place the code for our tests in the **test/version1** folder. The code for this class can be found in the repositories:

- [Node.js](https://github.com/pip-services-samples/client-beacons-nodex/blob/main/test/version1/BeaconsClientV1Fixture.ts)
- [.NET](https://github.com/pip-services-samples/client-beacons-dotnet/blob/master/test/Clients/Version1/BeaconsClientV1Fixture.cs)
- [Golang](https://github.com/pip-services-samples12345)
- [Dart](https://github.com/pip-services-samples/client-beacons-dart/blob/master/test/version1/BeaconsClientV1Fixture.dart)
- [Python](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/BeaconsClientV1Fixture.py)
- [Java](https://github.com/pip-services-samples/client-beacons-java/blob/master/test/org/pipservices3/beacons/client/version1/BeaconsClientV1Fixture.java)

Now, let's test the direct client. To do this, create an instance of the direct client and pass it as a parameter to our set of tests. 
An example implementation of the tests can be found in the example's:

- [Node.js](https://github.com/pip-services-samples/client-beacons-nodex/blob/main/test/version1/BeaconsDirectClientV1.test.ts)
- [.NET](https://github.com/pip-services-samples/client-beacons-dotnet/blob/master/test/Clients/Version1/BeaconsDirectClientV1Test.cs)
- [Golang](https://github.com/pip-services-samples12345)
- [Dart](https://github.com/pip-services-samples/client-beacons-dart/blob/master/test/version1/BeaconsDirectClientV1_test.dart)
- [Python](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/test_BeaconsDirectClientV1.py)
- [Java](https://github.com/pip-services-samples/client-beacons-java/blob/master/test/org/pipservices3/beacons/client/version1/BeaconsDirectClientV1Test.java)


Run the tests using the testing methods that are standard for the programming language you are using. All tests should pass successfully.This finishes the development of the Direct client.
Move on to [Step 4. Designing an HTTP Client](../step3).


<span class="hide-title-link">

### [Step 4. Designing an HTTP Client](../step3)

</span>
