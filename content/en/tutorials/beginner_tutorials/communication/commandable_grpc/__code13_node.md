
```ts
export async function main() { 
    try {
        let proc = new MyDataProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}
```
