
```json
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
        "_index" : "log123-20220126",
        "_type" : "log_message",
        "_id" : "bf18e9659fb043668f8c006d4e9aba26",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:28:10.0825714Z",
          "source" : "my_component_log",
          "level" : 4,
          "correlation_id" : "123",
          "error" : {
            "type" : "",
            "category" : "",
            "status" : 0,
            "code" : "",
            "message" : "",
            "details" : null,
            "correlation_id" : "",
            "cause" : "",
            "stack_trace" : ""
          },
          "message" : "Composite logger is configured and ready for using"
        }
      },
      {
        "_index" : "log123-20220126",
        "_type" : "log_message",
        "_id" : "25cc4c2c81984a348f640e7435891e2b",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:28:10.0832355Z",
          "source" : "my_component_log",
          "level" : 3,
          "correlation_id" : "123",
          "error" : {
            "type" : "",
            "category" : "",
            "status" : 0,
            "code" : "",
            "message" : "",
            "details" : null,
            "correlation_id" : "",
            "cause" : "",
            "stack_trace" : ""
          },
          "message" : "Example warning"
        }
      },
      {
        "_index" : "log123-20220126",
        "_type" : "log_message",
        "_id" : "7e671ce009be46078272eae6dcab0328",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:28:10.0832355Z",
          "source" : "my_component_log",
          "level" : 2,
          "correlation_id" : "123",
          "error" : {
            "type" : "",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Example error",
            "details" : null,
            "correlation_id" : "",
            "cause" : "",
            "stack_trace" : ""
          },
          "message" : "Error message"
        }
      },
      {
        "_index" : "log123-20220126",
        "_type" : "log_message",
        "_id" : "f9879db7638947ab8ae43c475c6d8e78",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:28:10.0846687Z",
          "source" : "my_component_log",
          "level" : 5,
          "correlation_id" : "123",
          "error" : {
            "type" : "",
            "category" : "",
            "status" : 0,
            "code" : "",
            "message" : "",
            "details" : null,
            "correlation_id" : "",
            "cause" : "",
            "stack_trace" : ""
          },
          "message" : "Debug info"
        }
      },
      {
        "_index" : "log123-20220126",
        "_type" : "log_message",
        "_id" : "4261be380da94e18923f726d60a91bc7",
        "_score" : 1.0,
        "_source" : {
          "time" : "2022-01-26T23:28:10.0846687Z",
          "source" : "my_component_log",
          "level" : 1,
          "correlation_id" : "123",
          "error" : {
            "type" : "",
            "category" : "Unknown",
            "status" : 500,
            "code" : "UNKNOWN",
            "message" : "Fatal error",
            "details" : null,
            "correlation_id" : "",
            "cause" : "",
            "stack_trace" : ""
          },
          "message" : "Error that crash the process"
        }
      }
    ]
  }
}
```
