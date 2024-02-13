---
type: docs
title: "HttpRequestDetector"
linkTitle: "HttpRequestDetector"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Helper class that retrieves parameters from HTTP requests.
---

### Description

The HttpRequestDetector class allows you to retrieve parameters from HTTP requests. 

### Static methods

#### detectAddress
Detects the IP address from where the given HTTP request was received.

> `public static` String detectAddress(ContainerRequestContext req)

- **req**: ContainerRequestContext - HTTP request to process.
- **returns**: string - detected IP address (without a port). If no IP is detected - *null* will be returned.


#### detectBrowser
Detects the browser (using "user-agent") from where the given HTTP request was made.

> `public static` String detectBrowser(ContainerRequestContext req) 

- **req**: ContainerRequestContext - HTTP request to process.
- **returns**: String - detected browser. Detectable browsers: "chrome", "msie", "firefox", "safari". Otherwise - "unknown" will be returned.


#### detectPlatform
Detects the platform (using "user-agent") from which the given HTTP request was made.

> `public static` String detectPlatform(ContainerRequestContext req)

- **req**: ContainerRequestContext - HTTP request to process.
- **returns**: string - detected platform and version. Detectable platforms: "mobile", "iphone",
"ipad",  "macosx", "android",  "webos", "mac", "windows". Otherwise - "unknown" will
be returned.


#### detectServerHost
Detects the host name of the request's destination server.

> `public static` String detectServerHost(ContainerRequestContext req) throws UnknownHostException

- **req**: ContainerRequestContext - HTTP request to process.
- **returns**: String - destination server's host name.


#### detectServerPort
Detects the request's destination port number.

> `public static` int detectServerPort(ContainerRequestContext req)

- **req**: ContainerRequestContext - HTTP request to process.
- **returns**: int - detected port number or *80* (if none are detected).
