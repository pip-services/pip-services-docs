
```ts
logger.info(ctx, "Composite logger is configured and ready for using");
logger.warn(ctx, "Example warning");
logger.error(ctx, new Error("Example error"), "Error message");
logger.debug(ctx, "Debug info");
logger.fatal(ctx, new Error("Fatal error"), "Error that crash the process");
```
