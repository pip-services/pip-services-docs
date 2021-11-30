
**lib/src/operations/version1/SessionUserV1.dart**

```dart
class SessionUserV1 {
  /* Identification */
  String? id;
  String? login;
  String? name;
  DateTime? create_time;

  /* User information */
  String? time_zone;
  String? language;
  String? theme;

  /* Security info **/
  List<String>? roles;
  DateTime? change_pwd_time;
  List<dynamic>? sites;
  dynamic settings;

  /* Custom fields */
  dynamic custom_hdr;
  dynamic custom_dat;

  SessionUserV1(
      {String? id,
      String? login,
      String? name,
      DateTime? create_time,
      String? time_zone,
      String? language,
      String? theme,
      List<String>? roles,
      DateTime? change_pwd_time,
      List<dynamic>? sites,
      dynamic settings,
      dynamic custom_hdr,
      dynamic custom_dat})
      : id = id,
        login = login,
        name = name,
        create_time = create_time,
        time_zone = time_zone,
        language = language,
        theme = theme,
        roles = roles,
        change_pwd_time = change_pwd_time,
        sites = sites,
        settings = settings,
        custom_dat = custom_dat,
        custom_hdr = custom_hdr;

  void fromJson(Map<String, dynamic> json) {
    id = json['id'];
    login = json['login'];
    name = json['name'];
    var create_time_json = json['change_time'];
    create_time =
        create_time_json != null ? DateTime.tryParse(create_time_json) : null;
    time_zone = json['time_zone'];
    language = json['language'];
    theme = json['theme'];
    roles = json['roles'];
    var change_pwd_time_json = json['change_pwd_time'];
    change_pwd_time = change_pwd_time_json != null
        ? DateTime.tryParse(change_pwd_time_json)
        : null;
    sites = json['sites'];
    settings = json['settings'];
    custom_hdr = json['custom_hdr'];
    custom_dat = json['custom_dat'];
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'id': id,
      'login': login,
      'name': name,
      'create_time':
          create_time != null ? create_time!.toIso8601String() : create_time,
      'time_zone': time_zone,
      'language': language,
      'theme': theme,
      'roles': roles,
      'change_pwd_time': change_pwd_time != null
          ? change_pwd_time!.toIso8601String()
          : change_pwd_time,
      'sites': sites,
      'settings': settings,
      'custom_hdr': custom_hdr,
      'custom_dat': custom_dat
    };
  }

  factory SessionUserV1.fromJson(Map<String, dynamic> json) {
    var sessionUser = SessionUserV1();
    sessionUser.fromJson(json);
    return sessionUser;
  }
}

```

