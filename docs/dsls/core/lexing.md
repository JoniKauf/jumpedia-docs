---
title: Lexing
description: Learn how Jumpedia breaks DSL input into tokens.
sidebar_position: 1
---

Before Jumpedia can understand a DSL expression, it first breaks the input into smaller pieces called **tokens**.

This process is called **lexing**. The same lexer is used by all Jumpedia DSLs, so all DSLs share the same basic rules for things such as strings, identifiers, symbols, keywords, and whitespace.

For example, the following expression:

```text
if "difficulty" >= 5
```

is split into tokens roughly like this:

| Input          | Token                           |
| -------------- | ------------------------------- |
| `if`           | If-Keyword                      |
| `"difficulty"` | String                          |
| `>=`           | Greater-Than-Or-Equals Operator |
| `5`            | Identifier                      |

The lexer does not determine what the complete expression means. It only determines **what each part of the input is**. Later stages of the DSL can then use these tokens to understand the expression.

## Whitespace

Whitespace is ignored by the lexer.

This means that spaces and tabs can generally be used to separate parts of an expression without becoming part of the expression themselves.

For example:

```text
difficulty >= 5
```

and:

```text
difficulty    >=    5
```

produce the same tokens and therefore produce the exact same result.

Whitespace inside a string token is different. It is preserved as part of the token's value.

## Text Tokens

There are two ways to enter simple text values into a DSL: **unquoted text** and **quoted text**.

Unquoted text is recognized as an **identifier token**:

```text
difficulty
task_name
attribute123
```

Quoted text is recognized as a **string token**:

```text
"difficulty"
"task name"
'attribute-name'
```

Despite having different token types, **identifier tokens and string tokens are treated as exactly the same kind of text by the rest of the DSL**. The distinction only matters while lexing the input.

For example, these two expressions provide the same text to later stages of the DSL:

```text
difficulty
```

```text
"difficulty"
```

Both represent the text `difficulty`.

### When to Use Strings

An identifier token can only contain letters, numbers, and `_`. Therefore, a string token is required whenever the text contains characters that are not allowed in an identifier or contains whitespace.

For example:

```text
task_name
```

can be written without quotation marks, but:

```text
"task name"
```

requires them because of the space.

Likewise:

```text
"Super-Jump"
"Difficulty (Hard)"
"hello, world"
```

must use a string token because they contain characters that cannot be part of an identifier.

In short:
* String tokens are more powerful and can pretty much contain any text.
* Identifier tokens are easier to write, but not always usable.

### Avoiding Keywords

Some words have a special meaning in DSL syntax and are therefore recognized as **keyword tokens** when written without quotation marks.

For example:

```text
if
else
and
or
not
is
```

are keywords.

If one of these words is intended to be used as ordinary text instead, it can be written as a string token:

```text
"if"
"and"
"not"
```

The quoted version is treated as ordinary text rather than as a keyword.

This makes quotation marks useful not only for entering text containing special characters, but also for making it explicit that a piece of text should **not** be interpreted as keywords.

## Strings

Strings are text enclosed in either single or double quotation marks.

Both styles are supported:

```text
"Hello World"
'Hello World'
```

The quotation marks themselves are not part of the resulting token value. The end of a string token is determined by the same quotation mark type that started it.

For example:

```text
"Hello World"
```

produces a string token whose value is:

```text
Hello World
```

### Escaping

Because strings start and end with quotation marks, at least one type of quotation mark could usually not be entered in a string, since it would otherwise end the string. Some other characters are also hard or impossible to simply write in a Discord command parameter. For these reasons **escaping** exists.

Certain characters can be written using an escape sequence inside a string.

Jumpedia supports:

| Escape | Result    |
| ------ | --------- |
| `\\`   | `\`       |
| `\"`   | `"`       |
| `\'`   | `'`       |
| `\n`   | A newline |

For example:

```text
"Hello\nWorld"
```

represents a string token with the value:

```text
Hello
World
```

To enter a backslash, use `\\` and not just `\`, since `\` indicates the start of an escape sequence.

An escape sequence that is not supported results in an error.

### Multiline Strings

Whether string tokens may contain newlines depends on the specific DSL configuration.

If multiline strings are disabled, a string token cannot contain a newline via `\n`.

If a string token is not closed with its matching quotation mark, an error is produced.

## Identifiers

An **identifier token** is a token containing unquoted text.

Identifiers may contain:

* Letters
* Numbers
* `_`

They must consist entirely of these characters.

For example:

```text
difficulty
task_name
attribute123
```

are valid identifier tokens.

Characters such as `-`, `+`, `:`, and `(` cannot be part of an identifier because they have their own meaning in the DSL.

If text needs to contain such characters or spaces, use a string token instead.

## Keywords

Some words have a special meaning in DSL syntax. These are represented by **keyword tokens**.

The lexer recognizes the following keywords:

| Keyword | Purpose                                    |
| ------- | ------------------------------------------ |
| `if`    | Starts a conditional expression            |
| `else`  | Provides an alternative branch             |
| `is`    | Used for comparing equality                |
| `not`   | Used for negative equality (`is not`)      |
| `or`    | Combines expressions with OR               |
| `and`   | Combines expressions with AND              |

For example:

```text
difficulty is not 5
```

contains the keyword tokens `is` and `not`, rather than treating them as ordinary identifier tokens.

Keywords are recognized only when the complete identifier matches the keyword. For example, `inside` is still an identifier token and is not interpreted as `is` followed by `side`.

If `is` is intended to be ordinary text instead of DSL syntax, it can be written as a string token:

```text
"is"
```

## Symbols

The lexer also recognizes some symbols used to structure and compare expressions.

### Parentheses

| Symbol | Meaning             |
| ------ | ------------------- |
| `(`    | Opening parenthesis |
| `)`    | Closing parenthesis |

### Comparison Operators

| Symbol | Meaning                  |
| ------ | ------------------------ |
| `<`    | Less than                |
| `<=`   | Less than or equal to    |
| `>`    | Greater than             |
| `>=`   | Greater than or equal to |

### Other Operators and Delimiters

| Symbol | Meaning |
| ------ | ------- |
| `+`    | Plus    |
| `-`    | Minus   |
| `:`    | Colon   |
| `,`    | Comma   |

Symbols are recognized independently from identifier tokens. This means that an input such as:

```text
name:value
```

is split into three tokens:

```text
name
:
value
```

rather than being treated as one identifier token.

## Errors

The lexer reports an error when the input cannot be divided into valid tokens.

Common lexical errors include:

* **Unknown character** - a character is used that has no meaning in the DSL.
* **Unterminated string** - a string token was opened but never closed.
* **Invalid escape** - an unsupported escape sequence was used.
* **Multiline string not allowed** - a string token contains a newline while multiline strings are disabled.

These errors occur before the DSL is interpreted, because Jumpedia cannot continue until the input has been successfully divided into tokens.

## Shared Rules

Because every Jumpedia DSL uses the same lexer, these rules are shared across all DSLs.

Individual DSLs may give the tokens different meanings or use only a subset of the available syntax, but the basic rules for recognizing text tokens, keywords, symbols, whitespace, and lexical errors remain consistent.

This design ensures that all Jumpedia DSLs share the same fundamental rules. Text is always tokenized in the same way, so users can learn one consistent set of rules that applies everywhere.

Individual DSLs may not use every keyword or symbol, and could therefore choose to treat some of them as ordinary text. However, keeping the lexer consistent across all DSLs provides much greater benefits than maintaining a small list of special strings that would need to be escaped differently depending on the DSL.
