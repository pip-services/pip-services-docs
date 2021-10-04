
```bash
npm install
```

Create a TypeScript compiler configuration file with the following lines:

**/tsconfig.json**

```json
{
    "compilerOptions": {
	"declaration": true,
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": false,
        "outDir": "obj",
        "rootDir": ".",
        "sourceMap": true,
	"types": ["node", "mocha", "chai"]
     },
    "exclude": [
        "node_modules",
        "lib",
        "dist",
        "obj",
        "temp"
    ]
}

```
