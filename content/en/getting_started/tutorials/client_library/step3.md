---
type: docs
no_list: true
title: "Step 4. Designing an HTTP Client"
linkTitle: "Step 4. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice's methods. This is done by calling the REST API's methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response's result. Since the answer from the client is returned as JSON, some programming languages will require that you first convert it to an instance with a specific type. Be sure to remember this when writing your HTTP clients.

The client's resulting code is listed below:

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
  {{< include "../__code4_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

To be sure that our code works as intended, we should perform some functional testing. Test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example's:

- [Node.js](https://github.com/pip-services-samples/client-beacons-nodex/blob/main/test/version1/BeaconsHttpClient.test.ts)
- [.NET](https://github.com/pip-services-samples/client-beacons-dotnet/blob/master/test/Clients/Version1/BeaconsHttpClientV1Test.cs)
- [Golang](https://github.com/pip-services-samples12345)
- [Dart](https://github.com/pip-services-samples/client-beacons-dart/blob/master/test/version1/BeaconsHttpClientV1_test.dart)
- [Python](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/test_BeaconsHttpClientV1.py)
- [Java](https://github.com/pip-services-samples/client-beacons-java/blob/master/test/org/pipservices3/beacons/client/version1/BeaconsHttpClientV1Test.java)


All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 5. Implementing a Mock Client.](../step4)


<span class="hide-title-link">

### [Step 5. Implementing a Mock Client.](../step4)

</span>
