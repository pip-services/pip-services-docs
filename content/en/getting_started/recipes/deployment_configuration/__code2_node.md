
```ts
import { IConfigurable, IReferenceable } from "pip-services3-commons-nodex";


export class HelloFriendController implements IConfigurable, IReferenceable {
    private defaultName: string;
    private persistence: IMyDataPersistence;

    public constructor() {
        this.defaultName = "Pip User";
    }

    public configure(config: ConfigParams): void {
        this.defaultName = config.getAsStringWithDefault("default_name", this.defaultName);
    }

    public setReferences(references: IReferences): void {
        this.persistence = references.getOneRequired(new Descriptor("hello-friend", "persistence", "*", "*", "1.0"));
    }

    public async greeting(): Promise<string> {
        let filter = FilterParams.fromTuples("type", "friend");
        let selectedFilter = await this.persistence.getOneRandom(null, filter);
        let name = selectedFilter != null ? selectedFilter.name : null;

        return `Hello, ${name} !`;
    }

    public async create(correlationId: string, item: MyFriend): Promise<MyFriend>  {
        let res = await this.persistence.create(correlationId, item);
        return res;
    }
}

```

