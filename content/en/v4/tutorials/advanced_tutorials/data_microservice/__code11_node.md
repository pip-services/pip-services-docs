
**/test/persistence/BeaconsMemoryPersistence.test.ts**
```ts
import { ConfigParams } from 'pip-services4-components-node';

import { BeaconsMemoryPersistence } from '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsPersistenceFixture } from './BeaconsPersistenceFixture';

suite('BeaconsMemoryPersistence', () => {
    let persistence: BeaconsMemoryPersistence;
    let fixture: BeaconsPersistenceFixture;

    setup(async () => {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());

        fixture = new BeaconsPersistenceFixture(persistence);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    test('Get with Filters', async () => {
        await fixture.testGetWithFilters();
    });

});


```
