
```go

import (
	"context"
	"encoding/json"

	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	grpcsrv "github.com/pip-services3-gox/pip-services3-grpc-gox/services"
)

type MyDataCommandSet struct {
	*ccomand.CommandSet
	controller IMyDataController
}

func NewMyDataCommandSet(controller IMyDataController) *MyDataCommandSet {
	dcs := MyDataCommandSet{}
	dcs.CommandSet = ccomand.NewCommandSet()

	dcs.controller = controller

	dcs.AddCommand(dcs.makePageByFilterCommand())
	dcs.AddCommand(dcs.makeGetOneByIdCommand())
	dcs.AddCommand(dcs.makeCreateCommand())
	dcs.AddCommand(dcs.makeUpdateCommand())
	dcs.AddCommand(dcs.makeDeleteByIdCommand())
	return &dcs
}

func (c *MyDataCommandSet) makePageByFilterCommand() ccomand.ICommand {
	return ccomand.NewCommand(
		"get_my_datas",
		cvalid.NewObjectSchema().WithOptionalProperty("filter", cvalid.NewFilterParamsSchema()).WithOptionalProperty("paging", cvalid.NewPagingParamsSchema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			var filter *cdata.FilterParams
			var paging *cdata.PagingParams

			if _val, ok := args.Get("filter"); ok {
				filter = cdata.NewFilterParamsFromValue(_val)
			}
			if _val, ok := args.Get("paging"); ok {
				paging = cdata.NewPagingParamsFromValue(_val)
			}

			return c.controller.GetPageByFilter(correlationId, filter, paging)
		},
	)
}

func (c *MyDataCommandSet) makeGetOneByIdCommand() ccomand.ICommand {
	return ccomand.NewCommand(
		"get_my_data_by_id",
		cvalid.NewObjectSchema().WithRequiredProperty("my_data_id", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			id := args.GetAsString("my_data_id")
			return c.controller.GetOneById(correlationId, id)
		},
	)
}

func (c *MyDataCommandSet) makeCreateCommand() ccomand.ICommand {
	return ccomand.NewCommand(
		"create_my_data",
		cvalid.NewObjectSchema().WithRequiredProperty("my_data", NewMyDataSchema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			var entity MyData

			if _val, ok := args.Get("my_data"); ok {
				val, _ := json.Marshal(_val)
				json.Unmarshal(val, &entity)
			}

			return c.controller.Create(correlationId, entity)
		},
	)
}

func (c *MyDataCommandSet) makeUpdateCommand() ccomand.ICommand {
	return ccomand.NewCommand(
		"update_my_data",
		cvalid.NewObjectSchema().WithRequiredProperty("my_data", NewMyDataSchema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			var entity MyData

			if _val, ok := args.Get("my_data"); ok {
				val, _ := json.Marshal(_val)
				json.Unmarshal(val, &entity)
			}
			return c.controller.Update(correlationId, entity)
		},
	)
}

func (c *MyDataCommandSet) makeDeleteByIdCommand() ccomand.ICommand {
	return ccomand.NewCommand(
		"delete_my_data",
		cvalid.NewObjectSchema().WithRequiredProperty("my_data_id", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			id := args.GetAsString("my_data_id")
			return c.controller.DeleteById(correlationId, id)
		},
	)
}

```
