---
title: "Configuring credentials"
linkTitle: "Configuring credentials"
weight: 10
description: >-
     How to configure credentials using Pip.Services.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways
<table class="full-width-table">
  <tr>
    <td>CredentialParams </td>
    <td>Component used to store credential parameters and their values.</td>
  </tr>
  <tr>
    <td>ConfigParams</td>
    <td>Parent class that provides several useful methods.</td>
  </tr>
  <tr>
    <td>StringValueMap</td>
    <td>Class that provides the structure for CredentialParams.</td>
  </tr>
</table>
### Introduction
In this tutorial, you will understand how to operate with the CredentialParams component by performing CRUD operations. We will begin by learning to create an instance of this component using its constructor, tuples, a string, and the ConfigParam class. Then, we will understand how to extract and update the values of credential parameters stored in the component, and delete those parameters.
### Pre-requisites
In order to use the CredentialParams component, we need to import it first. This can be done with the following command:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

### CRUD operations
Once the component has been imported, we can do different CRUD operations by using the methods of the class and those inherited from the parent classes (ConfigParams and StringValueMap).
#### Create
Pip.Services offers several ways to create a CredentialParams object. Each of them is explained in the following sections.
##### a) Using the constructor
One method used to create a CredentialParams object is via its constructor. This can be done in two different manners. The first is by inputting a ConfigParams object containing the credential parameters and their values. The second consists of creating a CredentialParams object and using the set methods available for the most common credentials such as username and password, or the put() method from its parent class. The following examples show how to do this.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

##### b) Using tuples
We can also define our credential parameters in the form of a tuple. For example:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

##### c) Using a string
Similar to the previous option, we can also use a string to define our credential parameters. The syntax is: 

**parameter_name : parameter_value**

An example of this approach is:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

##### d) Using a ConfigParams object
Also, we can create a ConfigParams object and use the fromConfig() method. In this case, we need to use a section named credential, which will include our parameters and their values, and add the ConfigParams object as an input to that method. The syntax for the parameters is as follows:
credential.parameter_name
which can be seen in the following example:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

##### e) Using the manyFromConfig() method
This method allows us to define several credential parameter sets in one CredentialParams object. For this, we use a section named credentials that contains the different sets. The syntax is as follows:
credentials.credential_set_name.parameter_name
Then, at instantiation, the CredentialParams object will take all credentials belonging to this section.
The following example shows how to do this. As we can see from it, the ConfigParams object contains both credential and connection parameters. However, the CredentialParams object distinguishes between them and only takes the credential sets in the form of a list.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

##### Adding a section
We can add a section by using the addSection() method inherited from the ConfigParams class. This method accepts the name of the section and a ConfigParams object containing the fields of the section and their values as inputs.  The following example shows how to do this:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

#### Read
To extract the values of the different credential parameters, we can use the get methods available for the most common credential parameters such as username, password, and access key. The following examples show how to use them:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

Additionally, we can use the get method, which takes the name of the credential parameter as its input. 

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

#### Update

There are several ways to update a parameter’s value. One of them is to use the set method for the parameter with the new value as input. For example:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

will reset the value of the password to ‘password2’.

Another way is to use the put() method, which asks for the name of the parameter and its new value as inputs:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

Or, to use the setAsObject() method, which also takes the name of the credential parameter and its value as inputs.

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

Finally, we can use the override() method, which returns a new instance of CredentialParams with the old and updated values. The following example explains how to use it:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

#### Delete

To delete a credential parameter from a CredentialParams object, we can use the remove() method, which takes the parameter’s name as input. This example explains how to use it:

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have learned how to create CredentialParams components and manage them by extracting and updating the stored values of the credentials, and deleting their parameters.
