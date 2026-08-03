---
title: Field Configuration
description: Learn how attributes define field configurations.
sidebar_position: 2
---

Field configuration defines the rules for slots stored in a task's field for a given attribute.

## Slot Type

The slot type defines the type of each slot inside a field.

Jumpedia supports the following slot types:

| Slot Type | Description |
| --- | --- |
| Boolean | True or false. |
| Integer | A whole number. |
| Decimal | A number with decimal places. |
| String | Any text. |

For example, an attribute with the slot type `String` lets tasks have a field containing slots like:

```
"Fantasy"
"Adventure"
```

while an attribute with the slot type `Integer` lets tasks have a field containing slots like:

```
1
2
3
```

## Slot Count

The minimum and maximum slot count define how many slots a field may contain.

| Configuration | Description |
| --- | --- |
| Minimum slot count | The minimum number of slots required in a field. |
| Maximum slot count | The maximum number of slots allowed in a field. |

Examples:

| Minimum | Maximum | Result |
| --- | --- | --- |
| 1 | 1 | The field must contain exactly one slot. |
| 0 | 1 | The field can contain zero or one slot. |
| 1 | 32 | The field must contain between 1 and 32 slots. |

For an attribute's slot count configuration, the following rules exist: 
- The minimum slot count must be 0 or greater.
- The maximum slot count must be bigger than the minimum slot count and smaller than the community's maximum slot count configuration limit.
- The maximum slot count must be bigger than 0. This restriction only exists so the maximum slot count cannot be 0.

## Unique Slots

The unique slots option controls whether a field may contain duplicate slots.

When enabled, every slot inside a field must be unique.

Example with unique slots enabled:

```
"Fantasy"
"Adventure"
```

Example that would be invalid:

```
"Fantasy"
"Fantasy"
```