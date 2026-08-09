---
title: DSLs
---

Jumpedia uses **DSLs (Domain-Specific Languages)** to allow users to not just input single values in command parameters, but more complex things like a sequence of elements, a mapping of one key to many values and other forms of custom data.

A DSL is essentially a set of rules for writing a specific kind of input. Instead of having to provide many separate command options, a DSL lets you describe what you want using a compact expression.

You do not need to be a programmer to use Jumpedia's DSLs. They are simply structured ways of writing information that would otherwise be difficult to express in a command.

## Syntaxes

Each DSL has its own **syntax**: a set of rules that determines how the input should be written and what the different parts mean.

For example, a command might allow you to specify several values:

```text
Easy Medium Hard
```

A DSL can give this simple text a specific meaning, such as "use these three values."

Another DSL might let you filter something:

```text
difficulty >= 5
```

Here, `difficulty`, `>=`, and `5` are written according to the rules of the DSL to express a condition: the difficulty must be at least 5.

DSLs can also combine several parts:

```text
difficulty >= 5 and type is trick
```

This expresses two conditions that must both be true.

The important idea is that the syntax gives otherwise ordinary text a **specific meaning**. The same words can therefore be used in different ways depending on the DSL being used.

## Why DSLs?

Without DSLs, it would be impossible or at least very hard to input the complex kind of data that Jumpedia often needs in a single command.

For example, instead of writing:

```text
difficulty >= 5 and type is trick
```

a command might need separate options for the minimum difficulty, type, and other conditions. Since these attributes are also fully customizable and Discord slash commands are pretty static, making this multiple parameters would not be feasible for example.

DSLs make these kinds of inputs more compact and easier to extend while still keeping them readable.

## Jumpedia's DSLs

Jumpedia has several DSLs, each designed for a particular kind of input. For example:

* **Sequence DSL** — describes an ordered sequence of values.
* **Mapping DSL** — describes values mapped to associated data.
* **Filter DSL** — describes conditions used to filter results.
* **Sort DSL** — describes how results should be ordered.

Although each DSL has a different purpose, they all follow the same underlying conventions. In particular, they use the same rules for things such as text, strings, identifiers, symbols, and whitespace.

The following pages explain these DSLs and their syntax in more detail.

## In this section

import DocCardList from '@theme/DocCardList';

<DocCardList />
