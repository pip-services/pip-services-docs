
**lib/src/operations/version1/SessionOperationsV1.dart**

```dart
import 'dart:async';
import 'dart:convert';

import 'package:pip_facade_sample_dart/pip_facade_sample_dart.dart';
import 'package:pip_clients_accounts/pip_clients_accounts.dart';
import 'package:pip_clients_passwords/pip_clients_passwords.dart';
import 'package:pip_clients_roles/pip_clients_roles.dart';
import 'package:pip_clients_sessions/pip_clients_sessions.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services_accounts/pip_services_accounts.dart';
import 'package:pip_services_passwords/pip_services_passwords.dart';
import 'package:pip_services_sessions/pip_services_sessions.dart';
import 'package:shelf_router/shelf_router.dart';
import 'package:shelf/shelf.dart';

class SessionsOperationsV1 extends RestOperations {
  final ConfigParams _defaultConfig1 = ConfigParams.fromTuples([
    [
      'options.cookie_enabled',
      true,
      'options.cookie',
      'x-session-id',
      'options.max_cookie_age',
      365 * 24 * 60 * 60 * 1000
    ]
  ]);

  String _cookie = 'x-session-id';
  bool _cookieEnabled = true;
  int _maxCookieAge = 365 * 24 * 60 * 60 * 1000;

  late IAccountsClientV1 _accountsClient;
  late ISessionsClientV1 _sessionsClient;
  late IPasswordsClientV1 _passwordsClient;
  late IRolesClientV1 _rolesClient;

  SessionsOperationsV1() : super.withName('sessionsOperations') {
    dependencyResolver.put('accounts',
        Descriptor('pip-services-accounts', 'client', '*', '*', '1.0'));
    dependencyResolver.put('passwords',
        Descriptor('pip-services-passwords', 'client', '*', '*', '1.0'));
    dependencyResolver.put(
        'roles', Descriptor('pip-services-roles', 'client', '*', '*', '1.0'));
    dependencyResolver.put('sessions',
        Descriptor('pip-services-sessions', 'client', '*', '*', '1.0'));
  }

  @override
  void configure(ConfigParams config) {
    config = config.setDefaults(_defaultConfig1);
    dependencyResolver.configure(config);

    _cookieEnabled = config.getAsBooleanWithDefault(
        'options.cookie_enabled', _cookieEnabled);
    _cookie = config.getAsStringWithDefault('options.cookie', _cookie);
    _maxCookieAge =
        config.getAsLongWithDefault('options.max_cookie_age', _maxCookieAge);
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _sessionsClient =
        dependencyResolver.getOneRequired<ISessionsClientV1>('sessions');
    _accountsClient =
        dependencyResolver.getOneRequired<IAccountsClientV1>('accounts');
    _passwordsClient =
        dependencyResolver.getOneRequired<IPasswordsClientV1>('passwords');
    _rolesClient = dependencyResolver.getOneRequired<IRolesClientV1>('roles');
  }

  Future loadSession(Request req) async {
    // Is user really cached? If yes, then we shall reinvalidate cache when connections are changed
    // if (req.user) {
    //     callback(null, req.user);
    //     return;
    // }
    // parse headers first, and if nothing in headers get cookie
    var correlationId = getCorrelationId(req);
    var sessionId = req.headers['x-session-id'];

    if (sessionId != null && sessionId.isNotEmpty) {
      var result = await _sessionsClient.getSessionById(
          correlationId ?? 'facade', sessionId);

      if (result == null) {
        throw UnauthorizedException('facade', 'SESSION_NOT_FOUND',
                'Session invalid or already expired.')
            .withDetails('session_id', sessionId)
            .withStatus(440);
      } else {
        // Associate session user with the request
        var user = {
          'user': {
            'user_id': result.user_id as Object,
            'user_name': result.user_name as Object,
            'user': result.user as Object,
            'session_id': result.id as Object
          }
        };

        req = req.change(context: user);
      }
    }

    return req;
  }

  FutureOr<Response> openSession(
      Request req, AccountV1 account, List<String> roles) async {
    SessionV1? session;
    UserPasswordInfoV1? passwordInfo;
    var settings = ConfigParams();

    print('open session');

    try {
      passwordInfo = await _passwordsClient.getPasswordInfo(null, account.id!);

      // Open a new user session
      var user = SessionUserV1(
          id: account.id,
          name: account.name,
          login: account.login,
          create_time: account.create_time,
          time_zone: account.time_zone,
          language: account.language,
          theme: account.theme,
          roles: roles,
          settings: settings,
          change_pwd_time:
              passwordInfo != null ? passwordInfo.change_time : null,
          custom_hdr: account.custom_hdr,
          custom_dat: account.custom_dat);

      var address = HttpRequestDetector.detectAddress(req);
      var client = HttpRequestDetector.detectBrowser(req);

      session = await _sessionsClient.openSession(
          null, account.id, account.name, address, client, user, null);

      return sendResult(req, null, session);
    } catch (ex) {
      return sendError(req, ex);
    }
  }

  FutureOr<Response> signup(Request req) async {
    try {
      var signupData = jsonDecode(await req.readAsString());

      AccountV1? account;

      List<String> roles =
          signupData['roles'] != null && signupData['roles'] is List
              ? signupData['roles']
              : [];

      // Create account
      var newAccount = AccountV1(
          name: signupData['name'],
          login: signupData['login'] ??
              signupData['email'], // Use email by default
          language: signupData['language'],
          theme: signupData['theme'],
          time_zone: signupData['time_zone']);

      account = await _accountsClient.createAccount(null, newAccount);

      // Create password for the account
      var password = signupData['password'];
      await _passwordsClient.setPassword(null, account!.id!, password);

      // Create roles for the account
      if (roles.isNotEmpty) {
        await _rolesClient.grantRoles(null, account.id!, roles);
      }

      return await openSession(req, account, roles);
    } catch (ex) {
      return await sendError(req, ex);
    }
  }

  // Future signupValidate(RequestContext req, ResponseContext res) async {
  //   await safeInvoke(req, res, componentName + '.signupValidate', () async {
  //     var correlationId = getCorrelationId(req) ?? 'facade';
  //     var login = req.params['login'] ?? req.queryParameters['login'];

  //     if (login) {
  //       var result =
  //           await _accountsClient.getAccountByIdOrLogin(correlationId, login);
  //       if (result != null) {
  //         throw BadRequestException(correlationId, 'LOGIN_ALREADY_USED',
  //                 'Login ' + login + ' already being used')
  //             .withDetails('login', login);
  //       }
  //     } else {
  //       await sendEmptyResult(req, res, null);
  //     }
  //   }, (ex) {
  //     sendError(req, res, ex);
  //   });
  // }

  FutureOr<Response> signin(Request req) async {
    try {
      var body = await req.readAsString();
      var json = body.isNotEmpty ? jsonDecode(body) : {};

      var login = json['login'];
      var password = json['password'];

      AccountV1? account;
      List<String> roles;

      // Find user account
      account = await _accountsClient.getAccountByIdOrLogin(null, login ?? '');

      if (account == null) {
        throw BadRequestException(null, 'WRONG_LOGIN',
                'Account ' + login.toString() + ' was not found')
            .withDetails('login', login);
      }

      // Authenticate user
      var result =
          await _passwordsClient.authenticate(null, account.id!, password!);

      if (result == false) {
        throw BadRequestException(null, 'WRONG_PASSWORD',
                'Wrong password for account ' + login.toString())
            .withDetails('login', login);
      }

      // Retrieve user roles
      roles = await _rolesClient.getRolesById(null, account.id!) ?? [];

      return await openSession(req, account, roles);
    } catch (ex) {
      return await sendError(req, ex);
    }
  }

  FutureOr<Response> signout(Request req) async {
    if (req.headers['session_id'] != null) {
      try {
        await _sessionsClient.closeSession(null, req.headers['session_id']!);
        return await sendEmptyResult(req, null);
      } catch (ex) {
        return await sendError(req, ex);
      }
    }
    return await sendEmptyResult(req, null);
  }
}
```

