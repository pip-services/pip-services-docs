---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Helper class used to extract and process search tags from objects.

---

### Description

The TagsProcessor class allows you to extract and process search tags from objects.

Important points

- The search tags can be kept individually or embedded as hash tags inside text. E.g. "This text has #hash_tag that can be used for search."

### Static methods

#### CompressTag
Compress a tag by removing special symbols like spaces, '_' and '#'
and converting the tag to lower case.
When tags are compressed, they can be matched in search queries.

> `public static` string CompressTag(string tag)

- **tag**: string - tag to compress.
- **returns**: string - compressed tag.


#### CompressTagList
Compresses a comma-separated list of tags.

> `public static` string[] CompressTagList(string tagList)

- **tagList**: string - comma-separated list of tags to compress.
- **returns**: string[] - list with compressed tags.


#### CompressTags
Compresses a list of tags.

> `public static` string[] CompressTags(string[] tags)

- **tags**: string[] - tags to compress.
- **returns**: string[] - list with normalized tags.


#### EqualTags
Compares two tags using their compressed form.

> `public static` bool EqualTags(string tag1, string tag2)

- **tag1**: string - first tag.
- **tag2**: string - second tag.
- **returns**: bool - true if the tags are equal and false otherwise.


#### ExtractHashTags
Extracts hash tags from a text.

> `public static` string[] ExtractHashTags(string text)

- **text**: string - text that contains hash tags
- **returns**: string[] - list with extracted and compressed tags.


#### ExtractHashTagsFromValue
Extracts hash tags from selected fields in an object.

> `public static` string[] ExtractHashTagsFromValue(dynamic obj, params string[] searchFields)

- **obj**: dynamic - object which contains hash tags.
- **searchFields**: string[] - list of fields in the objects where to extract tags
- **returns**: string[] - list of extracted and compressed tags.


#### NormalizeTag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized, they are presented in similar shape and form.

> `public static` string NormalizeTag(string tag)

- **tag**: string - tag to normalize.
- **returns**: string - normalized tag.


#### NormalizeTagList
Normalizes a comma-separated list of tags.

> `public static` string[] NormalizeTagList(string tagList)

- **tagList**: string - comma-separated list of tags to normalize.
- **returns**: string[] - list with normalized tags.


#### normalizeTags
Normalizes a list of tags.

> `public static` string[] NormalizeTags(string[] tags)

- **tags**: string[] - tags to normalize.
- **returns**: string[] - list with normalized tags.
