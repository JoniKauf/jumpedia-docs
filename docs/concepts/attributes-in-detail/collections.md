---
title: Collections
description: Learn how attribute collections work in Jumpedia.
sidebar_position: 4
---

Collections are an optional property of an attribute to restrict its task field slots to a predefined set of possible values.

Instead of allowing any slot of the configured slot type, an attribute with a collection can only use slots that match entries from a given collection.

Restricting a field to a finite amount of slots also has some additional benefits, as you will see below.

For example, a **Difficulty** attribute could benefit from only allowing the following allowed slots:

```text
Easy
Medium
Hard
```

A field using this attribute could then only contain slots that are equal to one of the values.

## Collection Entries

A collection consists of multiple collection entries.

Each collection entry contains:

- A value
- Optional aliases

The value is the actual stored slot, while aliases provide additional ways to reference the same entry.

Example:

| Value | Aliases |
| --- | --- |
| Easy | Ez<br/> Beginner |
| Medium | Normal |
| Hard | Difficult<br/> Hd |

If a user enters an alias, Jumpedia resolves it to the corresponding collection entry.

Collection entry aliases are especially useful when a restrictive slot type is used, because aliases can still be arbitrary strings while the stored slot keeps its required type.

For example, we could store difficulties as integers and have the aliases be the following:

| Collection Entry Value | Aliases |
| --- | --- |
| 1 | Easy<br/> Beginner<br/> Low |
| 2 | Medium<br/> Normal |
| 3 | Hard<br/> Difficult<br/> High |

As always, values and aliases can not overlap. In this case, they cannot overlap across a single attribute's collection.

## Collection Slot Resolution

When a field uses a collection, its slots are matched against collection entries.

For example, if a "Difficulty" attribute's collection contains:

| Value | Aliases |
| --- | --- |
| Easy | Ez |
| Hard | Difficult |

Then all of the following would resolve to the same entry:

```
Easy
ez
```

and:

```
Hard
difficult
```

Collections make it possible to create a controlled set of allowed values while still allowing flexible ways to reference entries.