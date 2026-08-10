---
title: Sort DSL
description: Syntax for specifying the order in which values should be sorted.
sidebar_position: 4
---

The **Sort DSL** is used whenever Jumpedia needs to specify how a collection of values should be sorted.

A sort expression consists of one or more **text tokens**, each preceded by either `+` or `-`:

```text
+value1 -value2 +value3
```

The sign determines whether each value is sorted in ascending or descending order.

## Syntax

A `+` before a text token means **ascending order**:

```text
+difficulty
```

A `-` before a text token means **descending order**:

```text
-difficulty
```

Multiple sorting criteria can be combined:

```text
+difficulty -type +name
```

Jumpedia applies the criteria in the order in which they are written.

For example:

```text
+difficulty -name
```

first sorts by `difficulty` in ascending order. When two values have the same difficulty, all tasks with the same difficulty are then sorted between each other by the `name` in descending order.

## Examples

Sort by one value in ascending order:

```text
+difficulty
```

Sort by one value in descending order:

```text
-difficulty
```

Sort by multiple values:

```text
+difficulty -type +name
```

This sorts by:

1. `difficulty` ascending
2. `type` descending
3. `name` ascending

Each sorting criterion must have either a `+` or `-` sign. A text token without one is not valid Sort DSL syntax.

## Summary

The Sort DSL is an **ordered list of sorting criteria**.

* `+` sorts a value in ascending order.
* `-` sorts a value in descending order.
* Multiple criteria are applied in the order they are written.
* Every sorting criterion must be preceded by `+` or `-`.
