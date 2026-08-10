---
title: Sequence DSL
description: Syntax for specifying an ordered sequence of values.
sidebar_position: 2
---

The **Sequence DSL** is used whenever Jumpedia needs an ordered sequence of text values.

A sequence consists of text tokens written one after another:

```text
first second third
```

The order in which the text tokens are written is preserved.

## Syntax

A sequence contains one or more text tokens separated by whitespace:

```text
value1 value2 value3
```

For example:

```text
Easy Medium Hard "Very Hard"
```

represents four values in this order:

1. `Easy`
2. `Medium`
3. `Hard`
4. `Very Hard`

The syntax can contain any number of text tokens.

## Order

The order of the text tokens is significant.

For example:

```text
Easy Medium Hard
```

is different from:

```text
Hard Medium Easy
```

The same values are present, but their positions in the sequence are different.

## Special Cases

An empty sequence is represented by a single underscore:

```text
_
```

The underscore has this special meaning only when it is the **only token in the expression and an identifier token**.

## Examples

A simple sequence:

```text
Mario Luigi Peach
```

A longer sequence:

```text
Easy Medium Hard Insane
```

A sequence containing quoted text:

```text
Easy "Very Hard" Insane
```

An empty sequence:

```text
_
```

## Summary

The Sequence DSL is an **ordered sequence of text tokens**.

* Text tokens are separated by whitespace.
* Their order is preserved.
* `_` represents an empty sequence when used by itself.
