
```ts
import { ConfigParams, IConfigurable, IOpenable, Context } from "pip-services4-components-node";
import { ConnectionUtils } from "pip-services4-config-node";
import { ConnectionException } from "pip-services4-commons-node";

export async function main() {
    let options = ConfigParams.fromTuples(
        "host", "localhost",
        "port", ",27017",
        "username", "user",
        "password", "pass123",
        "protocol", "mongodb",
        "collection", "my_db_name"
    );

    // Create connection
    let conn = new MongoDbConnector();
    conn.configure(options);
    await conn.open(null);
}

export class MongoDbConnector implements IOpenable, IConfigurable {

    // The MongoDB connection object.
    protected _connection: any;
    // The MongoDB database.
    protected _database: any;
    
    protected _databaseName: string;
    protected _config: ConfigParams;
    private _secureMongo: boolean;

    public MongoDbConnector(secureMongo: boolean = false) {
        this._secureMongo = secureMongo;
    }

    public async getCollection(): Promise<any> {
        return await new Promise<any>((resolve, reject) => {
            this._database.collection('test', (err, collection) => {
                if (err == null) resolve(collection);
                else reject(err);
            });
        });
    }

    public configure(config: ConfigParams): void {
        this._config = config;

        // if connection passed as uri
        if (this._config.getAsNullableString("uri") != null)
            this._config = ConnectionUtils.parseUri(this._config.getAsString("uri"), "mongodb", 27017);

        // if mongo without auth
        if (!this._secureMongo)
            this._config = ConnectionUtils.exclude(this._config, "username", "password");

    }

    public isOpen(): boolean {
        return this._connection != null && this._database != null;
    }

    private composeSettings(): any {
        let authUser = this._config.getAsNullableString("auth_user");
        let authPassword = this._config.getAsNullableString("auth_password");

        let settings: any = {};

        if (authUser != null)
            settings['auth.user'] = authUser;
        if (authPassword != null)
            settings['auth.password'] = authPassword;

        settings.useNewUrlParser = true;
        settings.useUnifiedTopology = true;

        return settings;
    }

    public async open(ctx: Context): Promise<void> {
        let collection = this._config.getAsNullableString("collection");

        this._config = ConnectionUtils.exclude(this._config, "collection");

        var uri = ConnectionUtils.composeUri(this._config, "mongodb", 27017);
        uri += "/" + collection;

        try {
            let settings = this.composeSettings();
            let MongoClient = require('mongodb').MongoClient;

            let client = await new Promise<any>((resolve, reject) => {
                MongoClient.connect(uri, settings, (err, client) => {
                    if (err == null) resolve(client);
                    else reject(err);
                });
            });

            this._connection = client;
            this._database = client.db();
            this._databaseName = this._database.databaseName;
        } catch (ex) {
            throw new ConnectionException(
                "trace_id",
                "CONNECT_FAILED",
                "Connection to mongodb failed"
            ).withCause(ex);
        }
    }

    public async close(ctx: Context): Promise<void> {
        if (this._connection == null) {
            return;
        }

        await new Promise((resolve, reject) => {
            this._connection.close((err) => {
                if (err == null) resolve(null);
                else reject(err);
            });
        });

        this._connection = null;
        this._database = null;
        this._databaseName = null;
    }
}
```
