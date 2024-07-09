---
type: docs
no_list: true
title: "Configuring credentials"
linkTitle: "Configuring credentials"
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
  <tr>
    <td>MemoryCredentialStore</td>
    <td>Class used to create a store in memory for credential parameters.</td>
  </tr>
</table>


### Introduction

In this tutorial, you will understand how to operate with the CredentialParams component by performing CRUD operations. We will begin by learning how to create an instance of this component using its constructor, a tuple, a string, and the ConfigParam class. Then, we will understand how to extract and update the values of credential parameters stored in the component, and delete those parameters.

### CredentialParams

#### Pre-requisites
In order to use the CredentialParams component, we need to import it first. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
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
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### b) Using a tuple

We can also define our credential parameters in the form of a tuple by using the fromTuple() method. For example:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### c) Using a string

Similar to the previous option, we can also use a string to define our credential parameters via the fromString() method. The syntax of the string is: 

**parameter_name : parameter_value**

An example of this approach is:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### d) Using a ConfigParams object

Also, we can create a ConfigParams object and use the fromConfig() method. In this case, we need to use a section named credential, which will include our parameters and their values, and add the ConfigParams object as an input to that method. The syntax for the parameters is as follows:

**credential.parameterName**

And, the following example explains how to use this method:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### e) Using the manyFromConfig() method
This method allows us to define several credential parameter sets in one CredentialParams object. For this, we use a section named credentials that contains the different sets. The syntax is as follows:

**credentials.credentialSetName.parameterName**

Then, at instantiation, the CredentialParams object will take all credentials belonging to this section.

The following example shows how to do this. As we can see from it, the ConfigParams object contains both credential and connection parameters. However, the CredentialParams object distinguishes between them and only takes the credential sets in the form of a list.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}
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
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
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
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Additionally, we can use the get method, which takes the name of the credential parameter as its input. 

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Update

There are several ways to update a parameter's value. One of them is to use the set method for the parameter with the new value as input. For example:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

will reset the value of the password to 'password2'.

Another way is to use the put() method, which asks for the name of the parameter and its new value as inputs:

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Or, to use the setAsObject() method, which also takes the name of the credential parameter and its value as inputs.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Finally, we can use the override() method, which returns a new instance of CredentialParams with the old and updated values. The following example explains how to use it:

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Delete

To delete a credential parameter from a CredentialParams object, we can use the remove() method, which takes the parameter's name as input. This example explains how to use it:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### MemoryCredentialStore

The MemoryCredentialStore component is used to create a store for credential parameters. In it, each set of credentials is identified by a common key. The following sections explain how to create an instance of this class, add credentials to it, and modify and delete those credentials.

#### Pre-requisites

In order to create a MemoryCredentialStore component, we need to import this class first. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Creating and configuring a store

To create a MemoryCredentialStore, we need to instantiate this class. This presents us with two different options: we can create a ConfigParams object containing the configuration parameters and call it from the constructor

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

or we can instantiate the store without any input parameter and use the readCredentials() method to add the credentials:

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding new credentials

To add new credentials to a store, we use the store() method. This method accepts the correlationId, the identification key and a CredentialParams object containing the set of credentials as inputs. In the example below, we add a new set of credentials identified by a key with value "key3".

{{< tabsection >}}
  {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code18_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Reading the credentials

The lookup() method is used to retrieve stored credentials. It takes a correlationId and a key as input parameters and returns a ConfigParams object containing the retrieved credentials. If no credentials were found, it returns an empty ConfigParams object.

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code19_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Updating the credentials

Credentials can be updated with the store() method. This method requires the correlationId, the key of the set we want to update and a CredentialParams object containing the updated parameters as inputs. In the following example, we change the value of the user to "joeve3V2". 

{{< tabsection >}}
  {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code20_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Alternatively, we can change all the stored values with the readCredentials() method. In this case, all the stored sets will be deleted and the new ones stored. In the example below, we replace the set identified by "key1" with new values, delete the sets identified by "key2" and "key3", and add a new set identified by "key4".

{{< tabsection >}}
  {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code21_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Deleting the credentials

We can delete a set of credentials identified by a common key by placing a Null/None value as the CredentialParams object in the store method. The following example shows how to do this:

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code22_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### CredentialResolver

### Wrapping up

In this tutorial, we have learned how to create CredentialParams components and manage them by extracting and updating the stored values of the credentials, and deleting their parameters. We have also seen how to create and work with a MemoryCredentialStore component. 
