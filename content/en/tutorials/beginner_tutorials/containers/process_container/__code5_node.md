
```ts
export async function main() {
    let runner = new MyProcess();
    try {
        runner.run(process.argv);
    } catch (err) {
        console.error(err)
    }
}
```
