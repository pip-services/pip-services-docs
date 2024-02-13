---
type: docs
title: "Context"
linkTitle: "Context"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Helper class that allows add behaviour for context.
---

### Types

#### ContextShutdownChan
ContextShutdownChan a channel to send default context feedback
> type ContextShutdownChan chan int8

#### ContextShutdownWithErrorChan
ContextShutdownWithErrorChan a channel to send context feedback with error
> type ContextShutdownWithErrorChan chan error

#### ContextFeedbackWithCustomDataChan
ContextFeedbackWithCustomDataChan a channel to send context feedback with specific data.
> type ContextFeedbackWithCustomDataChan[T any] chan T

#### ContextValueType
ContextValueType an enum to describe specific context feedback channel
	Possible values:
		- ContextShutdownChanType
		- ContextShutdownWithErrorChanType
		- ContextFeedbackChanWithCustomDataType
> type ContextValueType string

### Methods 

#### AddShutdownChanToContext
AddShutdownChanToContext wrap context with ContextFeedbackChan

> AddShutdownChanToContext(ctx context.Context, channel [ContextShutdownChan](#contextshutdownchan)) (context.Context, bool)

- **ctx**: context.Context - parent context.
- **channel**: ContextShutdownChan - channel to put into context.
- **returns**: (context.Context, bool) - a context with value and bool value true if channel is not nil or false

#### AddErrShutdownChanToContext
AddErrShutdownChanToContext wrap context with ContextFeedbackChanWithError

> AddErrShutdownChanToContext(ctx context.Context, channel [ContextShutdownWithErrorChan](#contextshutdownwitherrorchan)) (context.Context, bool)

- **ctx**: context.Context - parent context.
- **channel**: [ContextShutdownWithErrorChan](#contextshutdownwitherrorchan) - channel to put into context.
- **returns**: (context.Context, bool) - is a context with value and bool value true if channel is not nil or false.

#### AddCustomDataChanToContext
AddCustomDataChanToContext wrap context with ContextFeedbackChanWithCustomData
T is a custom data type
> AddCustomDataChanToContext[T any](ctx context.Context, channel [ContextFeedbackWithCustomDataChan](#contextfeedbackwithcustomdatachan)[T]) (context.Context, bool)

- **ctx**: context.Context - parent context.
- **channel**: [ContextFeedbackWithCustomDataChan](#contextfeedbackwithcustomdatachan)[T] - channel to put into context.
- **returns**: (context.Context, bool) - bool true if channel is not nil or false.

#### SendShutdownSignal 
SendShutdownSignal sends interrupt signal up to the context owner

> SendShutdownSignal(ctx context.Context) bool

- **ctx**: context.Context - parent context.
- **returns**: bool - true if signal sends successful or false

#### SendShutdownSignalWithErr
SendShutdownSignalWithErr sends error and interrupt signal up to the context owner

> SendShutdownSignalWithErr(ctx context.Context, err error) bool

- **ctx**: context.Context - parent context.
- **returns**: bool - true if signal sends successful or false.

#### SendSignalWithCustomData
SendSignalWithCustomData sends custom data and interrupt signal up to the context owner.
T custom data
> SendSignalWithCustomData[T any](ctx context.Context, data T) bool

- **ctx**: context.Context - is a current context.
- **returns**: bool - bool true if signal sends successful or false.

#### DefaultErrorHandlerWithShutdown
DefaultErrorHandlerWithShutdown is a default error handler method which catch panic,
parse error and send shutdown signal to main container.

Example: 
```go
func MyFunc(ctx context.Context) {
	defer DefaultErrorHandlerWithShutdown(ctx)
	...
	panic("some error")
}
```
> DefaultErrorHandlerWithShutdown(ctx context.Context)

- **ctx**: context.Context - is a current context.