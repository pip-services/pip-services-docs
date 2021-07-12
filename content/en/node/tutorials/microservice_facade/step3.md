---
type: docs
no_list: true
title: "Step 3. Authentication and sessions"
linkTitle: "Step 3. Authentication and sessions" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---

In most cases, access to an application’s (service’s) resources is granted only after users authenticate themselves in the system. Authentication is the process of checking the validity of the identifier provided by a user. A successful authentication (besides establishing a trusted relationship and generating a session key) is usually also followed up by user authorization. This second step grants the user access rights to an approved set of resources, deemed necessary for the user to perform his/her tasks.

Just like in the previous step, we’ll be placing the files of this step in the **operation/version1** folder.

Let’s start by defining a data model for storing user information within a session. Create a new file named **SessionUserV1.ts** with the following code:

**src/operations/version1/SessionUserV1.ts**

```typescript
export class SessionUserV1 {
    /* Identification */
    public id: string;
    public login: string;
    public name: string;
    public create_time: Date;

    /* User information */
    public time_zone: string;
    public language: string;
    public theme: string;

    /* Security info **/
    public roles: string[];
    public change_pwd_time: Date;
    public sites: { id: string, name: string };
    public settings: any;

    /* Custom fields */
    public custom_hdr: any;
    public custom_dat: any;
}

```

This data model will contain all necessary information about the user: the session’s ID, login, username, list of rolls, etc.

We’ll be defining our operations for managing sessions and authenticating users in a file named **SessionOperationsV1.ts**. A listing of this file’s code is presented below:

**src/operations/version1/SessionOperationsV1.ts**

