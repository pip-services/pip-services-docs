
**/test/operations/version1/BeaconsRoutesV1Test.cs**

```cs
using Pip.Services.SampleFacade.Clients.Version1;
using Pip.Services.SampleFacade.Fixtures;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Pip.Services.SampleFacade.Operations.Version1
{

	[Collection("Sequential")]
	public class BeaconsRoutesV1Test: IDisposable
	{
		BeaconV1 BEACON1 = new() 
		{
			Id = "1",
			Udi = "000001",
			SiteId = "1",
			Label = "TestBeacon1",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 0, 0 } },
			Radius = 50
		};
		BeaconV1 BEACON2 = new()
		{
			Id = "2",
			Udi = "000002",
			SiteId = "1",
			Label = "TestBeacon2",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 2, 2 } },
			Radius = 70
		};
		BeaconV1 BEACON3 = new()
		{
			Id = "3",
			Udi = "000003",
			SiteId = "2",
			Label = "TestBeacon3",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 10, 10 } },
			Radius = 50
		};

		private readonly TestReferences references;
		private readonly TestRestClient rest;

		public BeaconsRoutesV1Test()
		{
			rest = new TestRestClient();
			references = new TestReferences();
			references.Put(new Descriptor("beacons", "client", "memory", "default", "1.0"), new BeaconsMemoryClientV1());
			references.OpenAsync(null).Wait();
		}

		public void Dispose()
		{
			references.CloseAsync(null).Wait();
		}

		[Fact]
		public async Task It_Should_Perform_Beacon_OperationsAsync()
		{
			BeaconV1 beacon1, beacon2, beacon3;

			// Create one beacon
			var beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons",
					BEACON1);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON1.SiteId);
			Assert.Equal(beacon.Udi, BEACON1.Udi);
			Assert.Equal(beacon.Label, BEACON1.Label);
			Assert.NotNull(beacon.Center);

			beacon1 = beacon;

			// Create another beacon
			beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON2.SiteId + "/beacons",
					BEACON2);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON2.SiteId);
			Assert.Equal(beacon.Udi, BEACON2.Udi);
			Assert.Equal(beacon.Label, BEACON2.Label);
			Assert.NotNull(beacon.Center);

			beacon2 = beacon;

			// Create yet another beacon
			beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON3.SiteId + "/beacons",
					BEACON3);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON3.SiteId);
			Assert.Equal(beacon.Udi, BEACON3.Udi);
			Assert.Equal(beacon.Label, BEACON3.Label);
			Assert.NotNull(beacon.Center);

			beacon3 = beacon;

			// Get all beacons
			var page = await rest.GetAsUserAsync<DataPage<BeaconV1>>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons");
			Assert.NotNull(page);
			Assert.Equal(2, page.Data.Count);

			// Calculate positions
			var position = await rest.PostAsUserAsync<CenterObjectV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons/calculate_position",
					new 
					{
						site_id = BEACON1.SiteId,
                        udis = new string[] { BEACON1.Udi }
					});
			Assert.NotNull(position);
			Assert.Equal("Point", position.Type);

			// Validate beacon udi
			var result = await rest.PostAsUserAsync<string>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/validate_udi?udi=" + beacon1.Udi);
			Assert.Equal(beacon1.Id, result);

			// Update the beacon
			beacon1.Label = "ABC";
			beacon = await rest.PutAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id,
					beacon1);
			Assert.NotNull(beacon);
			Assert.Equal("ABC", beacon.Label);

			beacon1 = beacon;

			// Delete beacon
			await rest.DelAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id);

			// Try to get delete beacon
			beacon = await rest.GetAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id);
			Assert.Null(beacon);
		}

	}
}

```

