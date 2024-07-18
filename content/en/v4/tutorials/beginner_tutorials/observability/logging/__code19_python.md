
```python
logger.info(context, "Composite logger is configured and ready for using")
logger.warn(context, "Example warning")
logger.error(context, Exception("Example error"), "Error message")
logger.debug(context, "Debug info")
logger.fatal(context, Exception("Fatal error"), "Error that crash the process")
```
