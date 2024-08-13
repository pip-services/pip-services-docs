
**pip_facades_sample_python/operations/version1/SessionOperationsV1.py**

```python
# -*- coding: utf-8 -*-
from typing import List

import bottle
from pip_services4_components.config import ConfigParams
from pip_services4_commons.convert import JsonConverter, TypeCode
from pip_services4_data.query import FilterParams
from pip_services4_commons.errors import UnauthorizedException, BadRequestException
from pip_services4_components.refer import IReferences, Descriptor
from pip_services4_http.controller import RestOperations
from pip_services4_http.controller.HttpRequestDetector import HttpRequestDetector

from pip_facades_sample_python.clients.version1.AccountV1 import AccountV1
from pip_facades_sample_python.clients.version1.EmailSettingsV1 import EmailSettingsV1
from pip_facades_sample_python.clients.version1.IAccountsClientV1 import IAccountsClientV1
from pip_facades_sample_python.clients.version1.IEmailSettingsClientV1 import IEmailSettingsClientV1
from pip_facades_sample_python.clients.version1.IInvitationsClientV1 import IInvitationsClientV1
from pip_facades_sample_python.clients.version1.IPasswordsClientV1 import IPasswordsClientV1
from pip_facades_sample_python.clients.version1.IRolesClientV1 import IRolesClientV1
from pip_facades_sample_python.clients.version1.ISessionsClientV1 import ISessionsClientV1
from pip_facades_sample_python.clients.version1.ISettingsClientV1 import ISettingsClientV1
from pip_facades_sample_python.clients.version1.ISitesClientV1 import ISitesClientV1
from pip_facades_sample_python.clients.version1.SessionV1 import SessionV1
from pip_facades_sample_python.clients.version1.SiteV1 import SiteV1
from pip_facades_sample_python.clients.version1.UserPasswordInfoV1 import UserPasswordInfoV1
from pip_facades_sample_python.operations.version1.SessionUserV1 import SessionUserV1


class SessionsOperationsV1(RestOperations):
    __default_config = ConfigParams.from_tuples(
        'options.cookie_enabled', True,
        'options.cookie', 'x-session-id',
        'options.max_cookie_age', 365 * 24 * 60 * 60 * 1000
    )

    def __init__(self):
        super().__init__()

        self.__cookie: str = 'x-session-id'
        self.__cookie_enabled: bool = True
        self.__max_cookie_age: float = 365 * 24 * 60 * 60 * 1000
        self.__settings_client: ISettingsClientV1 = None
        self.__accounts_client: IAccountsClientV1 = None
        self.__sessions_client: ISessionsClientV1 = None
        self.__passwords_client: IPasswordsClientV1 = None
        self.__roles_client: IRolesClientV1 = None
        self.__email_settings_client: IEmailSettingsClientV1 = None
        self.__sites_client: ISitesClientV1 = None
        self.__invitations_client: IInvitationsClientV1 = None

        self._dependency_resolver.put('settings', Descriptor('pip-services-settings', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('accounts', Descriptor('pip-services-accounts', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('passwords', Descriptor('pip-services-passwords', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('roles', Descriptor('pip-services-roles', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('emailsettings',
                                      Descriptor('pip-services-emailsettings', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('sessions', Descriptor('pip-services-sessions', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('sites', Descriptor('pip-services-sites', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('invitations', Descriptor('pip-services-invitations', 'client', '*', '*', '1.0'))

    def configure(self, config: ConfigParams):
        config = config.set_defaults(SessionsOperationsV1.__default_config)
        self._dependency_resolver.configure(config)

        self.__cookie_enabled = config.get_as_boolean_with_default('options.cookie_enabled', self.__cookie_enabled)
        self.__cookie = config.get_as_string_with_default('options.cookie', self.__cookie)
        self.__max_cookie_age = config.get_as_long_with_default('options.max_cookie_age', self.__max_cookie_age)

    def set_references(self, references: IReferences):
        super().set_references(references)

        self.__settings_client = self._dependency_resolver.get_one_required('settings')
        self.__sessions_client = self._dependency_resolver.get_one_required('sessions')
        self.__accounts_client = self._dependency_resolver.get_one_required('accounts')
        self.__passwords_client = self._dependency_resolver.get_one_required('passwords')
        self.__roles_client = self._dependency_resolver.get_one_required('roles')
        self.__email_settings_client = self._dependency_resolver.get_one_required('emailsettings')
        self.__sites_client = self._dependency_resolver.get_one_required('sites')
        self.__invitations_client = self._dependency_resolver.get_one_required('invitations')

    def load_session(self):
        # parse headers first, and if nothing in headers get cookie
        session_id = bottle.request.headers.get('x-session-id')

        session, err = None, None

        if session_id:
            try:
                session = self.__sessions_client.get_session_by_id('facade', session_id)
                if session is None:
                    raise UnauthorizedException(
                        'facade',
                        'SESSION_NOT_FOUND',
                        'Session invalid or already expired.'
                    ).with_details('session_id', session_id).with_status(440)
            except Exception as err:
                return self._send_error(err)

            if err is None and session:
                # Associate session user with the request
                bottle.request.user_id = session.user_id
                bottle.request.user_name = session.user_name
                bottle.request.user = session.user
                bottle.request.session_id = session.id
            else:
                return self._send_error(err)

    def open_session(self, account: AccountV1, roles: List[str], ):
        try:
            session: SessionV1 = None
            sites: List[SiteV1] = None
            passwordInfo: UserPasswordInfoV1 = None
            settings: ConfigParams = None

            # Retrieve sites for user

            site_roles = [] if not roles else list(filter(lambda x: x.find(':') > 0, roles))
            site_ids = [] if not site_roles else list(map(lambda x: x[0:x.find(':')] if x.find(':') >= 0 else x, site_roles))

            if len(site_ids) > 0:
                filter_params = FilterParams.from_tuples('ids', site_ids)
                page = self.__sites_client.get_sites(None, filter_params, None)
                sites = [] if page is None else page.data
            else:
                sites = []

            password_info = self.__passwords_client.get_password_info(None, account.id)

            settings = self.__settings_client.get_section_by_id(None, account.id)

            # Open a new user session
            user = SessionUserV1(
                id=account.id,
                name=account.name,
                login=account.login,
                create_time=account.create_time,
                time_zone=account.time_zone,
                language=account.language,
                theme=account.theme,
                roles=roles,
                sites=list(map(lambda x: {'id': x.id, 'name': x.name}, sites)),
                settings=settings,
                change_pwd_time=None if password_info is None else password_info.change_time,
                custom_hdr=account.custom_hdr,
                custom_dat=account.custom_dat
            )

            address = HttpRequestDetector.detect_address(bottle.request)
            client = HttpRequestDetector.detect_browser(bottle.request)
            platform = HttpRequestDetector.detect_platform(bottle.request)

            session = self.__sessions_client.open_session(None, account.id, account.name, address, client, user, None)
            return JsonConverter.to_json(session)
        except Exception as err:
            return self._send_error(err)

    def signup(self):
        try:
            signup_data = bottle.request.json if isinstance(bottle.request.json, dict) else JsonConverter.from_json(
                TypeCode.Map, bottle.request.json)
            account: AccountV1 = None
            invited: bool = False
            roles: List[str] = []

            # Validate password first
            # Todo: complete implementation after validate password is added

            # Create account
            new_account = AccountV1(
                name=signup_data.get('name'),
                login=signup_data.get('login') or signup_data.get('email'),
                language=signup_data.get('language'),
                theme=signup_data.get('theme'),
                time_zone=signup_data.get('time_zone')
            )

            account = self.__accounts_client.create_account(None, new_account)

            # Create password for the account
            password = signup_data.get('password')

            self.__passwords_client.set_password(None, account.id, password)

            # Activate all pending invitations
            email = signup_data.get('email')

            invitations = self.__invitations_client.activate_invitations(None, email, account.id)
            if invitations:
                # Calculate user roles from activated invitations
                for invitation in invitations:
                    # Was user invited with the same email?
                    invited = invited or email == invitation.invitee_email

                    if invitation.site_id:
                        invitation.role = invitation.role or 'user'
                        role = invitation.site_id + ':' + invitation.role
                        roles.append(role)

            # Create email settings for the account
            new_email_settings = EmailSettingsV1(
                id=account.id,
                name=account.name,
                email=email,
                language=account.language
            )

            if self.__email_settings_client is not None:
                if invited:
                    self.__email_settings_client.set_verified_settings(None, new_email_settings)
                else:
                    self.__email_settings_client.set_settings(None, new_email_settings)

            return self.open_session(account, roles)
        except Exception as err:
            return self._send_error(err)

    def signup_validate(self):
        login = dict(bottle.request.query.decode()).get('login')

        if login:
            try:
                account = self.__accounts_client.get_account_by_id_or_login(None, login)
                if account:
                    raise BadRequestException(
                        None, 'LOGIN_ALREADY_USED',
                        'Login ' + login + ' already being used'
                    ).with_details('login', login)

                return bottle.HTTPResponse(status=204)

            except Exception as err:
                return self._send_error(err)
        else:
            return bottle.HTTPResponse(status=204)

    def signin(self):
        json_data = bottle.request.json if isinstance(bottle.request.json, dict) else JsonConverter.from_json(
            TypeCode.Map, bottle.request.json)

        login = json_data.get('login')
        password = json_data.get('password')

        account: AccountV1 = None
        roles: List[str] = []

        # Find user account
        try:
            account = self.__accounts_client.get_account_by_id_or_login(None, login)

            if account is None:
                raise BadRequestException(
                    None,
                    'WRONG_LOGIN',
                    'Account ' + login + ' was not found'
                ).with_details('login', login)

            # Authenticate user
            result = self.__passwords_client.authenticate(None, account.id, password)
            # wrong password error is UNKNOWN when use http client
            if result is False:
                raise BadRequestException(
                    None,
                    'WRONG_PASSWORD',
                    'Wrong password for account ' + login
                ).with_details('login', login)

            # Retrieve user roles
            if self.__roles_client:
                roles = self.__roles_client.get_roles_by_id(None, account.id, )
            else:
                roles = []

            return self.open_session(account, roles)
        except Exception as err:
            return self._send_error(err)

    def signout(self):
        if hasattr(bottle.request, 'session_id'):
            try:
                self.__sessions_client.close_session(None, bottle.request.session_id)
                return bottle.HTTPResponse(status=204)
            except Exception as err:
                self._send_error(err)

        return bottle.HTTPResponse(status=204)

    def get_sessions(self):
        filter_params = self._get_filter_params()
        paging = self._get_paging_params()

        result = self.__sessions_client.get_sessions(None, filter_params, paging)
        return self._send_result(result)

    def restore_session(self):
        try:
            session_id = dict(bottle.request.query.decode()).get('session_id')

            session = self.__sessions_client.get_session_by_id(None, session_id)

            # If session closed then return null
            if session and not session.active:
                session = None

            if session:
                return JsonConverter.to_json(session)
            else:
                return bottle.HTTPResponse(status=204)
        except Exception as err:
            return self._send_error(err)

    def get_user_sessions(self, user_id):
        filter_params = self._get_filter_params()
        paging = self._get_paging_params()

        filter_params.set_as_object('user_id', user_id)

        sessions = self.__sessions_client.get_sessions(None, filter_params, paging)
        return self._send_result(sessions.to_json())

    def get_current_session(self):
        # parse headers first, and if nothing in headers get cookie
        session_id = bottle.request.headers.get('x-session-id')

        session = self.__sessions_client.get_session_by_id(None, session_id)
        return self._send_result(session)

    def close_session(self, user_id, session_id):

        result = self.__sessions_client.close_session(None, session_id)
        return self._send_result(result)

```
