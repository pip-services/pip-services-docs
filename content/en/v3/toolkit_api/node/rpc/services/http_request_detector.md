---
type: docs
title: "HttpRequestDetector"
linkTitle: "HttpRequestDetector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Helper class that retrieves parameters from HTTP requests.
---

### Description

The HttpRequestDetector class allows you to retrieve parameters from HTTP requests. 

### Static methods

#### detectAddress
Detects the IP address from where the given HTTP request was received.

> `public static` detectAddress(req: any): string

- **req**: any - HTTP request to process.
- **returns**: string - detected IP address (without a port). If no IP is detected - *null* will be returned.


#### detectBrowser
Detects the browser (using "user-agent") from where the given HTTP request was made.

> `public static` detectBrowser(req: any) -> string

- **req**: any - HTTP request to process.
- **returns**: string - detected browser. Detectable browsers: "chrome", "msie", "firefox", "safari". Otherwise - "unknown" will be returned.


#### detectPlatform
Detects the platform (using "user-agent") from which the given HTTP request was made.

> `public static` detectPlatform(req: any): string

- **req**: any - HTTP request to process.
- **returns**: string - detected platform and version. Detectable platforms: "mobile", "iphone",
"ipad",  "macosx", "android",  "webos", "mac", "windows". Otherwise - "unknown" will
be returned.


#### detectServerHost
Detects the host name of the request's destination server.

> `public static` detectServerHost(req: any): string

- **req**: any - HTTP request to process.
- **returns**: string - destination server's host name.


#### detectServerPort
Detects the request's destination port number.

> `public static` detectServerPort(req: any): string

- **req**: any - HTTP request to process.
- **returns**: string - detected port number or *80* (if none are detected).
