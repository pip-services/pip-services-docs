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
b.	[Building blocks: a brief description](../../beginner_tutorials/building_blocks/)         
c.	[Toolkit architecture](../../beginner_tutorials/toolkit_architecture/) 

2.	Basic Patterns: Components, Configurations, Reflection, ...    
a.	[Three-tier architecture](../../beginner_tutorials/three_tier_architecture/)        
b.	[Creating a component](../../beginner_tutorials/component/creating_a_component/)         
c.	[Communicating between components](../../beginner_tutorials/component/component_communication/)            
d.	[Configurations](../../beginner_tutorials/configuration/configurations/)            

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Configuring connections](../../beginner_tutorials/configuration/configuring_connections/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Configuring credentials](../../beginner_tutorials/configuration/configuring_credentials/)         
&nbsp;&nbsp;&nbsp;&nbsp;iii.	[Config file syntax](../../beginner_tutorials/configuration/config_file_syntax/)              
&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Descriptors](../../beginner_tutorials/component/descriptors/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Discovery services](../../beginner_tutorials/discovery_services/)     
&nbsp;&nbsp;&nbsp;&nbsp;vi.	[Connection utilities](../../beginner_tutorials/communication/connection_utils/)     
&nbsp;&nbsp;&nbsp;&nbsp;vii.	[Mustache templates](../../beginner_tutorials/mustache_templates/)     
&nbsp;&nbsp;&nbsp;viii. [Reflection](../../beginner_tutorials/component/reflection/)     

### Day 2

3.	Persistence:      
a.	Choose one of the following:      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Memory         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memory Persistence Component](../../advanced_tutorials/data_microservice/step3/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Redis](../../beginner_tutorials/caching/redis/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memcached](../../beginner_tutorials/caching/memcached/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	File storage      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [JSON file persistence](../../beginner_tutorials/persistences/json_persistence/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.	Document storage            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MongoDB](../../beginner_tutorials/persistences/mongodb_persistence/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	Relational storage     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MySQL](../../beginner_tutorials/persistences/mysql_persistence/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[PostgreSQL](../../beginner_tutorials/persistences/postgre_persistence/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[SQLServer](../../beginner_tutorials/persistences/sqlserver_persistence/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Other      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Cassandra](../../beginner_tutorials/persistences/cassandra/)                 
b.	[Designing persistence components](../../beginner_tutorials/persistences/designing_persistence/) 

4.	Business Logic: Services, Observability, Synchronization, Caching, States...       
a.	Services         
b.	Observability:              
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Logging](../../beginner_tutorials/observability/logging/)            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Metrics          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Prometheus](../../beginner_tutorials/observability/prometheus/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Datadog](../../beginner_tutorials/observability/datadog/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Elasticsearch](../../beginner_tutorials/observability/elasticsearch)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Fluentd](../../beginner_tutorials/observability/fluentd/)          
c.	Concurrency          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Caching](../../beginner_tutorials/caching/caching_basic/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Locking](../../beginner_tutorials/locks/memory_locks/)         

### Day 3

5.	Communication: REST, GRPC, Commandable       
a.	Synchronous       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[REST](../../beginner_tutorials/communication/rest_service/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[gRPC](../../beginner_tutorials/communication/grpc/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Commandable HTTP](../../beginner_tutorials/communication/commandable_http/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Commandable gRPC](../../beginner_tutorials/communication/commandable_grpc/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Command sets](../../beginner_tutorials/communication/command_set/)          
b.	Asynchronous        
&nbsp;&nbsp;&nbsp;Choose one of the following:        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  [Messaging](../../beginner_tutorials/messaging/messaging_basics/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.  [MQTT](../../beginner_tutorials/messaging/mqtt/)            
&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Kafka](../../beginner_tutorials/messaging/kafka/)         
&nbsp;&nbsp;&nbsp;&nbsp;iv.  [RabbitMQ](../../beginner_tutorials/messaging/rabbitmq/)                

### Day 4
6.	Containers: Process, Docker, Serverless         
a.	Containers       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Process container](../../beginner_tutorials/containers/process_container/)                  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Docker](../../advanced_tutorials/microservice_dockerization/)          
b.	Serverless        
Choose one of the following:       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  AWS Lambda         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.  Microsoft Azure         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.  [Google Cloud Platform](../../beginner_tutorials/containers/google_cloud_platform/)         
7.	Clients:           
a.	[REST client](../../beginner_tutorials/communication/rest_client/)            
_Optional (Self-study)_        
a.	[Direct client](../../beginner_tutorials/communication/direct_client/)               
b.	[Commandable HTTP](../../beginner_tutorials/communication/commandable_http/#using-a-commandablehttpclient)           
c.	[gRPC](../../beginner_tutorials/communication/grpc/#client)              
d.	[Commandable gRPC](../../beginner_tutorials/communication/commandable_grpc/#client)      
e.	Mock      
