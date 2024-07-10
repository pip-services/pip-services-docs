
**/test/fixture/TestRestClient.ts**
```ts
import { ApplicationExceptionFactory, UnknownException } from "pip-services4-commons-node";

let restify = require('restify-clients');

export class TestRestClient {
    private _rest: any;

    public constructor() {
        let url = 'http://localhost:3000';
        this._rest = restify.createJsonClient({ url: url, version: '*', requestTimeout: 1500 });
    }

    protected async call(method: string, route: string, data?: any): Promise<any> {
        method = method.toLowerCase();

        return new Promise((resolve, reject) => {
            let action = (err, req, res, data) => {
                // Handling 204 codes
                if (res && res.statusCode == 204)
                    resolve(null);
                else if (err == null)
                    resolve(data);
                else {
                    // Restore application exception
                    if (data != null)
                        err = ApplicationExceptionFactory.create(data).withCause(err);
                    reject(err);
                }
            };

            if (method == 'get') this._rest.get(route, action);
            else if (method == 'head') this._rest.head(route, action);
            else if (method == 'post') this._rest.post(route, data, action);
            else if (method == 'put') this._rest.put(route, data, action);
            else if (method == 'patch') this._rest.patch(route, data, action);
            else if (method == 'delete' || method == 'del') this._rest.del(route, action);
            else {
                let err = new UnknownException('UNSUPPORTED_METHOD', 'Method is not supported by Test REST client'
                ).withDetails('verb', method);
                reject(err);
            }
        });
    }


    public async get(path: string): Promise<any> {
        delete this._rest.headers['x-session-id'];
        return await this.call('get', path);
    }

    public async head(path: string): Promise<any> {
        delete this._rest.headers['x-session-id'];
        return await this.call('head', path);
    }

    public async post(path: string, params: any): Promise<any> {
        delete this._rest.headers['x-session-id'];
        return await this.call('post', path, params);
    }

    public async put(path: string, params: any): Promise<any> {
        delete this._rest.headers['x-session-id'];
        return await this.call('put', path, params);
    }

    public async del(path: string): Promise<any> {
        delete this._rest.headers['x-session-id'];
        return await this.call('del', path);
    }


    public async getAsUser(sessionId: string, path: string): Promise<any> {
        this._rest.headers['x-session-id'] = sessionId;
        return await this.call('get', path);
    }

    public async headAsUser(sessionId: string, path: string): Promise<any> {
        this._rest.headers['x-session-id'] = sessionId;
        return await this.call('head', path);
    }

    public async postAsUser(sessionId: string, path: string, params: any): Promise<any> {
        this._rest.headers['x-session-id'] = sessionId;
        return await this.call('post', path, params);
    }

    public async putAsUser(sessionId: string, path: string, params: any): Promise<any> {
        this._rest.headers['x-session-id'] = sessionId;
        return await this.call('put', path, params);
    }

    public async delAsUser(sessionId: string, path: string, params?: any): Promise<any> {
        this._rest.headers['x-session-id'] = sessionId;
        return await this.call('del', path, params);
    }

}

```
