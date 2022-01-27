
```ts
logger.info("123", "Composite logger is configured and ready for using");
logger.warn("123", "Example warning");
logger.error("123", new Error("Example error"), "Error message");
logger.debug("123", "Debug info");
logger.fatal("123", new Error("Fatal error"), "Error that crash the process");
```
