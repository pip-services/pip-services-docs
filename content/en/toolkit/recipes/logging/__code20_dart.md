
```json
{
  "took" : 7,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 8,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "cdcbd0d126af43258e23e47e29095edd",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:53:41.411514Z",
          "source" : "my_component_log",
          "level" : "FATAL",
          "correlation_id" : "123",
          "error" : {
            "type" : "_Exception",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Exception: Fatal error",
            "details" : null,
            "correlation_id" : null,
            "cause" : null,
            "stack_trace" : null
          },
          "message" : "Error that crash the process3"
        }
      },
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "ce4d75dfce62408bbf38058f6c7e3f56",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:54:53.912245Z",
          "source" : "my_component_log",
          "level" : "INFO",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Composite logger is configured and ready for using"
        }
      },
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "1b21d8025bb44bf9ab81dd53a520206c",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:55:53.197636Z",
          "source" : "my_component_log",
          "level" : "WARN",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Example warning"
        }
      },
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "d5193092586d4264a6845afa7a37c09f",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:56:08.568801Z",
          "source" : "my_component_log",
          "level" : "ERROR",
          "correlation_id" : "123",
          "error" : {
            "type" : "_Exception",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Exception: Example error",
            "details" : null,
            "correlation_id" : null,
            "cause" : null,
            "stack_trace" : null
          },
          "message" : "Error message"
        }
      },
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "1aa58931b5cd448d9b8c21c43efd55a8",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:56:11.693541Z",
          "source" : "my_component_log",
          "level" : "DEBUG",
          "correlation_id" : "123",
          "error" : null,
          "message" : "Debug info"
        }
      },
      {
        "_index" : "dart-2022.01.26",
        "_type" : "_doc",
        "_id" : "1148e374c85e4b2c9ebf7f2c28d10189",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:56:14.664195Z",
          "source" : "my_component_log",
          "level" : "FATAL",
          "correlation_id" : "123",
          "error" : {
            "type" : "_Exception",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Exception: Fatal error",
            "details" : null,
            "correlation_id" : null,
            "cause" : null,
            "stack_trace" : null
          },
          "message" : "Error that crash the process"
        }
      }
    ]
  }
}
```
