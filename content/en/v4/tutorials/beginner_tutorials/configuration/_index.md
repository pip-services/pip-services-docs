---
type: docs
title: "Configuration"
linkTitle: "Configuration" 
weight: 80
no_list: true
exclude_from_list: true
---
---

### [Component configuration](component_configuration)

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.

### [Config File Syntax](config_file_syntax)

In this tutorial you will learn how to create yml configuration files. First, we will see a general case. Then, we will show examples of the most common components in PIP.Services. These examples are valid for any of the six languages used by the toolkit.

### [Configurations](configurations)

In this tutorial, we will see how to create configurations using the ConfigParams class, and how to read those configurations when they contain a parameter called "name" or "id", and when they have an "options" section.

### [Configuring Connections](configuring_connections)
In this tutorial, you will learn how to configure connections with the ConnectionParams component and perform CRUD operations with them. First, we will see different ways to create connections, such as from a constructor, a tuple, a string, and a ConfigParams object. Then, we will see how to extract, modify and delete different fields in those connections.

### [Configuring Credentials](configuring_credentials)
In this tutorial, you will understand how to operate with the CredentialParams component by performing CRUD operations. We will begin by learning to create an instance of this component using its constructor, a tuple, a string, and the ConfigParam class. Then, we will understand how to extract and update the values of credential parameters stored in the component, and delete those parameters.

### [Deployment Time Configuration](deployment_configuration)
How to set up and change your configurations at deployment time. In this tutorial, you will learn how to configure at deployment time an application based on Pip.Services components

### [Microservice configuration](microservice_configuration)

This tutorial will explore the microservice configuration process. For this, we will first see an example that contains the main configuration aspects that most microservices have. Then, we will analyze how this process triggers and works. Finally, we will summarize what was learned.
