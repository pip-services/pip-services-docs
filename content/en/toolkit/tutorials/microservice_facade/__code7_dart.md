
**lib/src/services/version1/Authorize.dart**

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

class AuthorizerV1 {
  BasicAuthorizer basicAuth = BasicAuthorizer();
  RoleAuthorizer roleAuth = RoleAuthorizer();

  // Anybody who entered the system
  Future<Response?> Function(Request req, Future Function() next) anybody() {
    return (Request req, Function next) async => await next();
  }

  // Only registered and authenticated users
  Future<Response?> Function(Request req, Future Function() next) signed() {
    return (Request req, Function next) async {
      var err = await basicAuth.signed(req, req.context['user']);
      if (err == null) {
        return await next();
      } else {
        return err;
      }
    };
  }

  // Only the user itself
  Future<Response?> Function(Request req, Future Function() next) owner(
      [String idParam = 'user_id']) {
    return (Request req, Function next) async {
      var user = req.context['user'] as Map?;
      var partyId = req.params[idParam] ?? req.url.queryParameters[idParam];
      if (user == null) {
        return HttpResponseSender.sendError(
            req,
            UnauthorizedException(null, 'NOT_SIGNED',
                    'User must be signed in to perform this operation')
                .withStatus(401));
      } else if (partyId == null) {
        return HttpResponseSender.sendError(
            req,
            UnauthorizedException(null, 'NO_USER_ID', 'User id is not defined')
                .withStatus(401));
      } else {
        var isOwner = partyId == user['user_id'];

        if (!isOwner) {
          return HttpResponseSender.sendError(
              req,
              UnauthorizedException(
                      null, 'NOT_OWNER', 'Only user owner access is allowed')
                  .withDetails('user_id', partyId)
                  .withStatus(403));
        } else {
          return await next();
        }
      }
    };
  }
}


```

