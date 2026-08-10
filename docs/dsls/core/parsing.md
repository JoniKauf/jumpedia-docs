---
title: Parsing
description: Learn how Jumpedia interprets specific token structures.
sidebar_position: 2
---

# Parsing

After the lexer has divided a DSL expression into **tokens**, the next step is **parsing**.

Parsing determines how those tokens fit together according to the rules of a particular DSL. While all Jumpedia DSLs use the same lexer, **each DSL has its own parser**, because different DSLs give tokens different meanings and arrange them in different ways.

The parser does not decide what an expression should ultimately do. Instead, it turns the sequence of tokens into a structured representation that the later stages of the DSL can understand.

## From Tokens to Structure

Consider a simple sort expression:

```text
+name -difficulty
```

The lexer first turns this into tokens:

```text
+    name    -    difficulty
```

The sort parser then understands that each `+` or `-` belongs to the text token that follows it:

```text
+ name
- difficulty
```

This gives the expression a structure such as:

| Text         | Direction  |
| ------------ | ---------- |
| `name`       | Ascending  |
| `difficulty` | Descending |

The parser therefore understands **relationships between tokens**, rather than merely recognizing what individual tokens are.

## Each DSL Has Its Own Rules

The lexer is shared between all DSLs, but the parser is specific to each DSL.

For example, a mapping DSL might use:

```text
difficulty: Easy Medium Hard
location: Cascade Cap
```

The lexer sees text tokens and colons. The mapping parser then gives those tokens their mapping-specific structure:

```text
difficulty → Easy, Medium, Hard
location → Cascade, Cap
```

A sort DSL interprets the same kinds of tokens differently:

```text
+difficulty -location
```

Here, `+` and `-` determine the sorting direction.

This separation means that **the lexer establishes the common vocabulary, while each parser establishes the grammar of its DSL**.

## Text Tokens

The parser treats both identifiers and strings as **text tokens**.

This is important because, from the parser's perspective, there is no fundamental difference between:

```text
difficulty
```

and:

```text
"difficulty"
```

Both provide a piece of text that the DSL can use.

The difference is handled by the lexer:

* An unquoted identifier is a text token consisting only of identifier characters.
* A quoted string is a text token that can contain spaces and special characters.

Strings can therefore be used whenever the text could not otherwise be written as an identifier, or when quoting is useful to avoid a collision with a DSL keyword.

For example:

```text
if
```

is normally lexed as the `if` keyword, while:

```text
"if"
```

is a string token containing the text `if`.

This allows users to explicitly say that `if` is **text**, rather than part of the DSL's syntax.

## Recognizing Valid Structures

A parser also checks whether tokens appear in a valid order.

For example, the sort DSL expects a `+` or `-` before each text token. Therefore:

```text
+name
```

is valid, while:

```text
name
```

is not a valid sort expression according to that parser.

Similarly, a mapping requires a key, followed by `:`, followed by its values:

```text
difficulty: Easy Medium Hard
```

If the parser encounters a token where another kind of token is required, it reports a parsing error.

This is different from a lexical error. A lexical error means that a piece of the input could not be recognized at all; a parsing error means that the tokens are recognized, but **their arrangement does not follow the rules of the DSL**.

## Parentheses and Optional Syntax

Individual parsers can also define whether certain syntax is optional or required.

For example, the mapping DSL supports both:

```text
(difficulty: Easy Medium Hard) (location: Cascade)
```

and a form without parentheses:

```text
difficulty: Easy Medium Hard location: Cascade
```

The parser is responsible for recognizing which form was used and constructing the same kind of mapping structure from either one.

This allows a DSL to provide convenient syntax without changing the common lexical rules shared by all DSLs.

## Parser Errors

If the tokens cannot form a valid expression according to the DSL's grammar, the parser reports an error.

For example, if a mapping expects:

```text
key: value
```

but encounters:

```text
key value
```

the tokens themselves are valid, but their arrangement is not.

The parser can report that it encountered a token that was not expected at that position. Because every token keeps its original location, Jumpedia can also identify where the problem occurred in the user's input.

## The Parsing Result

The result of parsing is a structured representation of the expression.

For example, the sort expression:

```text
+name -difficulty
```

can be thought of as becoming:

```text
Sort
├── name → ascending
└── difficulty → descending
```

The mapping:

```text
difficulty: Easy Medium Hard
```

can similarly become:

```text
Mapping
└── difficulty
    ├── Easy
    ├── Medium
    └── Hard
```

The later stages of the DSL can then work with these structures instead of having to interpret the original text again.

## Summary

Parsing is the step between **lexing** and **understanding what a DSL expression does**.

* The **lexer** turns the input into tokens.
* The **parser** checks how those tokens can be arranged according to the DSL's rules.
* Each DSL has its **own parser** because each DSL has its own syntax.
* Identifiers and quoted strings are both treated as **text tokens** by parsers.
* Parsers can recognize optional syntax such as parentheses.
* Invalid token arrangements result in **parsing errors**.
* The result is a structured representation that later stages can use.



