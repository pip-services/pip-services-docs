---
type: docs
no_list: true
title: "Learning path"
linkTitle: "Learning path"
weight: 10
description: >-
     Fast track learning path.
---

### Course description

Pip.Services is a toolkit used to create microservices. This course provides the student with the basic elements necessary to use it efficiently. The student will learn how to create custom components, use available components, containerize an application, and connect to it via different clients. The course consists of seven modules that are taught in four days (32 hours).

### Day 1
1.	Introduction: Concepts, History, Architecture, Building Blocks       
a.	Brief introduction to Pip.Services         
b.	[Building blocks: a brief description](../../tutorials/beginner_tutorials/building_blocks/)         
c.	[Toolkit architecture](../../tutorials/beginner_tutorials/toolkit_architecture/) 

2.	Basic Patterns: Components, Configurations, Reflection, ...    
a.	[Three-tier architecture](../../tutorials/beginner_tutorials/three_tier_architecture/)        
b.	[Creating a component](../../tutorials/beginner_tutorials/component/creating_a_component/)         
c.	[Communicating between components](../../tutorials/beginner_tutorials/component/component_communication/)            
d.	[Configurations](../../tutorials/beginner_tutorials/configuration/configurations/)            

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Configuring connections](../../tutorials/beginner_tutorials/configuration/configuring_connections/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Configuring credentials](../../tutorials/beginner_tutorials/configuration/configuring_credentials/)
&nbsp;&nbsp;&nbsp;&nbsp;iii.	[Config file syntax](../../tutorials/beginner_tutorials/configuration/config_file_syntax/)     
&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Descriptors](../../tutorials/beginner_tutorials/component/descriptors/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Discovery services](../../tutorials/beginner_tutorials/discovery_services/)     
&nbsp;&nbsp;&nbsp;&nbsp;vi.	[Connection utilities](../../tutorials/beginner_tutorials/communication/connection_utils/)     
&nbsp;&nbsp;&nbsp;&nbsp;vii.	[Mustache templates](../../tutorials/beginner_tutorials/mustache_templates/)     
&nbsp;&nbsp;&nbsp;viii. [Reflection](../../tutorials/beginner_tutorials/reflection/)     

### Day 2

3.	Persistence:      
a.	Choose one of the following:      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Memory         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memory Persistence Component](../../tutorials/getting_started/tutorials/data_microservice/step3/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Redis](../../tutorials/beginner_tutorials/caching/redis/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memcached](../../tutorials/beginner_tutorials/caching/memcached/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	File storage      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [JSON file persistence](../../tutorials/beginner_tutorials/persistences/json_persistence/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.	Document storage            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MongoDB](../../tutorials/beginner_tutorials/persistences/mongodb_persistence/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	Relational storage     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MySQL](../../tutorials/beginner_tutorials/persistences/mysql_persistence/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[PostgreSQL](../../tutorials/beginner_tutorials/persistences/postgre_persistence/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[SQLServer](../../tutorials/beginner_tutorials/persistences/sqlserver_persistence/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Other      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Cassandra](../../tutorials/beginner_tutorials/persistences/cassandra/)                 
b.	[Designing persistence components](../../tutorials/beginner_tutorials/persistences/designing_persistence/) 

4.	Business Logic: Controllers, Observability, Synchronization, Caching, States...
a.	Controllers         
b.	Observability:              
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Logging](../../tutorials/beginner_tutorials/observability/logging/)            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Metrics          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Prometheus](../../tutorials/beginner_tutorials/observability/prometheus/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Datadog](../../tutorials/beginner_tutorials/observability/datadog/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Elasticsearch](../../tutorials/beginner_tutorials/observability/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Fluentd](../../tutorials/beginner_tutorials/observability/fluentd/)          
c.	Concurrency          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Caching](../../tutorials/beginner_tutorials/caching/caching_basic/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Locking](../../tutorials/beginner_tutorials/locks/memory_locks/)         

### Day 3

5.	Communication: REST, GRPC, Commandable       
a.	Synchronous       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[REST](../../tutorials/beginner_tutorials/communication/rest_service/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[gRPC](../../tutorials/beginner_tutorials/communication/grpc/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Commandable HTTP](../../tutorials/beginner_tutorials/communication/commandable_http/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Commandable gRPC](../../tutorials/beginner_tutorials/communication/commandable_grpc/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Command sets](../../tutorials/beginner_tutorials/communication/command_set/)          
b.	Asynchronous        
&nbsp;&nbsp;&nbsp;Choose one of the following:        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  [Messaging](../../tutorials/beginner_tutorials/messaging/messaging_basics/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.  [MQTT](../../tutorials/beginner_tutorials/messaging/mqtt/)            
&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Kafka](../../tutorials/beginner_tutorials/messaging/kafka/)         
&nbsp;&nbsp;&nbsp;&nbsp;iv.  [RabbitMQ](../../tutorials/beginner_tutorials/messaging/rabbitmq/)                

### Day 4
6.	Containers: Process, Docker, Serverless         
a.	Containers       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Process container](../../tutorials/beginner_tutorials/containers/process_container/)                  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Docker](../../getting_started/tutorials/microservice_dockerization/)          
b.	Serverless        
Choose one of the following:       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  AWS Lambda         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.  Microsoft Azure         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.  [Google Cloud Platform](../../tutorials/beginner_tutorials/containers/google_cloud_platform/)         
7.	Clients:           
a.	[REST client](../../tutorials/beginner_tutorials/communication/rest_client/)            
_Optional (Self-study)_        
a.	[Direct client](../../tutorials/beginner_tutorials/communication/direct_client/)               
b.	[Commandable HTTP](../../tutorials/beginner_tutorials/communication/commandable_http/#using-a-commandablehttpclient)           
c.	[gRPC](../../tutorials/beginner_tutorials/communication/grpc/#client)              
d.	[Commandable gRPC](../../tutorials/beginner_tutorials/communication/commandable_grpc/#client)      
e.	Mock      
