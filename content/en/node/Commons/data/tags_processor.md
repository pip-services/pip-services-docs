---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Helper class to extract and process search tags from objects.
    The search tags can be kept individually or embedded as hash tags inside text
    like "This text has #hash_tag that can be used for search."
---

### Methods


#### compressTag
Compress a tag by removing special symbols like spaces, '_' and '#'
and converting the tag to lower case.
When tags are compressed they can be matched in search queries.

> `public static` compressTag(tag: string): string

- **tag**: string - the tag to compress.
- **returns**: string - a compressed tag.


#### compressTagList
Compresses a comma-separated list of tags.

> `public static` compressTagList(tagList: string): string[]

- **tagList**: string - a comma-separated list of tags to compress.
- **returns**: string[] - a list with compressed tags.


#### compressTags
Compresses a list of tags.

> `public static` compressTags(tags: string[]): string[]

- **tagList**: string[] - the tags to compress.
- **returns**: string[] - a list with normalized tags.


#### equalTags
Compares two tags using their compressed form.

> `public static` equalTags(tag1: string, tag2: string): boolean

- **tag1**: string - the first tag.
- **tag2**: string - the second tag.
- **returns**: boolean - true if the tags are equal and false otherwise.


#### extractHashTags
Extracts hash tags from a text.

> `public static` extractHashTags(text: string): string[]

- **text**: string - a text that contains hash tags
- **returns**: string[] - a list with extracted and compressed tags.


#### extractHashTagsFromValue
Extracts hash tags from selected fields in an object.

> `public static` extractHashTagsFromValue(obj: any, ...searchFields: string[]): string[]

- **obj**: any - an object which contains hash tags.
- **searchFields**: string[] - a list of fields in the objects where to extract tags
- **returns**: string[] -a list of extracted and compressed tags.


#### normalizeTag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized then can be presented to user in similar shape and form.

> `public static` normalizeTag(tag: string): string

- **tag**: string - the tag to normalize.
- **returns**: string - a normalized tag.


#### normalizeTagList
Normalizes a comma-separated list of tags.

> `public static` normalizeTagList(tagList: string): string[]

- **tagList**: string - a comma-separated list of tags to normalize.
- **returns**: string[] - a list with normalized tags.


#### normalizeTagList
Normalizes a list of tags.

> `public static` normalizeTags(tags: string[]): string[] 

- **tags**: string[] - the tags to normalize.
- **returns**: string[] - a list with normalized tags.