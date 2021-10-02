Add a package.json file with the following lines to the root of the project’s folder:

**/package.yaml**

```yaml
environment:
  sdk: ">=2.0.0 <3.0.0"

dependencies:
  pip_services3_commons: ">=1.0.5 <2.0.0"
  pip_services3_components: ">=1.0.2 <2.0.0"
  pip_services3_data: ">=1.0.0 <2.0.0"
  pip_services3_mongodb: ">=1.0.2 <2.0.0"
  pip_services3_rpc: ">=1.0.2 <2.0.0"
  pip_services3_container: ">=1.0.3 <2.0.0"
  http: "^0.12.0"
  angel_framework: ^2.1.1
  fixnum: ^0.10.11

dev_dependencies:
  test: '>=1.14.2 <2.0.0'
```
