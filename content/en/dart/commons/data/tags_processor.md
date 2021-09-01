---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Helper class used to extract and process search tags from objects.

---

### Description

The TagsProcessor class allows you to extract and process search tags from objects.

**Important points**

- The search tags can be kept individually or embedded as hash tags inside text. E.g. "This text has #hash_tag that can be used for search."

### Static methods

#### compressTag
Compress a tag by removing special symbols like spaces, '_' and '#'
and converting the tag to lower case.
When tags are compressed, they can be matched in search queries.

> `static` String compressTag(String tag)

- **tag**: String - tag to compress.
- **returns**: String - compressed tag.


#### compressTagList
Compresses a comma-separated list of tags.

> `static` List\<String\> compressTagList(String tagList)

- **tagList**: String - comma-separated list of tags to compress.
- **returns**: List\<String\> - list with compressed tags.


#### compressTags
Compresses a list of tags.

> `static` List\<String\> compressTags(List\<String\> tags)

- **tagList**: List\<String\> - tags to compress.
- **returns**: List\<String\> - list with normalized tags.


#### equalTags
Compares two tags using their compressed form.

> `static` bool equalTags(String tag1, String tag2)

- **tag1**: String - first tag.
- **tag2**: String - second tag.
- **returns**: bool - true if the tags are equal and false otherwise.


#### extractHashTags
Extracts hash tags from a text.

> `static` List\<String\> extractHashTags(String text)

- **text**: String - text that contains hash tags
- **returns**: List\<String\> - list with extracted and compressed tags.


#### extractHashTagsFromValue
Extracts hash tags from selected fields in an object.

> `static` List\<String\> extractHashTagsFromValue(dynamic obj, List\<String\> searchFields)

- **obj**: dynamic - object which contains hash tags.
- **searchFields**: List\<String\> - list of fields in the objects where to extract tags
- **returns**: List\<String\> - list of extracted and compressed tags.


#### normalizeTag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized, they are presented in similar shape and form.

> `static` String normalizeTag(String tag)

- **tag**: String - tag to normalize.
- **returns**: String - normalized tag.


#### normalizeTagList
Normalizes a comma-separated list of tags.

> `static` List\<String\> normalizeTagList(String tagList)

- **tagList**: String - comma-separated list of tags to normalize.
- **returns**: List\<String\> - list with normalized tags.


#### normalizeTags
Normalizes a list of tags.

> `static` List\<String\> normalizeTags(List\<String\> tags)

- **tags**: List\<String\> - tags to normalize.
- **returns**: List\<String\> - list with normalized tags.
