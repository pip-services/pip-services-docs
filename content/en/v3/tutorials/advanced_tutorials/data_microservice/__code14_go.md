
**/logic/BeaconsCommandSet.ts**

```go
package logic

import (
	"context"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
)

type BeaconsCommandSet struct {
	*ccmd.CommandSet
	controller      IBeaconsController
	beaconConvertor cconv.IJSONEngine[data1.BeaconV1]
}

func NewBeaconsCommandSet(controller IBeaconsController) *BeaconsCommandSet {
	c := &BeaconsCommandSet{
		CommandSet:      ccmd.NewCommandSet(),
		controller:      controller,
		beaconConvertor: cconv.NewDefaultCustomTypeJsonConvertor[data1.BeaconV1](),
	}

	c.AddCommand(c.makeGetBeaconsCommand())
	c.AddCommand(c.makeGetBeaconByIdCommand())
	c.AddCommand(c.makeGetBeaconByUdiCommand())
	c.AddCommand(c.makeCalculatePositionCommand())
	c.AddCommand(c.makeCreateBeaconCommand())
	c.AddCommand(c.makeUpdateBeaconCommand())
	c.AddCommand(c.makeDeleteBeaconByIdCommand())

	return c
}

func (c *BeaconsCommandSet) makeGetBeaconsCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacons",
		cvalid.NewObjectSchema().
			WithOptionalProperty("filter", cvalid.NewFilterParamsSchema()).
			WithOptionalProperty("paging", cvalid.NewPagingParamsSchema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			filter := cdata.NewEmptyFilterParams()
			paging := cdata.NewEmptyPagingParams()
			if _val, ok := args.Get("filter"); ok {
				filter = cdata.NewFilterParamsFromValue(_val)
			}
			if _val, ok := args.Get("paging"); ok {
				paging = cdata.NewPagingParamsFromValue(_val)
			}
			return c.controller.GetBeacons(ctx, correlationId, *filter, *paging)
		})
}

func (c *BeaconsCommandSet) makeGetBeaconByIdCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacon_by_id",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon_id", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			return c.controller.GetBeaconById(ctx, correlationId, args.GetAsString("beacon_id"))
		})
}

func (c *BeaconsCommandSet) makeGetBeaconByUdiCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacon_by_udi",
		cvalid.NewObjectSchema().
			WithRequiredProperty("udi", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			return c.controller.GetBeaconByUdi(ctx, correlationId, args.GetAsString("udi"))
		})
}

func (c *BeaconsCommandSet) makeCalculatePositionCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"calculate_position",
		cvalid.NewObjectSchema().
			WithRequiredProperty("site_id", cconv.String).
			WithRequiredProperty("udis", cvalid.NewArraySchema(cconv.String)),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			return c.controller.CalculatePosition(
				ctx,
				correlationId,
				args.GetAsString("site_id"),
				strings.Split(args.GetAsString("udis"), ","),
			)
		})
}

func (c *BeaconsCommandSet) makeCreateBeaconCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"create_beacon",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon", data1.NewBeaconV1Schema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {

			var beacon data1.BeaconV1
			if _beacon, ok := args.GetAsObject("beacon"); ok {
				buf, err := cconv.JsonConverter.ToJson(_beacon)
				if err != nil {
					return nil, err
				}
				beacon, err = c.beaconConvertor.FromJson(buf)
				if err != nil {
					return nil, err
				}
			}
			return c.controller.CreateBeacon(ctx, correlationId, beacon)
		})
}

func (c *BeaconsCommandSet) makeUpdateBeaconCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"update_beacon",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon", data1.NewBeaconV1Schema()),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			var beacon data1.BeaconV1
			if _beacon, ok := args.GetAsObject("beacon"); ok {
				buf, err := cconv.JsonConverter.ToJson(_beacon)
				if err != nil {
					return nil, err
				}
				beacon, err = c.beaconConvertor.FromJson(buf)
				if err != nil {
					return nil, err
				}
			}
			return c.controller.UpdateBeacon(ctx, correlationId, beacon)
		})
}

func (c *BeaconsCommandSet) makeDeleteBeaconByIdCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"delete_beacon_by_id",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon_id", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result any, err error) {
			return c.controller.DeleteBeaconById(ctx, correlationId, args.GetAsString("beacon_id"))
		})
}

```
