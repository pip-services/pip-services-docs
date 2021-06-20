---
type: docs
title: "TagsProcessor"
linkTitle: "TagsProcessor"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Helper class used to extract and process search tags from objects.

---

### Description

The TagsProcessor class allows you to extract and process search tags from objects.

Important points

- The search tags can be kept individually or embedded as hash tags inside text. E.g. "This text has #hash_tag that can be used for search."

### Methods

#### CompressTag
Compress a tag by removing special symbols like spaces, '_' and '#'
and converting the tag to lower case.
When tags are compressed they can be matched in search queries.

> (c *TTagsProcessor) CompressTag(tag string) string

- **tag**: string - tag to compress.
- **returns**: string - compressed tag.


#### CompressTagList
Compresses a comma-separated list of tags.

> (c *TTagsProcessor) CompressTagList(tagList string) []string

- **tagList**: string - comma-separated list of tags to compress.
- **returns**: []string - list with compressed tags.


#### CompressTags
Compresses a list of tags.

> (c *TTagsProcessor) CompressTags(tags []string) []string

- **tagList**: []string - tags to compress.
- **returns**: []string - list with normalized tags.


#### EqualTags
Compares two tags using their compressed form.

> (c *TTagsProcessor) EqualTags(tag1 string, tag2 string) bool

- **tag1**: string - first tag.
- **tag2**: string - second tag.
- **returns**: bool - true if the tags are equal and false otherwise.


#### ExtractHashTags
Extracts hash tags from a text.

> (c *TTagsProcessor) ExtractHashTags(text string) []string

- **text**: string - text that contains hash tags
- **returns**: []string - list with extracted and compressed tags.


#### ExtractHashTagsFromValue
**Note: this is not implemented for this language yet**

Extracts hash tags from selected fields in an object.

> `public static` extractHashTagsFromValue(obj: any, ...searchFields: string[]): string[]

- **obj**: any - object which contains hash tags.
- **searchFields**: string[] - list of fields in the objects where to extract tags
- **returns**: string[] - list of extracted and compressed tags.


#### NormalizeTag
Normalizes a tag by replacing special symbols like '_' and '#' with spaces.
When tags are normalized then they can be used in similar shape and form.

> (c *TTagsProcessor) NormalizeTag(tag string) string

- **tag**: string - tag to normalize.
- **returns**: string - normalized tag.


#### NormalizeTagList
Normalizes a comma-separated list of tags.

> (c *TTagsProcessor) NormalizeTagList(tagList string) []string

- **tagList**: string - comma-separated list of tags to normalize.
- **returns**: []string - list with normalized tags.


#### NormalizeTags
Normalizes a list of tags.

> (c *TTagsProcessor) NormalizeTags(tags []string) []string

- **tags**: []string - tags to normalize.
- **returns**: []string - list with normalized tags.
