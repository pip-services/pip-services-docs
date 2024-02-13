---
type: docs
title: "HttpRequestDetector"
linkTitle: "HttpRequestDetector"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Helper class that retrieves parameters from HTTP requests.
---

### Description

The HttpRequestDetector class allows you to retrieve parameters from HTTP requests. 

### Methods

#### DetectAddress
Detects the IP address from where the given HTTP request was received.

> DetectAddress(req *http.Request) string

- **req**: *http.Request - HTTP request to process.
- **returns**: string - detected IP address (without a port). If no IP is detected - *nil* will be returned.


#### DetectBrowser
Detects the browser (using "user-agent") from where the given HTTP request was made.

> DetectBrowser(req *http.Request) string

- **req**: *http.Request - HTTP request to process.
- **returns**: string - detected browser. Detectable browsers: "chrome", "msie", "firefox", "safari". Otherwise - "unknown" will be returned.


#### DetectPlatform
Detects the platform (using "user-agent") from which the given HTTP request was made.

> DetectPlatform(req *http.Request) string

- **req**: *http.Request - HTTP request to process.
- **returns**: string - detected platform and version. Detectable platforms: "mobile", "iphone",
"ipad",  "macosx", "android",  "webos", "mac", "windows". Otherwise - "unknown" will
be returned.


#### DetectServerHost
Detects the host name of the request's destination server.

> DetectServerHost(req *http.Request) string

- **req**: *http.Request - HTTP request to process.
- **returns**: string - destination server's host name.


#### DetectServerPort
Detects the request's destination port number.

> DetectServerPort(req *http.Request) string

- **req**: *http.Request - HTTP request to process.
- **returns**: string - detected port number or *80* (if none are detected).

