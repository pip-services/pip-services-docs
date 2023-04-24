---
type: docs
no_list: true
title: "Step 2. Setting up the project structure"
linkTitle: "Step 2. Setting up" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Let's do some small preparation of the project before we start writing the client library.

First, create the following directory structure to keep the source code organized:


{{< tabsection isMarkdown=true >}}

```
/src
└───/version1
/test
└───/version1

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/src
└───/version1
/test
└───/version1
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/version1
/test
└───/version1
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/lib
└───/version1
/test
└───/version1
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```
/src
└───/version1
/test
└───/version1
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}
Not available
{{< /tabsection >}}


Prepare the initial project files, as described in the tutorial on [creating a data microservice](../../data_microservice), for the language of your choice and perform the initialization process.


Since data is transferred between the client and the microservice using a specific protocol, this data must be defined for the client to work correctly. Some developers prefer to export general data structures, define external interfaces in a separate library, and use it on the client and on the server. However, to minimize the amount of libraries and simplify dependencies, we prefer to just copy the data structure from the microservice to the client library. This won't cause any additional problems, since after changing the external interface, the client should be updated and retested anyways. 


Copy the files from the microservice's data folder into the **src/data/version1** folder of our client project. The microservice's source code can be found at the following links:

- [Node.js](https://github.com/pip-services-samples/service-beacons-nodex/tree/main/src/data/version1)
- [.NET](https://github.com/pip-services-samples/service-beacons-dotnet/tree/master/src/Interface/Data/Version1)
- [Golang](https://github.com/pip-services-samples/service-beacons-goxx/tree/main/data/version1)
- [Dart](https://github.com/pip-services-samples/service-beacons-dart/tree/master/lib/src/data/version1)
- [Python](https://github.com/pip-services-samples/service-beacons-python/tree/master/service_beacons_python/data/version1)
- [Java](https://github.com/pip-services-samples/service-beacons-java/tree/master/data-beacons/src/org/pipservices3/beacons/data/version1)


For "strongly typed" languages (e.g. Dart), you'll have to import the data model files from the microservice using the import directive, instead of just copying the directory over. This will guarantee an exact type match.

Now we're ready to start writing our client library. When you're ready, continue on to [Step 3. Designing a Direct Client](../step2).

<span class="hide-title-link">

### [Step 3. Designing a Direct Client.](../step2)

</span>
