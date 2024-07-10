
**src/operations/version1/SessionOperationsV1.ts**
```ts
import { ConfigParams } from 'pip-services4-components-node';
import { FilterParams } from 'pip-services4-data-node';
import { IReferences } from 'pip-services4-components-node';
import { Descriptor } from 'pip-services4-components-node'; 
import { BadRequestException } from 'pip-services4-commons-node';
import { UnauthorizedException } from 'pip-services4-commons-node';
import { HttpRequestDetector } from 'pip-services4-http-node';
import { RestOperations } from 'pip-services4-http-node';

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
        this._dependencyResolver.put('sites', new Descriptor('pip-services-sites', 'client', '*', '*', '1.0'));
        this._dependencyResolver.put('invitations', new Descriptor('pip-services-invitations', 'client', '*', '*', '1.0'));
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
    
    public async loadSession(req: any, res: any, next: () => void): Promise<void> {
        // parse headers first, and if nothing in headers get cookie
        let sessionId = req.headers['x-session-id'];
        
        if (sessionId) {
            let session = await this._sessionsClient.getSessionById('facade', sessionId);

            if (session == null) {
                let err = new UnauthorizedException(
                    'facade',
                    'SESSION_NOT_FOUND',
                    'Session invalid or already expired.'
                ).withDetails('session_id', sessionId).withStatus(440);

                this.sendError(req, res, err);
            } else {
                // Associate session user with the request
                req.user_id = session.user_id;
                req.user_name = session.user_name;
                req.user = session.user;
                req.session_id = session.id;
                next();
            }
        } else {
            next();
        }
    }

    public async openSession(req: any, res: any, account: AccountV1, roles: string[]): Promise<void> {
        let session: SessionV1;
        let sites: SiteV1[];
        let passwordInfo: UserPasswordInfoV1;
        let settings: ConfigParams;

        try {
            let siteRoles = roles.filter(r => r.indexOf(':') > 0);

            let siteIds = siteRoles.map((r) => {
                let pos = r.indexOf(':');
                return pos >= 0 ? r.substring(0, pos) : r;
            });

            if (siteIds.length > 0) {
                let filter = FilterParams.fromTuples('ids', siteIds);
                let page = await this._sitesClient.getSites(null, filter, null);
                sites = page != null ? page.data : [];
            } else {
                sites = [];
            }

            passwordInfo = await this._passwordsClient.getPasswordInfo(null, account.id);

            settings = await this._settingsClient.getSectionById(null, account.id);

            // Open a new user session
            let user = <SessionUserV1>{
                id: account.id,
                name: account.name,
                login: account.login,
                create_time: account.create_time,
                time_zone: account.time_zone,
                language: account.language,
                theme: account.theme,
                roles: roles,
                sites: sites.map(s => { return { id: s.id, name: s.name } }),
                settings: settings,
                change_pwd_time: passwordInfo != null ? passwordInfo.change_time : null,
                custom_hdr: account.custom_hdr,
                custom_dat: account.custom_dat
            };

            let address = HttpRequestDetector.detectAddress(req);
            let client = HttpRequestDetector.detectBrowser(req);
            let platform = HttpRequestDetector.detectPlatform(req);

            session = await this._sessionsClient.openSession(
                null, account.id, account.name,
                address, client, user, null
            );

            this.sendResult(req, res, session);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async signup(req: any, res: any): Promise<void> {
        let signupData = req.body;
        let account: AccountV1 = null;
        let invited: boolean = false;
        let roles: string[] = [];

        try {
            // Validate password first
            // Todo: complete implementation after validate password is added

            // Create account
            let newAccount = <AccountV1>{
                name: signupData.name,
                login: signupData.login || signupData.email, // Use email by default
                language: signupData.language,
                theme: signupData.theme,
                time_zone: signupData.time_zone
            };

            account = await this._accountsClient.createAccount(
                null, newAccount
            )

            // Create password for the account
            let password = signupData.password;

            this._passwordsClient.setPassword(
                null, account.id, password
            );

            // Activate all pending invitations
            let email = signupData.email;

            let invitations = await this._invitationsClient.activateInvitations(
                null, email, account.id);

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

            // Create email settings for the account
            let newEmailSettings = <EmailSettingsV1>{
                id: account.id,
                name: account.name,
                email: email,
                language: account.language
            };

            if (this._emailSettingsClient != null) {
                if (invited) {
                    this._emailSettingsClient.setVerifiedSettings(
                        null, newEmailSettings
                    );
                } else {
                    this._emailSettingsClient.setSettings(
                        null, newEmailSettings
                    );
                }
            }

            await this.openSession(req, res, account, roles);
        }
        catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async signupValidate(req: any, res: any): Promise<void> {
        let login = req.param('login');

        if (login) {
            let account = await this._accountsClient.getAccountByIdOrLogin(null, login);
            if (account != null) {
                let err = new BadRequestException(
                    null, 'LOGIN_ALREADY_USED',
                    'Login ' + login + ' already being used'
                ).withDetails('login', login);

                this.sendError(req, res, err);
            } else this.sendEmptyResult(req, res);
        }
        else {
            this.sendEmptyResult(req, req);
        }
    }

    public async signin(req: any, res: any): Promise<void> {
        let login = req.param('login');
        let password = req.param('password');

        let account: AccountV1;
        let roles: string[] = [];

        try {
            // Find user account
            account = await this._accountsClient.getAccountByIdOrLogin(null, login);

            if (account == null) {
                throw new BadRequestException(
                    null,
                    'WRONG_LOGIN',
                    'Account ' + login + ' was not found'
                ).withDetails('login', login);
            }

            // Authenticate user
            let result = await this._passwordsClient.authenticate(null, account.id, password);

            // wrong password error is UNKNOWN when use http client
            if (result == false) {
                throw new BadRequestException(
                    null,
                    'WRONG_PASSWORD',
                    'Wrong password for account ' + login
                ).withDetails('login', login);
            }

            // Retrieve user roles
            if (this._rolesClient) {
                roles = await this._rolesClient.getRolesById(null, account.id);
            }

            await this.openSession(req, res, account, roles);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async signout(req: any, res: any): Promise<void> {
        if (req.session_id) {
            try {
                await this._sessionsClient.closeSession(null, req.session_id);
                this.sendEmptyResult(req, res)
            } catch (err) {
                this.sendError(req, res, err);
            }
        } else {
            this.sendEmptyResult(req, res)
        }
    }

    public async getSessions(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        let sessions = await this._sessionsClient.getSessions(
            null, filter, paging
        );

        this.sendResult(req, res, sessions);
    }

    public async restoreSession(req: any, res: any): Promise<void> {
        let sessionId = req.param('session_id');

        let session = await this._sessionsClient.getSessionById(null, sessionId);

        // If session closed then return null
        if (session && !session.active)
            session = null;

        if (session)
            this.sendResult(req, res, session);
        else
            this.sendEmptyResult(req, res);
    }

    public async getUserSessions(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        let userId = req.params.user_id || req.params.account_id;
        filter.setAsObject('user_id', userId);

        let result = await this._sessionsClient.getSessions(
            null, filter, paging
        );

        this.sendResult(req, res, result);
    }

    public async getCurrentSession(req: any, res: any): Promise<void> {
        // parse headers first, and if nothing in headers get cookie
        let sessionId = req.headers['x-session-id']; 

        let result = await this._sessionsClient.getSessionById(null, sessionId);

        this.sendResult(req, res, result);
    }

    public async closeSession(req: any, res: any): Promise<void> {
        let sessionId = req.params.session_id || req.param('session_id');

        let result = await this._sessionsClient.closeSession(null, sessionId);

        this.sendResult(req, res, result);
    }

}

```
