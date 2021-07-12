---
type: docs
no_list: true
title: "Step 2. Business operations"
linkTitle: "Step 2. Business operations" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---

Since facades are usually the point of entry into a system, they can contain dozens or even hundreds of REST operations. The classic microservices structure, when all the logic is contained in a single controller, becomes quite impractical in this case. Furthermore, it’s critical for a facade to support versioning. When the interface is changed, the facade must continue to provide stability for existing clients using interface versioning. Usually around 80% of the logic remains the same when an interface is changed, so duplicating the logic would just increase the amount of code and make it more difficult to support.


To solve these problems, the Pip.Services Toolkit offers a new pattern that breaks up logic into separate operations. The operations can be developed and tested individually, and then integrated into the RESTful service using unique routes. When implementing a new version, only the operations that require changes need to be rewritten. The remaining operations are simply imported from the old version by being reregistered in the new RESTful service.


The example facade in this tutorial will contain just 2 sets of operations:

- Operations that work with Beacons
- Operations for managing sessions and users

We’ll be creating a separate file for each set of operations and placing them in the folder **operations/version1**

Let’s start with the first set of operations - the ones responsible for working with Beacons.

Create a file named **BeaconsOperationsV1.ts** and place the following code inside:

**/src/service/services/operations/version1/BeaconsOperationsV1.cs**
```cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using PipServices.Templates.Facade.Clients.Version1;
using PipServices3.Commons.Convert;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PipServices.Templates.Facade.Operations.Version1
{
	public class BeaconsOperationsV1 : RestOperations
	{
		private IBeaconsClientV1 _beaconsClient;

		public BeaconsOperationsV1()
		{
			_dependencyResolver.Put("beacons", new Descriptor("pip-services-beacons", "client", "*", "*", "1.0"));
		}

		public new void SetReferences(IReferences references)
		{
			base.SetReferences(references);
			_beaconsClient = _dependencyResolver.GetOneRequired<IBeaconsClientV1>("beacons");
		}

		public async Task GetBeaconsAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user,
			RouteData routeData)
		{
			var filter = GetFilterParams(request);
			var paging = GetPagingParams(request);
			var parameters = GetParameters(request);

			var siteId = parameters.GetAsString("site_id");
			filter.SetAsObject("site_id", siteId);

			var page = await _beaconsClient.GetBeaconsAsync(null, filter, paging);
			await SendResultAsync(response, page);
		}

		public async Task GetBeaconAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var siteId = parameters.GetAsString("site_id");
			var beaconId = parameters.GetAsString("beacon_id");

			var beacon = await _beaconsClient.GetBeaconByIdAsync(null, beaconId);
			await SendResultAsync(response, beacon);
		}

		public async Task CalculatePositionAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var siteId = parameters.GetAsString("site_id");
			var udis = parameters.GetAsString("udis")?.Split(',');

			var center = await _beaconsClient.CalculatePositionAsync(null, siteId, udis);
			await SendResultAsync(response, center);
		}

		public async Task CreateBeaconAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var beacon = JsonConverter.FromJson<BeaconV1>(parameters.RequestBody);

			beacon = await _beaconsClient.CreateBeaconAsync(null, beacon);
			await SendResultAsync(response, beacon);
		}

		public async Task ValidateBeaconUdiAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var udi = parameters.GetAsString("udi");

			var beacon = await _beaconsClient.GetBeaconByUdiAsync(null, udi);
			await SendResultAsync(response, beacon?.Id ?? "");
		}

		public async Task UpdateBeaconAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var beacon = JsonConverter.FromJson<BeaconV1>(parameters.RequestBody);

			beacon = await _beaconsClient.UpdateBeaconAsync(null, beacon);
			await SendResultAsync(response, beacon);
		}

		public async Task DeleteBeaconAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);
			var beaconId = parameters.GetAsString("beacon_id");

			var beacon = await _beaconsClient.DeleteBeaconByIdAsync(null, beaconId);
			await SendResultAsync(response, beacon);
		}
	}
}
```

This component’s logic is based on calling the Beacons microservice via any client that implements the IBeaconsClientV1 interface. The component receives a link to the client through its SetReferences method (see [The Component References recipe](../../../recipes/component_references)). The component’s business methods mainly just wrap the client’s methods to convert facade’s RESTful requests into calls to the client. Generally speaking, all of these methods perform the same set of steps: extract parameters from the request, call the corresponding method in the Beacons client, receive any results or errors, and send this information back as a response.


In the next (third) [Step 3 - Authentication and session operations](../step3) - we’ll be examining the second set of operations, which manage sessions and authenticate users.

<span class="hide-title-link">

### [Step 3. Authentication and sessions](../step3)

</span>
