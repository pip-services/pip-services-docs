
```ts
export async function main() { 
    try {
        // Step 1 - Database selection
        // process.env['MYSQL_ENABLED'] = 'true';
        process.env['POSTGRES_ENABLED'] = 'true';

        // Step 2 - The run() command
        let proc = new HelloFriendProcess();
        proc.run(process.argv);
    } catch (ex) {
        console.error(ex);
    }
}
```
