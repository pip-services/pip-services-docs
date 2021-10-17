
**/logic/BeaconsCommandSet.ts**

```go
package logic

import (
	"encoding/json"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconv "github.com/pip-services3-go/pip-services3-commons-go/convert"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	crun "github.com/pip-services3-go/pip-services3-commons-go/run"
	cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"
)

type BeaconsCommandSet struct {
	ccmd.CommandSet
	controller IBeaconsController
}

func NewBeaconsCommandSet(controller IBeaconsController) *BeaconsCommandSet {
	c := &BeaconsCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
		controller: controller,
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
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			filter := cdata.NewFilterParamsFromValue(args.Get("filter"))
			paging := cdata.NewPagingParamsFromValue(args.Get("paging"))
			return c.controller.GetBeacons(correlationId, filter, paging)
		})
}

func (c *BeaconsCommandSet) makeGetBeaconByIdCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacon_by_id",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon_id", cconv.String),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			beaconId := args.GetAsString("beacon_id")
			return c.controller.GetBeaconById(correlationId, beaconId)
		})
}

func (c *BeaconsCommandSet) makeGetBeaconByUdiCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacon_by_udi",
		cvalid.NewObjectSchema().
			WithRequiredProperty("udi", cconv.String),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			udi := args.GetAsString("udi")
			return c.controller.GetBeaconByUdi(correlationId, udi)
		})
}

func (c *BeaconsCommandSet) makeCalculatePositionCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"calculate_position",
		cvalid.NewObjectSchema().
			WithRequiredProperty("site_id", cconv.String).
			WithRequiredProperty("udis", cvalid.NewArraySchema(cconv.String)),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			siteId := args.GetAsString("site_id")
			udis := args.GetAsString("udis")
			arrUdis := make([]string, 0, 0)
			arrUdis = strings.Split(udis, ",")
			return c.controller.CalculatePosition(correlationId, siteId, arrUdis)
		})
}

func (c *BeaconsCommandSet) makeCreateBeaconCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"create_beacon",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon", data1.NewBeaconV1Schema()),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {

			val, errJ := json.Marshal(args.Get("beacon"))
			var beacon data1.BeaconV1 = data1.BeaconV1{}
			errJ = json.Unmarshal(val, &beacon)
			if errJ != nil {
				return nil, errJ
			}
			return c.controller.CreateBeacon(correlationId, &beacon)
		})
}

func (c *BeaconsCommandSet) makeUpdateBeaconCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"update_beacon",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon", data1.NewBeaconV1Schema()),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			val, _ := json.Marshal(args.Get("beacon"))
			var beacon data1.BeaconV1
			json.Unmarshal(val, &beacon)
			return c.controller.UpdateBeacon(correlationId, &beacon)
		})
}

func (c *BeaconsCommandSet) makeDeleteBeaconByIdCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"delete_beacon_by_id",
		cvalid.NewObjectSchema().
			WithRequiredProperty("beacon_id", cconv.String),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			beaconId := args.GetAsString("beacon_id")
			return c.controller.DeleteBeaconById(correlationId, beaconId)
		})
}
```
