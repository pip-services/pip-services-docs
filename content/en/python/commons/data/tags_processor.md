---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Helper class to extract and process search tags from objects.
    The search tags can be kept individually or embedded as hash tags inside text
    like "This text has #hash_tag that can be used for search."
---

### Methods


#### compress_tag
Compress a tag by removing special symbols like spaces, '_' and '#'
and converting the tag to lower case.
When tags are compressed they can be matched in search queries.

> `static` compress_tag(tag: str): str

- **tag**: str - the tag to compress.
- **returns**: str - a compressed tag.


#### compress_tag_list
Compresses a comma-separated list of tags.

> `static` compress_tag_list(tag_list: str): List[str]

- **tag_list**: str - a comma-separated list of tags to compress.
- **returns**: List[str] - a list with compressed tags.


#### compress_tags
Compresses a list of tags.

> `static` compress_tags(tags: List[str]): List[str]

- **tagList**: List[str] - the tags to compress.
- **returns**: List[str] - a list with normalized tags.


#### equal_tags
Compares two tags using their compressed form.

> `static` equal_tags(tag1: str, tag2: str): bool

- **tag1**: str - the first tag.
- **tag2**: str - the second tag.
- **returns**: bool - true if the tags are equal and false otherwise.


#### extract_hash_tags
Extracts hash tags from a text.

> `static` extractHashTags(text: str): List[str]

- **text**: str - a text that contains hash tags
- **returns**: List[str] - a list with extracted and compressed tags.


#### extract_hash_tags_from_value
Extracts hash tags from selected fields in an object.

> `static` extract_hash_tags_from_value(obj: Any, *search_fields: string[]): List[str]

- **obj**: Any - an object which contains hash tags.
- **search_fields**: str - a list of fields in the objects where to extract tags
- **returns**: List[str] -a list of extracted and compressed tags.


#### normalize_tag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized then can be presented to user in similar shape and form.

> `static` normalize_tag(tag: str): str

- **tag**: str - the tag to normalize.
- **returns**: str - a normalized tag.


#### normalize_tag_list
Normalizes a comma-separated list of tags.

> `static` normalize_tag_list(tagList: str): List[str]

- **tag_list**: str - a comma-separated list of tags to normalize.
- **returns**: List[str] - a list with normalized tags.


#### normalize_tags
Normalizes a list of tags.

> `public static` normalize_tags(tags: List[str]): List[str]

- **tags**: List[str] - the tags to normalize.
- **returns**: List[str] - a list with normalized tags.