
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Commons.Validate;

using TypeCode = PipServices3.Commons.Convert.TypeCode;

public class MyDataCommandSet: CommandSet
{
    private IMyDataController _controller;

    public MyDataCommandSet(IMyDataController controller)
    {
        this._controller = controller;

        this.AddCommand(this.MakePageByFilterCommand());
        this.AddCommand(this.MakeGetOneByIdCommand());
        this.AddCommand(this.MakeCreateCommand());
        this.AddCommand(this.MakeUpdateCommand());
        this.AddCommand(this.MakeDeleteByIdCommand());
    }

    private ICommand MakePageByFilterCommand()
    {
        return new Command(
            "get_my_datas",
            new ObjectSchema()
                .WithOptionalProperty("filter", new FilterParamsSchema())
                .WithOptionalProperty("paging", new PagingParamsSchema()),
            async (correlationId, args) =>
            {
                var filter = FilterParams.FromValue(args.Get("filter"));
                var paging = PagingParams.FromValue(args.Get("paging"));

                return await _controller.GetPageByFilterAsync(correlationId, filter, paging);
            });
    }

    private ICommand MakeGetOneByIdCommand()
    {
        return new Command(
            "get_my_data_by_id",
            new ObjectSchema()
                .WithRequiredProperty("my_data_id", TypeCode.String),
            async (correlationId, args) =>
            {
                var mydataId = args.GetAsString("my_data_id");
                return await _controller.GetOneByIdAsync(correlationId, mydataId);
            });
    }

    private ICommand MakeCreateCommand()
    {
        return new Command(
            "create_my_data",
            new ObjectSchema()
                .WithRequiredProperty("my_data", new MyDataSchema()),
            async (correlationId, args) =>
            {
                var mydata = ExtractMyData(args);
                return await _controller.CreateAsync(correlationId, mydata);
            });
    }

    private ICommand MakeUpdateCommand()
    {
        return new Command(
            "update_my_data",
            new ObjectSchema()
                .WithRequiredProperty("my_data", new MyDataSchema()),
            async (correlationId, args) =>
            {
                var mydata = ExtractMyData(args);
                return await _controller.UpdateAsync(correlationId, mydata);
            });
    }

    private ICommand MakeDeleteByIdCommand()
    {
        return new Command(
            "delete_my_data",
            new ObjectSchema()
                .WithRequiredProperty("my_data_id", TypeCode.String),
            async (correlationId, args) =>
            {
                var mydataId = args.GetAsString("my_data_id");

                return await _controller.DeleteByIdAsync(correlationId, mydataId);
            });
    }

    private static MyData ExtractMyData(Parameters args)
    {
        var map = args.GetAsMap("my_data");

        var id = map.GetAsStringWithDefault("id", string.Empty);
        var key = map.GetAsStringWithDefault("key", string.Empty);
        var content = map.GetAsStringWithDefault("content", string.Empty);

        var mydata = new MyData(id, key, content);
        return mydata;
    }
}


```