```typescript
let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { BadRequestException } from 'pip-services3-commons-node';
import { UnauthorizedException } from 'pip-services3-commons-node';
import { HttpRequestDetector } from 'pip-services3-rpc-node';
import { RestOperations } from 'pip-services3-rpc-node';

import { ISettingsClientV1 } from '../../clients/version1/ISettingsClientV1';
import { IAccountsClientV1 } from '../../clients/version1/IAccountsClientV1';
import { AccountV1 } from '../../clients/version1/AccountV1';
import { IPasswordsClientV1 } from '../../clients/version1/IPasswordsClientV1';
import { UserPasswordInfoV1 } from '../../clients/version1/UserPasswordInfoV1';
import { IRolesClientV1 } from '../../clients/version1/IRolesClientV1';
import { ISessionsClientV1 } from '../../clients/version1/ISessionsClientV1';
import { SessionV1 } from '../../clients/version1/SessionV1';
import { IEmailSettingsClientV1 } from '../../clients/version1/IEmailSettingsClientV1';
import { EmailSettingsV1 } from '../../clients/version1/EmailSettingsV1';
import { ISitesClientV1 } from '../../clients/version1/ISitesClientV1';
import { IInvitationsClientV1 } from '../../clients/version1/IInvitationsClientV1';
import { SiteV1 } from '../../clients/version1/SiteV1';

import { SessionUserV1 } from './SessionUserV1';

export class SessionsOperationsV1  extends RestOperations {
    private static _defaultConfig1 = ConfigParams.fromTuples(
        'options.cookie_enabled', true,
        'options.cookie', 'x-session-id',
        'options.max_cookie_age', 365 * 24 * 60 * 60 * 1000
    );

    private _cookie: string = 'x-session-id';
    private _cookieEnabled: boolean = true;
    private _maxCookieAge: number = 365 * 24 * 60 * 60 * 1000;

    private _settingsClient: ISettingsClientV1;
    private _accountsClient: IAccountsClientV1;
    private _sessionsClient: ISessionsClientV1;
    private _passwordsClient: IPasswordsClientV1;
    private _rolesClient: IRolesClientV1;
    private _emailSettingsClient: IEmailSettingsClientV1;
    private _sitesClient: ISitesClientV1;
    private _invitationsClient: IInvitationsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('settings', new Descriptor('pip-services-settings', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('accounts', new Descriptor('pip-services-accounts', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('passwords', new Descriptor('pip-services-passwords', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('roles', new Descriptor('pip-services-roles', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('emailsettings', new Descriptor('pip-services-emailsettings', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('sessions', new Descriptor('pip-services-sessions', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('sites', new Descriptor('nov-services-sites', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('invitations', new Descriptor('nov-services-invitations', 'client', '*', '*', '1.0'));
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

        this._settingsClient = this._dependencyResolver.getOneRequired<ISettingsClientV1>('settings');
        this._sessionsClient = this._dependencyResolver.getOneRequired<ISessionsClientV1>('sessions');
        this._accountsClient = this._dependencyResolver.getOneRequired<IAccountsClientV1>('accounts');
        this._passwordsClient = this._dependencyResolver.getOneRequired<IPasswordsClientV1>('passwords');
        this._rolesClient = this._dependencyResolver.getOneRequired<IRolesClientV1>('roles');
        this._emailSettingsClient = this._dependencyResolver.getOneOptional<IEmailSettingsClientV1>('emailsettings');
        this._sitesClient = this._dependencyResolver.getOneRequired<ISitesClientV1>('sites');
        this._invitationsClient = this._dependencyResolver.getOneRequired<IInvitationsClientV1>('invitations');
    }
    
    public loadSession(req: any, res: any, next: () => void): void {
        // Is user really cached? If yes, then we shall reinvalidate cache when connections are changed
        // if (req.user) {
        //     callback(null, req.user);
        //     return;
        // }

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
        let sites: SiteV1[];
        let passwordInfo: UserPasswordInfoV1;
        let settings: ConfigParams;

        async.series([
            // Retrieve sites for user
            (callback) => {
                let siteRoles = _.filter(roles, r => r.indexOf(':') > 0);

                let siteIds = _.map(siteRoles, (r) => {
                    let pos = r.indexOf(':');
                    return pos >= 0 ? r.substring(0, pos) : r;
                });

                if (siteIds.length > 0) {
                    let filter = FilterParams.fromTuples('ids', siteIds);

                    this._sitesClient.getSites(null, filter, null, (err, page) => {
                        sites = page != null ? page.data : [];
                        callback(err);
                    });
                } else {
                    sites = [];
                    callback();
                }
            },
            (callback) => {
                this._passwordsClient.getPasswordInfo(
                    null, account.id, (err, data) => {
                        passwordInfo = data;
                        callback(err);
                    }
                )
            },
            (callback) => {
                this._settingsClient.getSectionById(
                    null, account.id, (err, data) => {
                        settings = data;
                        callback(err);
                    }
                );
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
                    sites: _.map(sites, s => { return { id: s.id, name: s.name } }),
                    settings: settings,
                    change_pwd_time: passwordInfo != null ? passwordInfo.change_time : null,
                    custom_hdr: account.custom_hdr,
                    custom_dat: account.custom_dat
                };

                let address = HttpRequestDetector.detectAddress(req);
                let client = HttpRequestDetector.detectBrowser(req);
                let platform = HttpRequestDetector.detectPlatform(req);

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
        let invited: boolean = false;
        let roles: string[] = [];

        async.series([
            // Validate password first
            (callback) => {
                callback();
            },
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
            // Activate all pending invitations
            (callback) => {
                let email = signupData.email;

                this._invitationsClient.activateInvitations(
                    null, email, account.id, (err, invitations) => {

                        if (invitations) {
                            // Calculate user roles from activated invitations
                            for (let invitation of invitations) {
                                // Was user invited with the same email?
                                invited = invited || email == invitation.invitee_email;

                                if (invitation.site_id) {
                                    invitation.role = invitation.role || 'user';
                                    let role = invitation.site_id + ':' + invitation.role;
                                    roles.push(role);
                                }
                            }                            
                        }

                        callback(err);
                    }
                );
            },
            // Create email settings for the account
            (callback) => {
                let email = signupData.email;
                let newEmailSettings = <EmailSettingsV1> {
                    id: account.id,
                    name: account.name,
                    email: email,
                    language: account.language
                };

                if (this._emailSettingsClient != null) {
                    if (invited) {
                        this._emailSettingsClient.setVerifiedSettings(
                            null, newEmailSettings, callback
                        );    
                    } else {
                        this._emailSettingsClient.setSettings(
                            null, newEmailSettings, callback
                        );    
                    }
                } else callback();
            }
        ], (err) => {
            if (err) 
                this.sendError(req, res, err);
            else
                this.openSession(req, res, account, roles);
        });
    }

    public signupValidate(req: any, res: any): void {
        let login = req.param('login');

        if (login) {
            this._accountsClient.getAccountByIdOrLogin(
                null, login, (err, account) => {
                    if (err == null && account != null) {
                        err = new BadRequestException(
                            null, 'LOGIN_ALREADY_USED',
                            'Login ' + login + ' already being used'
                        ).withDetails('login', login);
                    }

                    if (err) this.sendError(req, res, err);
                    else res.json(204);
                }
            );
        }
        else {
            res.json(204);
        }
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
        // Cleanup cookie with session id
        // if (this._cookieEnabled)
        //     res.clearCookie(this._cookie);

        if (req.session_id) {
            this._sessionsClient.closeSession(null, req.session_id, (err, session) => {
                if (err) this.sendError(req, res, err);
                else res.json(204);
            });
        } else {
            res.json(204);
        }
    }

    public getSessions(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._sessionsClient.getSessions(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    public restoreSession(req: any, res: any): void {
        let sessionId = req.param('session_id');

        this._sessionsClient.getSessionById(
            null, sessionId, (err, session) => {

                // If session closed then return null
                if (session && !session.active)
                    session = null;

                if (err)
                    this.sendError(req, res, err);
                else if (session)
                    res.json(session);
                else 
                    res.json(204);
            }
        );
    }

    public getUserSessions(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        let userId = req.params.user_id || req.params.account_id;
        filter.setAsObject('user_id', userId);

        this._sessionsClient.getSessions(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    public getCurrentSession(req: any, res: any): void {
        // parse headers first, and if nothing in headers get cookie
        let sessionId = req.headers['x-session-id']; // || req.cookies[this._cookie];

        this._sessionsClient.getSessionById(
            null, sessionId, this.sendResult(req, res)
        );
    }

    public closeSession(req: any, res: any): void {
        let sessionId = req.params.session_id || req.param('session_id');

        this._sessionsClient.closeSession(
            null, sessionId, this.sendResult(req, res)
        );
    }

}

```

This class contains the main operations for managing sessions, which allow us to load existing sessions, create new sessions, close existing sessions, and also authenticate users. This class depends on four microservices - Accounts, Passwords, Roles, and Sessions - each of which is responsible for a certain part of the class’s logic.


The **signup** and **signin** methods perform registration of new users and authentication of existing ones, respectively. Upon successful registration or authorization, the handlers of these operations open a new session as the finishing step of these methods.


The **signout** method closes sessions when users leave the system, or automatically when the session expires.


The **loadSession** interceptor checks a session’s validity, and whether or not it even exists. The interceptor checks the request’s header for a session ID and, if one is found, uses it to retrieve data about the session from the Sessions microservice. If the session is expired or incorrect, an error will be returned. If everything’s all right, information about the user and the session are extracted and attached to the request, and a “green light” is given for further processing.


To perform these operations, our microservice needs to be able to interact with the microservices it depends on. This communication is made simple using standard clients, the links to which are set in the setReferences method.


The authorization mechanism will be responsible for limiting access to resources, depending on the roles a user has been assigned. This part’s implementation will be discussed in [Step 4 - Authorization](../step4).

<span class="hide-title-link">

### [Step 4. Authorization](../step4)

</span>
