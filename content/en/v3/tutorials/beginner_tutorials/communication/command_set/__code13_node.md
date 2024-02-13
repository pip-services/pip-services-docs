
```ts
let myEvents = new MyEventSet();

let result3 = myEvents.getEvents();

for (let event of result3)
{
    console.log(event.getName());
}

// Returns:    
// event1
// event2
// event3
```
