---
title: Tasks And Attributes Overview
description: Learn how tasks and attributes work together to organize information in Jumpedia.
sidebar_position: 4
---

Tasks are the main concept a community aims to track with Jumpedia.

A task represents any completable objective, such as a book, movie, speedrun, trickjump, game, or anything else a community might want to track and that is also completable.

Attributes define the information that is stored for each task.

Every attribute and every task belongs to exactly one list.

An easy way to think about this is as a table:

| ID | Name | Author | Publication Date |
| --- | --- | --- | --- |
| 1 | The Lord of the Rings | J.R.R. Tolkien | July 29th, 1954 |
| 2 | To Kill a Mockingbird | Harper Lee | July 11th, 1960 |
| 3 | Sunrise Nights | Jeff Zentner<br/>Brittany Cavallaro | July 9th, 2024 | 

In this example:

- The **entire table** is one `list`.
- Each **row** represents one `task`.
- Each **column** represents one `attribute`.
- Each **cell** represents one `field`, a value of a specific attribute of a specific task.
- Each **element in a cell** represents one `slot`.

As a more concrete example:
- The entire table represents all the physical books of a book club as a `list`.
- The entire first row represents the `task` (book) with the name "The Lord of the Rings" and all of its data.
- The `attribute` "Author" allows each task row to contain an author `field`.
- The `field` that contains both "Jeff Zentner" and "Brittany Cavallaro" has two `slots`, which represent the two authors of the book.

## Attributes

Every list defines its own set of attributes. Together, these attributes describe the structure of every task in that list.

For example, a **Book** list might define the following attributes:

- Name
- Author
- Publication Date
- Genre
- Pages

Since every task in a list follows the same structure, each task has exactly one field for every attribute defined by the list.

## Fields

A field is the value of a specific attribute for a specific task.

For example, consider the task **The Lord of the Rings**:

| Attribute | Field |
| --- | --- |
| Name | The Lord of the Rings |
| Author | J.R.R. Tolkien |
| Publication Date | July 29th, 1954 |

Although a field is often just a single value, it may also contain multiple values depending on the attribute.

## Slots

A slot is a single value stored inside a field.

Many attributes force their fields to only contain one slot, but other attributes allow multiple slots.

For example, the **Author** field of *Sunrise Nights* contains the following slots:

1. Jeff Zentner
2. Brittany Cavallaro

An attribute may restrict how many slots each field can contain. For example:

- **Name** may require exactly one slot.
- **Author** may allow one or more slots.
- **Genre** may allow any number of slots.

An attribute can also restrict many other things about the kind of data each field can hold. More about that in the next section...