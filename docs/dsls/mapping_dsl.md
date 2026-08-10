---
title: Mapping DSL
description: Syntax for specifying mappings of keys to ordered values.
sidebar_position: 3
---

The **Mapping DSL** is used whenever Jumpedia needs a mapping of keys to sequences of values.

A mapping consists of one or more **key-value pairs**:

```text
key: value1 value2
```

Each key is associated with a sequence of zero or more values.

## Syntax

A key is followed by a colon (`:`) and its values:

```text
difficulty: Easy Medium Hard
```

This associates `Difficulty` with the values `Easy`, `Medium`, and `Hard`.

A key can also have no values:

```text
difficulty:
```

This represents a key with an empty value sequence.

### Multiple Pairs

Multiple key-value pairs can be written directly one after another:

```text
difficulty: Easy Medium type: Special location: Castle
```

The colon marks the beginning of each key-value pair.

### Parenthesized Syntax

Key-value pairs can also be enclosed in parentheses:

```text
(difficulty: Easy Medium) (type: Special) (location: Castle)
```

Both forms represent the same kind of mapping. They exist for different purposes:

* **Without parentheses** is shorter and faster to write, making it convenient when entering commands.
* **With parentheses** makes the boundaries between key-value pairs clearer, making it easier to read.

Whenever Jumpedia displays a mapping to users, it uses the **parenthesized form** because the structure is easier to understand.

## Special Cases

An empty mapping is represented by a single underscore:

```text
_
```

The underscore has this special meaning only when it is the **only token in the expression and an identifier token**.

## Examples

A mapping with one key:

```text
difficulty: Easy
```

A key with multiple values:

```text
difficulty: Easy Medium Hard
```

Multiple pairs without parentheses:

```text
difficulty: Easy Medium type: Special location: Castle
```

The same mapping written with parentheses:

```text
(difficulty: Easy Medium) (type: Special) (location: Castle)
```

A key with no values:

```text
difficulty:
```

or

```text
(difficulty:)
```

An empty mapping:

```text
_
```

## Summary

The Mapping DSL is a **mapping of keys to sequences of values**.

* A key is followed by `:`.
* Each key can have zero or more values.
* Parentheses are optional: omitting them is quicker to write, while using them is easier to read.
* Jumpedia uses the parenthesized form when displaying mappings.
* `_` represents an empty mapping when used by itself.
