---
type: docs
no_list: true
title: "Step 4. Authentication and sessions"
linkTitle: "Step 4. Authentication and sessions" 
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

In most cases, access to an application's (service's) resources is granted only after users authenticate themselves in the system. Authentication is the process of checking the validity of the identifier provided by a user. A successful authentication (besides establishing a trusted relationship and generating a session key) is usually also followed up by user authorization. This second step grants the user access rights to an approved set of resources, deemed necessary for the user to perform his/her tasks.

Just like in the previous step, we'll be placing the files of this step in the **operation/version1** folder.

Let's start by defining a data model for storing user information within a session. Create a new file named **SessionUserV1.py** with the following code:

{{< tabsection >}}
  {{< include "../__code5_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code5_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

This data model will contain all necessary information about the user: the session's ID, login, username, list of rolls, etc.

We'll be defining our operations for managing sessions and authenticating users in a file named **SessionOperationsV1.py**. A listing of this file's code is presented below:

{{< tabsection >}}
  {{< include "../__code6_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code6_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

This class contains the main operations for managing sessions, which allow us to load existing sessions, create new sessions, close existing sessions, and also authenticate users. This class depends on four microservices - Accounts, Passwords, Roles, and Sessions - each of which is responsible for a certain part of the class's logic.


The **signup** and **signin** methods perform registration of new users and authentication of existing ones, respectively. Upon successful registration or authorization, the handlers of these operations open a new session as the finishing step of these methods.


The **signout** method closes sessions when users leave the system, or automatically when the session expires.


The **load_session** interceptor checks a session's validity, and whether or not it even exists. The interceptor checks the request's header for a session ID and, if one is found, uses it to retrieve data about the session from the Sessions microservice. If the session is expired or incorrect, an error will be returned. If everything's all right, information about the user and the session are extracted and attached to the request, and a "green light" is given for further processing.


To perform these operations, our microservice needs to be able to interact with the microservices it depends on. This communication is made simple using standard clients, the links to which are set in the setReferences method.


The authorization mechanism will be responsible for limiting access to resources, depending on the roles a user has been assigned. This part's implementation will be discussed in [Step 5 - Authorization](../step4).

<span class="hide-title-link">

### [Step 5. Authorization](../step4)

</span>
