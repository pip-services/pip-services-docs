
**/test/operations/version1/SessionsRoutesV1.test.ts**
```ts
const assert = require('chai').assert;

import { TestReferences } from '../../fixtures/TestReferences';
import { TestUsers } from '../../fixtures/TestUsers';
import { TestRestClient } from '../../fixtures/TestRestClient';

suite('SessionRoutesV1', () => {
    let USER = {
        login: 'test',
        name: 'Test User',
        email: 'test@conceptual.vision',
        password: 'test123'
    };

    let references: TestReferences;
    let rest: TestRestClient;

    setup(async () => {
        rest = new TestRestClient();
        references = new TestReferences();
        await references.open(null);
    });

    teardown(async () => {
        await references.close(null);
    });

    test('should signup new user', async () => {

        let session = await rest.post('/api/v1/signup', USER);
        assert.isNotNull(session);

        assert.isDefined(session);
        assert.isDefined(session.id);
        assert.equal(session.user_name, USER.name);
    });

    test('should check login for signup', async () => {

        // Check registered email
        let err = null;
        try {
            await rest.get('/api/v1/signup/validate?login=' + TestUsers.User1Login)
        } catch (ex) {
            err = ex;
        }
        assert.isNotNull(err);


        // Check not registered email
        await rest.get('/api/v1/signup/validate?login=xxx@gmail.com');

    });

    test('should not signup with the same email', async () => {

        // Sign up
        await rest.post('/api/v1/signup', USER);

        // Try to sign up again
        let err = null;
        try {
            await rest.post('/api/v1/signup', USER);
        } catch (ex) {
            err = ex;
        }
        assert.isNotNull(err);

    });

    test('should signout', async () => {
        await rest.post('/api/v1/signout', null);
    });

    test('should signin with email and password', async () => {

        // Sign up
        await rest.post('/api/v1/signup', USER);

        // Sign in with username
        await rest.post('/api/v1/signin',
            {
                login: USER.login,
                password: USER.password
            }
        );

    });
    
    test('should get sessions as admin', async () => {
        let page = await rest.getAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sessions?paging=1&skip=0&take=2',
        );

        assert.isObject(page);

    });

    test('should get user sessions as owner', async () => {
        let page = await rest.getAsUser(
            TestUsers.User1SessionId,
            '/api/v1/sessions/' + TestUsers.User1Id + '?paging=1&skip=0&take=2'
        );

        assert.isObject(page);
    });

    test('should restore user sessions as owner', async () => {
        let session = await rest.postAsUser(
            TestUsers.User1SessionId,
            '/api/v1/sessions/restore?session_id=' + TestUsers.User1SessionId,
            {}
        );

        assert.isObject(session);
    });

});

```
