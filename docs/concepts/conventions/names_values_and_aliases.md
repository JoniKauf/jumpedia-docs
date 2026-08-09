---
title: Names, Values and Aliases
description: Conventions for names, values and aliases in Jumpedia.
sidebar_position: 2
---

Jumpedia uses **identifiers** to refer to objects. An identifier is the **name or value of an object, or an alias that can be used to refer to it**.

For example, a task might have the name `Super Jump` and the aliases `SJ` and `SuperJ`. All three are identifiers for the same task.

Identifiers are designed so that Jumpedia can always determine exactly which object a user means when they enter an identifier.

## Unique Identifiers

Identifiers must be unique within the **aggregate** they belong to.

An aggregate is the group of objects in which identifiers must be unique. For example, lists belong to a community, so identifiers of lists only need to be unique within their community.

The concepts that currently use identifiers are:

| Concept          | Main identifier | Unique within   |
| ---------------- | --------------- | --------------- |
| Community        | Name            | All communities |
| List             | Name            | The community   |
| Task             | Name            | The list        |
| Attribute        | Name            | The list        |
| Collection Entry | Value           | The collection  |

### Names, Values and Aliases

The main identifier of an object is either its **name** or a **value**. Aliases provide additional identifiers for the same object.

The important thing to remember is that a name or value and its aliases all have to be unique together.

For example, a list cannot contain these tasks:

| Name         | Aliases |
| ------------ | ------- |
| `Super Jump` | `SJ`    |
| `Small Jump` | `SJ`    |

Both tasks would be identified by `SJ`, so Jumpedia would not know which one is meant.

A name also cannot be used as an alias for another object:

| Name         | Aliases      |
| ------------ | ------------ |
| `Super Jump` | `Small Jump` |
| `Small Jump` |              |

This would create the same problem: `Small Jump` could refer to either task.

Therefore, when creating or editing a name, value, or alias, it must not already be used by another identifier in the same aggregate.

The object itself does not have to use its name or value as an alias. Its main identifier already refers to it directly.

## Tasks, Attributes and Collection Entries

Tasks, attributes, and collection entries are currently the only objects in Jumpedia that have aliases. The only difference between them is which aggregate they belong to and whether their main identifier is called a **name** or a **value**.

* **Tasks** have a name and optional aliases. Their identifiers must be unique within their list.
* **Attributes** have a name and optional aliases. Their identifiers must be unique within their list.
* **Collection entries** have a value and optional aliases. Their identifiers must be unique within their collection.

For example, a collection could contain:

| Value    | Aliases    |
| -------- | ---------- |
| `Easy`   | `E`, `Ez`  |
| `Medium` | `M`, `Med` |
| `Hard`   | `H`, `Hrd` |

Here, `Easy`, `E`, and `Ez` all identify the same collection entry. None of them can be used as the value or an alias of another entry in that collection.

The same rules apply to task and attribute names and aliases.

## Names and Values Are Not Globally Unique

Identifiers only need to be unique within their relevant aggregate.

For example, two different lists can both contain a task named `Super Jump`. This is allowed because the tasks belong to different lists.

Likewise, two different communities can have a list named `Main`.

What matters is that an identifier is unambiguous **where it is being looked up**.

## Normalized Comparison

The uniqueness rules use Jumpedia's **normalized string comparison**.

This means that capitalization and other differences covered by Jumpedia's string normalization conventions do not allow two identifiers to bypass the uniqueness requirement.

For example, these cannot be used as separate identifiers in the same list:

```text
Super Jump
super jump
SUPER JUMP
```

They are considered the same identifier for uniqueness purposes.

The capitalization of the actual name or value is still preserved for display.

See [Strings](/concepts/conventions/strings) for more information about cleaned and normalized strings.