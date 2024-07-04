
```ts
{
  "took" : 3,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 5,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "log-20220127",
        "_type" : "_doc",
        "_id" : "10399e390171415ca122dbb307f67eea",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:12:01.954Z",
          "level" : "INFO",
          "source" : "my_component_log",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Composite logger is configured and ready for using"
        }
      },
      {
        "_index" : "log-20220127",
        "_type" : "_doc",
        "_id" : "ed1d25a2051c444783f4539861dd44f1",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:12:01.956Z",
          "level" : "WARN",
          "source" : "my_component_log",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Example warning"
        }
      },
      {
        "_index" : "log-20220127",
        "_type" : "_doc",
        "_id" : "0cc6fdd3d16447e6a9fa5f0ec111edc9",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:12:01.957Z",
          "level" : "ERROR",
          "source" : "my_component_log",
          "correlation_id" : "123",
          "error" : {
            "type" : "Error",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Example error",
            "stack_trace" : "Error: Example error\n    at C:\\Users\\user1\\OneDrive\\Desktop\\examples\\node\\obj\\elastic.js:35:29\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\Users\\user1\\OneDrive\\Desktop\\examples\\node\\obj\\elastic.js:5:58)"
          },
          "message" : "Error message"
        }
      },
      {
        "_index" : "log-20220127",
        "_type" : "_doc",
        "_id" : "039cf650b46b4ca49c513df617055dc3",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:12:01.958Z",
          "level" : "DEBUG",
          "source" : "my_component_log",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Debug info"
        }
      },
      {
        "_index" : "log-20220127",
        "_type" : "_doc",
        "_id" : "7f8e1ef9a82643f382cffa52f9110ce3",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:12:01.959Z",
          "level" : "FATAL",
          "source" : "my_component_log",
          "correlation_id" : "123",
          "error" : {
            "type" : "Error",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Fatal error",
            "stack_trace" : "Error: Fatal error\n    at C:\\Users\\user1\\OneDrive\\Desktop\\examples\\node\\obj\\elastic.js:37:29\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\Users\\user1\\OneDrive\\Desktop\\examples\\node\\obj\\elastic.js:5:58)"
          },
          "message" : "Error that crash the process"
        }
      }
    ]
  }
}

```
