---
title: Filter DSL
description: Syntax for filtering values using comparisons and logical operators.
sidebar_position: 5
---

The **Filter DSL** is used whenever Jumpedia needs to select **tasks** based on the contents of their fields.

A filter checks whether a task's fields contain slots that match the specified conditions. A field can contain one or more **slots**, and a comparison is considered valid when **at least one slot** in the specified field satisfies the comparison.

For example:

```text
difficulty >= 5
```

matches tasks where at least one slot in the `difficulty` field is greater than or equal to `5`.

## Comparisons

A comparison consists of an text token that represents the attribute, a comparison operator, and another text token that represents the value to match against:

```text
attribute is value
```

The available comparison operators are:

| Operator | Meaning                                                           |
| -------- | ----------------------------------------------------------------- |
| `is`     | At least one slot matches the specified value                     |
| `is not` | No slot matches the specified value                               |
| `<`      | At least one slot is less than the specified value                |
| `<=`     | At least one slot is less than or equal to the specified value    |
| `>`      | At least one slot is greater than the specified value             |
| `>=`     | At least one slot is greater than or equal to the specified value |

For example:

```text
difficulty is Hard
```

matches a task if at least one slot in its `difficulty` field is `Hard`.

Similarly:

```text
difficulty >= 5
```

matches a task if at least one slot in its `difficulty` field is greater than or equal to `5`.

The comparison does not require every slot in the field to match. A task with multiple slots can therefore match if just one of them satisfies the comparison.

## Combining Filters

Multiple comparisons can be combined with `and`:

```text
difficulty >= 5 and type is Special
```

Both comparisons must match the task.

They can also be combined with `or`:

```text
difficulty is Easy or difficulty is Medium
```

At least one of the comparisons must match.

### Combining `and` and `or`

`and` is evaluated before `or`.

For example:

```text
difficulty is Hard or difficulty is Medium and type is Special
```

is interpreted as:

```text
difficulty is Hard or (difficulty is Medium and type is Special)
```

Parentheses can be used to explicitly control how expressions are grouped:

```text
(difficulty is Hard or difficulty is Medium) and type is Special
```

## Parentheses

Parentheses group parts of a filter together.

For example:

```text
(difficulty is Easy or difficulty is Medium) and type is Special
```

first combines the two difficulty conditions and then requires the result to also match `type is Special`.

Parentheses can be nested when more complex conditions are needed:

```text
((difficulty is Easy or difficulty is Medium) and type is Special) or name is "Example"
```

## Empty Fields

An underscore by itself represents an **empty field**:

```text
_
```

This can be used to check whether a field has no slots.

For example:

```text
description is _
```

matches tasks whose `description` field is empty.

The empty field can only be used with equality comparisons:

```text
description is _
description is not _
```

Using it with an ordering comparison is invalid:

```text
description > _
```

This restriction exists because ordering an empty field against a value has no meaningful interpretation. `is _` checks that the field has no slots, while `is not _` checks that the field has at least one slot.

## Examples

A simple comparison:

```text
difficulty >= 5
```

A comparison against a field that may contain multiple slots:

```text
author is "Jeff Zentner"
```

This matches if at least one slot in the `author` field contains `Jeff Zentner`.

Two conditions that must both match:

```text
difficulty >= 5 and type is Special
```

Either of two values:

```text
difficulty is Easy or difficulty is Medium
```

A grouped condition:

```text
(difficulty is Easy or difficulty is Medium) and type is Special
```

Checking for an empty field:

```text
description is _
```

Checking that a field is not empty:

```text
description is not _
```

Using a quoted value containing spaces:

```text
name is "Very Hard"
```

Using a keyword as a value:

```text
type is "or"
```

## Summary

The Filter DSL is used to **select tasks based on their fields**.

* Comparisons check a field's slots using `is`, `is not`, `<`, `<=`, `>`, or `>=`.
* A comparison matches when **at least one slot** satisfies it.
* `and` requires all combined conditions to match.
* `or` requires at least one of the conditions to match.
* Parentheses can be used to group conditions.
* `and` is evaluated before `or`.
* `_` represents an empty field and can only be used with `is` or `is not`.
* Quoted text tokens can be used for values containing spaces, special characters, or keywords.
