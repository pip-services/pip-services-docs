---
type: docs
no_list: true
title: "Step 7. Testing of operations"
linkTitle: "Step 7. Testing" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Before we integrate our new facade with the actual system, we should put it through its paces and thoroughly test it. So let's develop a set of tests and helper elements for testing all of the operations registered in the facade. We'll start off by creating a set of helper classes. One will test our dependencies, another will test how well the facade works with users, and the last one will contain a set of test users. All of these files will be placed in the folder **/test/fixtures**.

The file for testing dependencies will be called **TestReferences** and will allow us to test how well the facade is able to work with the microservices it depends on. This file's code is listed below:

{{< tabsection >}}
  {{< include "../__code9_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Now, let's create a file with a test client, which will help us test our user and session related operations. Place the code below into a file named **RestClientTest**:

{{< tabsection >}}
  {{< include "../__code10_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code10_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Lastly, define some test users in a file named **TestUsers.py**, as shown below:

{{< tabsection >}}
  {{< include "../__code11_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code11_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Now we can move on to the tests themselves. Create the following files in the folder **test/operations**:

**test_BeaconsRoutesV1** - for testing business logic operations of the Beacons microservice:

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
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**test_SessionsRoutesV1** - for testing user and session related operations:

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
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Run the tests using the following command:

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
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once all the tests pass successfully, you can move on to [Step 8 - Running the facade](../step7) - to learn how to deploy all of these microservices using Docker.


<span class="hide-title-link">

### [Step 8 - Running the facade](../step7)

</span>
