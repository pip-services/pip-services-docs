---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Helper class used to extract and process search tags from objects.

---

### Description

The TagsProcessor class allows you to extract and process search tags from objects.

Important points

- The search tags can be kept individually or embedded as hash tags inside text. E.g. "This text has #hash_tag that can be used for search."

### Static methods

#### compressTagList
Compresses a comma-separated list of tags.

> `public static` List<String> compressTagList(String tagList)

- **tagList**: String - comma-separated list of tags to compress.
- **returns**: List<String> - list with compressed tags.


#### compressTags
Compresses a list of tags.

> `public static` List<String> compressTags(List<String> tags)

- **tags**: List<String> - tag to compress.
- **returns**: List<String> - list of compressed tags.

#### equalTags
Compares two tags using their compressed form.

> `public static` Boolean equalTags(String tag1, String tag2)

- **tag1**: String - first tag.
- **tag2**: String - second tag.
- **returns**: Boolean - true if the tags are equal and false otherwise.


#### extractHashTags
Extracts hash tags from a text.

> `public static` List<String> extractHashTags(String text)

- **text**: String - text that contains hash tags
- **returns**: List<String> - list with extracted and compressed tags.


#### extractHashTagsFromValue
Extracts hash tags from selected fields in an object.

> `public static` List<String> extractHashTagsFromValue(Object obj, List<String> searchFields)

- **obj**: Object - object which contains hash tags.
- **searchFields**: List<String> - list of fields in the objects where to extract tags
- **returns**: List<String> - list of extracted and compressed tags.


#### normalizeTag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized, they are presented in similar shape and form.

> `public static` List<String> normalizeTags(List<String> tags)

- **tag**: List<String> - tag to normalize.
- **returns**: List<String> - normalized tag.


#### normalizeTagList
Normalizes a comma-separated list of tags.

> `public static` List<String> normalizeTagList(String tagList)

- **tagList**: String - comma-separated list of tags to normalize.
- **returns**: List<String> - list with normalized tags.


#### normalizeTags
Normalizes a list of tags.

> `public static` List<String> normalizeTags(List<String> tags)

- **tags**: List<String> - tags to normalize.
- **returns**: List<String> - list with normalized tags.
