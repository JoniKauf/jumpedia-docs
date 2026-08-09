---
title: Strings
description: Conventions for handling and comparing strings in Jumpedia.
sidebar_position: 1
---

## Cleaned & Normalized Strings

A string is any sequence of characters, like `abc` or `You just lost the game! ;)` for example.

Jumpedia uses a few conventions when handling strings that users input in commands. These conventions ensure that user input is stored consistently and that strings that are logically the same can be treated as equal. Many of the following actions performed on input strings also make it easier to work with Jumpedia commands.

### Cleaning Up the String

Before a string is used in any way by Jumpedia, it is **cleaned** into a consistent form.

Cleaning performs the following steps:

1. Groups of whitespace are replaced with a single space.
2. Leading and trailing whitespace is removed.
3. Typographic quotation marks are replaced with their regular ASCII equivalents.
4. Non-printable characters are removed.
5. Unicode text is normalized using **NFC normalization**.
6. The resulting string must not be empty.
7. The string must not contain a double backtick (` `` `).

For example:

```text
  Hello    world
```

becomes:

```text
Hello world
```

Typographic quotation marks are also automatically converted to their regular ASCII equivalents.
This feature was introduced since there were many occassions where people with different keyboard layouts had different kinds of quotation marks and this change made it easier for them to interact with Jumpedia.

| Character | Name                                  | Replaced with |
| --------- | ------------------------------------- | ------------- |
| `‘`       | Left single quotation mark            | `'`           |
| `’`       | Right single quotation mark           | `'`           |
| `‚`       | Single low-9 quotation mark           | `'`           |
| `‛`       | Single high-reversed-9 quotation mark | `'`           |
| `“`       | Left double quotation mark            | `"`           |
| `”`       | Right double quotation mark           | `"`           |
| `„`       | Double low-9 quotation mark           | `"`           |
| `‟`       | Double high-reversed-9 quotation mark | `"`           |


For example:

```text
“Hello”
```

becomes:

```text
"Hello"
```

### Normalizing Strings

After a string has been cleaned, Jumpedia can create its **normalized value** for comparisons.

Normalization converts the cleaned string to a case-insensitive form using Unicode **case folding**. This means that differences in capitalization do not make two strings different.

For example:

```text
Hello World
hello world
HELLO WORLD
```

all have the same normalized value and are therefore considered equal.

Normalization does not replace the cleaned value. The cleaned value retains its original capitalization and is used when displaying the string to users.

For example:

```text
Hello World
hello world
```

have different cleaned values but the same normalized value.

### Cleaned Value vs. Normalized Value

It is important to distinguish between the two forms:

| Form                 | Purpose                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Cleaned value**    | The consistent, human-readable form of the string. Preserves capitalization for display. |
| **Normalized value** | The case-folded form used to determine logical equality.                                 |

For example:

```text
"Hello"
"hello"
```

have different cleaned values but the same normalized value:

```text
"hello"
```

Therefore, they are considered equal when compared by Jumpedia, while their original capitalization is still preserved for display.

This distinction is particularly useful for names, aliases, and other user-provided values where capitalization should be preserved without allowing logically identical values to be treated as different.

### Invalid Strings

A string is considered invalid if, after cleaning:

* It is empty.
* It contains a double backtick (` `` `).

For example, a string consisting only of whitespace is invalid because all whitespace is removed during cleaning.

The double-backtick restriction exists because Jumpedia uses double-backticks to highlight user data in its feedback messages and Discord does not allow escaping backticks inside of backticks.


## Naming Conventions

Names and aliases should generally use **Title Case**, unless there is a good reason to use a different style.

For example:

* `Super Jump`
* `Main`
* `Difficulty`
* `Super Cool Task`

This makes names easier to read and gives objects a consistent appearance throughout Jumpedia.

Title Case is a convention rather than an absolute requirement. Names should use a different capitalization style when it is more appropriate for the thing being named. For example, a proper name, abbreviation, technical term, or other established spelling may reasonably use its original capitalization.

### Singular Names

Lists and attributes should generally use **singular names**, regardless of how many items they contain.

For example, prefer:

* A list named `Book` rather than `Books`
* An attribute named `Location` rather than `Locations`

A list named `Book` would contain many book tasks, but the name describes **what each item in the list represents**, rather than the number of items currently in it.

Similarly, an attribute named `Difficulty` represents the difficulty of a task, even though the attribute exists across many tasks.

Using singular names keeps the meaning of an object independent of its contents. The number of tasks, attributes, or other objects may change over time, but the concept represented by the name does not.

This also makes references to attributes and other objects read more naturally.

### Avoid Redundant Object Types

An object's name should describe **what the object represents**, without unnecessarily including the type of object itself.

For example, an attribute should normally be named:

* `Difficulty`
* `Location`
* `Type`

rather than:

* `Difficulty Attribute`
* `Location Attribute`
* `Type Attribute`

The same applies to other object types. It is already clear from the context that something is an attribute, list, task, or collection entry, repeating that information in its name adds unnecessary noise.

For example, prefer:

```text
Difficulty
Main
Super Jump
```

over:

```text
Difficulty Attribute
Main List
Super Jump Task
```

This keeps names concise and makes them read naturally when displayed throughout Jumpedia. The type of the object is already known from where the name is being displayed or used, so including it in the name usually provides no additional information.

This is a convention rather than an absolute rule. A type can be included when it is genuinely part of the object's intended name or is necessary to distinguish it from something else.

### Summary

* Use **Title Case** unless there is a good reason not to.
* Prefer **singular names** for lists and attributes.
* Avoid **redundant object types** in names.
* Keep names concise, clear, and focused on what the object represents.
