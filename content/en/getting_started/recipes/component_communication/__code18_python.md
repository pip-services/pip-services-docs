
```python
    def set_references(self, references: IReferences):
        """
        Sets references to dependent components.
        :param references: references to locate the component dependencies.
        """
        self.__logger.set_references(references)
        self.__connection_resolver.set_references(references)

        context_info = references.get_one_optional(Descriptor("pip-services", "context-info", "default", "*", "1.0"))
        if context_info is not None and self.__source is None:
            self.__source = context_info.name
        if context_info is not None and self.__instance is None:
            self.__instance = context_info.context_id
```
