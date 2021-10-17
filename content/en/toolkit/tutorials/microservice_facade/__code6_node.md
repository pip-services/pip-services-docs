
**src/operations/version1/SessionOperationsV1.ts**

```typescript
let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { BadRequestException } from 'pip-services3-commons-node';
import { UnauthorizedException } from 'pip-services3-commons-node';
import { HttpRequestDetector } from 'pip-services3-rpc-node';
import { RestOperations } from 'pip-services3-rpc-node';

import { IAccountsClientV1 } from 'pip-clients-accounts-node';
import { AccountV1 } from 'pip-clients-accounts-node';
import { IRolesClientV1 } from 'pip-clients-roles-node';

import { ISessionsClientV1 } from 'pip-clients-sessions-node';
import { SessionV1 } from 'pip-clients-sessions-node';

import { SessionUserV1 } from './SessionUserV1';
import { IPasswordsClientV1, UserPasswordInfoV1 } from 'pip-clients-passwords-node';

export class SessionsOperationsV1  extends RestOperations {
    private static _defaultConfig1 = ConfigParams.fromTuples(
        'options.cookie_enabled', true,
        'options.cookie', 'x-session-id',
        'options.max_cookie_age', 365 * 24 * 60 * 60 * 1000
    );

    private _cookie: string = 'x-session-id';
    private _cookieEnabled: boolean = true;
    private _maxCookieAge: number = 365 * 24 * 60 * 60 * 1000;

    private _accountsClient: IAccountsClientV1;
    private _sessionsClient: ISessionsClientV1;
    private _passwordsClient: IPasswordsClientV1;
    private _rolesClient: IRolesClientV1;


    public constructor() {
        super();

        this._dependencyResolver.put('accounts', new Descriptor('pip-services-accounts', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('passwords', new Descriptor('pip-services-passwords', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('roles', new Descriptor('pip-services-roles', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('sessions', new Descriptor('pip-services-sessions', 'client', '*', '*', '1.0'));
    }

    public configure(config: ConfigParams): void {
        config = config.setDefaults(SessionsOperationsV1._defaultConfig1);
        this._dependencyResolver.configure(config);

        this._cookieEnabled = config.getAsBooleanWithDefault('options.cookie_enabled', this._cookieEnabled);
        this._cookie = config.getAsStringWithDefault('options.cookie', this._cookie);
        this._maxCookieAge = config.getAsLongWithDefault('options.max_cookie_age', this._maxCookieAge);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._sessionsClient = this._dependencyResolver.getOneRequired<ISessionsClientV1>('sessions');
        this._accountsClient = this._dependencyResolver.getOneRequired<IAccountsClientV1>('accounts');
        this._passwordsClient = this._dependencyResolver.getOneRequired<IPasswordsClientV1>('passwords');
        this._rolesClient = this._dependencyResolver.getOneRequired<IRolesClientV1>('roles');
    }
    
    public loadSession(req: any, res: any, next: () => void): void {
        // parse headers first, and if nothing in headers get cookie
        let sessionId = req.headers['x-session-id'];// || req.cookies[this._cookie];
        
        if (sessionId) {
            this._sessionsClient.getSessionById('facade', sessionId, (err, session) => {
                if (session == null && err == null) {
                    err = new UnauthorizedException(
                        'facade', 
                        'SESSION_NOT_FOUND', 
                        'Session invalid or already expired.'
                    ).withDetails('session_id', sessionId).withStatus(440);
                }

                if (err == null) {
                    // Associate session user with the request
                    req.user_id = session.user_id;
                    req.user_name = session.user_name;
                    req.user = session.user;
                    req.session_id = session.id;
                    next();
                } else {
                    this.sendError(req, res, err);
                }
            });
        } else {
            next();
        }
    }

    public openSession(req: any, res: any, account: AccountV1, roles: string[]): void {
        let session: SessionV1;
        let passwordInfo: UserPasswordInfoV1;
        let settings: ConfigParams;
        console.log('open session');
        async.series([
            (callback) => {

                this._passwordsClient.getPasswordInfo(
                    null, account.id, (err, data) => {
                        passwordInfo = data;
                        callback(err);
                    }
                )
            },
            // Open a new user session
            (callback) => {

                let user = <SessionUserV1>{
                    id: account.id,
                    name: account.name,
                    login: account.login,
                    create_time: account.create_time,
                    time_zone: account.time_zone,
                    language: account.language,
                    theme: account.theme,
                    roles: roles,
                    settings: settings,
                    change_pwd_time: passwordInfo != null ? passwordInfo.change_time : null,
                    custom_hdr: account.custom_hdr,
                    custom_dat: account.custom_dat
                };

                let address = HttpRequestDetector.detectAddress(req);
                let client = HttpRequestDetector.detectBrowser(req);

                this._sessionsClient.openSession(
                    null, account.id, account.name,
                    address, client, user, null,
                    (err, data) => {
                        session = data;
                        callback(err);
                    }
                );
            },
        ], (err) => {
            if (err) 
                this.sendError(req, res, err);
            else {
                res.json(session);
            }
        });
    }

    public signup(req: any, res: any): void {
        let signupData = req.body;
        let account: AccountV1 = null;
        let roles: string[] = signupData.roles != null && _.isArray(signupData.roles) ? signupData.roles : [];

        async.series([
            // Create account
            (callback) => {
                let newAccount = <AccountV1>{
                    name: signupData.name,
                    login: signupData.login || signupData.email, // Use email by default
                    language: signupData.language,
                    theme: signupData.theme,
                    time_zone: signupData.time_zone
                };

                this._accountsClient.createAccount(
                    null, newAccount, 
                    (err, data) => {
                        account = data;
                        callback(err);
                    }
                )
            },
            // Create password for the account
            (callback) => {
                let password = signupData.password;
                
                this._passwordsClient.setPassword(
                    null, account.id, password, callback
                );
            },
            // Create roles for the account
            (callback) => {
                if (roles.length > 0) {
                    this._rolesClient.grantRoles(
                        null, account.id, roles, callback
                    );
                } else {
                    callback();
                }
            }
        ], (err) => {
            if (err) 
                this.sendError(req, res, err);
            else
                this.openSession(req, res, account, roles);
        });
    }

    public signin(req: any, res: any): void {
        let login = req.param('login');
        let password = req.param('password');

        let account: AccountV1;
        let roles: string[] = [];

        async.series([
            // Find user account
            (callback) => {
                this._accountsClient.getAccountByIdOrLogin(null, login, (err, data) => {
                    if (err == null && data == null) {
                        err = new BadRequestException(
                            null,
                            'WRONG_LOGIN',
                            'Account ' + login + ' was not found'
                        ).withDetails('login', login);
                    }

                    account = data;
                    callback(err);
                });
            },
            // Authenticate user
            (callback) => {
                this._passwordsClient.authenticate(null, account.id, password, (err, result) => {
                    // wrong password error is UNKNOWN when use http client
                    if ( (err == null && result == false) || (err && err.cause == 'Invalid password') )  {
                        err = new BadRequestException(
                            null, 
                            'WRONG_PASSWORD',
                            'Wrong password for account ' + login
                        ).withDetails('login', login);
                    }

                    callback(err);
                });
            },
            // Retrieve user roles
            (callback) => {
                if (this._rolesClient) {
                    this._rolesClient.getRolesById(null, account.id, (err, data) => {
                        roles = data;
                        callback(err);
                    });
                } else {
                    roles = [];
                    callback();
                }
            }
        ], (err) => {
            if (err) 
                this.sendError(req, res, err);
            else
                this.openSession(req, res, account, roles);
        });
    }

    public signout(req: any, res: any): void {
        if (req.session_id) {
            this._sessionsClient.closeSession(null, req.session_id, (err, session) => {
                if (err) this.sendError(req, res, err);
                else res.json(204);
            });
        } else {
            res.json(204);
        }
    }

}
```

