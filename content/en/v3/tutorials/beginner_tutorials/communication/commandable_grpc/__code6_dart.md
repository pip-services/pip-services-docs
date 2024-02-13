
```dart

class MyDataCommandSet extends CommandSet {
  IMyDataController _controller;

  MyDataCommandSet(IMyDataController controller) : _controller = controller {
    addCommand(_makePageByFilterCommand());
    addCommand(_makeGetOneByIdCommand());
    addCommand(_makeCreateCommand());
    addCommand(_makeUpdateCommand());
    addCommand(_makeDeleteByIdCommand());
  }

  ICommand _makePageByFilterCommand() {
    return Command(
        'get_my_datas',
        ObjectSchema(true)
            .withOptionalProperty('filter', FilterParamsSchema())
            .withOptionalProperty('paging', PagingParamsSchema()),
        (String? correlationId, Parameters args) {
      var filter = FilterParams.fromValue(args.get('filter'));
      var paging = PagingParams.fromValue(args.get('paging'));
      return _controller.GetPageByFilterAsync(correlationId, filter, paging);
    });
  }

  ICommand _makeGetOneByIdCommand() {
    return Command('get_my_data_by_id',
        ObjectSchema(true).withRequiredProperty('my_data_id', TypeCode.String),
        (String? correlationId, Parameters args) {
      var id = args.getAsString('my_data_id');
      return _controller.GetOneByIdAsync(correlationId, id);
    });
  }

  ICommand _makeCreateCommand() {
    return Command('create_my_data',
        ObjectSchema(true).withRequiredProperty('my_data', MyDataSchema()),
        (String? correlationId, Parameters args) {
      var entity = MyData();
      entity.fromJson(args.get('my_data'))
      return _controller.CreateAsync(correlationId, entity);
    });
  }

  ICommand _makeUpdateCommand() {
    return Command('update_my_data',
        ObjectSchema(true).withRequiredProperty('my_data', MyDataSchema()),
        (String? correlationId, Parameters args) {
      var entity = MyData();
      entity.fromJson(args.get('my_data'));
      return _controller.UpdateAsync(correlationId, entity);
    });
  }

  ICommand _makeDeleteByIdCommand() {
    return Command('delete_my_data',
        ObjectSchema(true).withRequiredProperty('my_data_id', TypeCode.String),
        (String? correlationId, Parameters args) {
      var id = args.getAsString('my_data_id');
      return _controller.DeleteByIdAsync(correlationId, id);
    });
  }
}
```
