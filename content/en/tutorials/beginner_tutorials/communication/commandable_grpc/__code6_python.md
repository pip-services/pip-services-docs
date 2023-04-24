
```python
from pip_services3_commons.commands.Command import Command
from pip_services3_commons.commands.CommandSet import CommandSet
from pip_services3_commons.commands.ICommand import ICommand
from pip_services3_commons.convert.TypeCode import TypeCode
from pip_services3_commons.data.FilterParams import FilterParams
from pip_services3_commons.data.PagingParams import PagingParams
from pip_services3_commons.data.DataPage import DataPage
from pip_services3_commons.validate.FilterParamsSchema import FilterParamsSchema
from pip_services3_commons.validate.ObjectSchema import ObjectSchema
from pip_services3_commons.validate.PagingParamsSchema import PagingParamsSchema

from data.MyData import MyData
from data.MyDataSchema import MyDataSchema
from logic import IMyDataController


class MyDataCommandSet(CommandSet):

    def __init__(self, controller: IMyDataController):
        super().__init__()
        self.__controller = controller

        self.add_command(self._make_page_by_filter_command())
        self.add_command(self._make_get_one_by_id_command())
        self.add_command(self._make_create_command())
        self.add_command(self._make_update_command())
        self.add_command(self._make_delete_by_id_command())

    def _make_page_by_filter_command(self) -> ICommand:
        def handler(correlation_id, args):
            filter = FilterParams.from_value(args.get("filter"))
            paging = PagingParams.from_value(args.get("paging"))

            response = self.__controller.get_page_by_filter(correlation_id, filter, paging)

            items = []
            for item in response.data:
                items.append(MyData.to_dict(item))

            return DataPage(items, len(items))

        return Command(
            'get_my_datas',
            ObjectSchema().with_optional_property(
                'filter', FilterParamsSchema()).with_optional_property(
                'paging', PagingParamsSchema()),
            handler
        )

    def _make_get_one_by_id_command(self):
        def handler(correlation_id, args):
            id = args.get_as_string("my_data_id")
            result = self.__controller.get_one_by_id(correlation_id, id)
            return None if not result.id else MyData.to_dict(result)

        return Command(
            "get_my_data_by_id",
            ObjectSchema().with_required_property('my_data_id', TypeCode.String),
            handler
        )

    def _make_create_command(self):
        def handler(correlation_id, args):
            entity = args.get("my_data")
            result = self.__controller.create(correlation_id, MyData(**entity))
            return MyData.to_dict(result)

        return Command(
            "create_my_data",
            ObjectSchema().with_required_property('my_data', MyDataSchema()),
            handler
        )

    def _make_update_command(self):
        def handler(correlation_id, args):
            entity = args.get("my_data")
            result = self.__controller.update(correlation_id, MyData(**entity))
            return MyData.to_dict(result)

        return Command(
            "update_my_data",
            ObjectSchema().with_required_property('my_data', MyDataSchema()),
            handler
        )

    def _make_delete_by_id_command(self):
        def handler(correlation_id, args):
            id = args.get_as_string("my_data_id")
            result = self.__controller.delete_by_id(correlation_id, id)
            return MyData.to_dict(result)

        return Command(
            "delete_my_data",
            ObjectSchema().with_required_property('my_data_id', TypeCode.String),
            handler
        )

```
