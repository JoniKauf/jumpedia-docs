---
title: Users
sidebar_position: 3
description: Learn how users and members work in Jumpedia.
---

A **user** represents a person that Jumpedia knows.

Users are created automatically whenever someone uses Jumpedia or is referenced by another user. This allows Jumpedia to keep track of people across different communities.

Jumpedia stores the following data about a user:

* Their Discord ID,
* the last username Jumpedia saw from that user
* and heir meta rank

A user is independent of any specific community. When a user joins or interacts with a community, they become a **member** of that community.

### Meta Ranks

Users have a global **meta rank** that applies across all of Jumpedia and is not tied to any particular community.

The existing meta ranks are:

| Rank          | Power | Description                                                                                                                       |
| ------------- | ----: | --------------------------------------------------------------------------------------------------------------------------------- |
| User          |     0 | Basic Jumpedia user.                                                                                                              |
| Administrator |     1 | Also called **meta administrator**. Can create and manage entire communities. This rank is more powerful than any community rank. |
| Owner         |     2 | The owner of Jumpedia. Can additionally manage meta administrators.                                                               |

Users with a meta rank above `User` are official Jumpedia staff. They are responsible for helping users and creating and managing communities. Only a small number of people have an elevated meta rank.

## Members

A **member** represents a user within a specific community.

A member has additional community-specific information:

* Their selected list
* Their community rank

### Selected List

The **selected list** is used as a fallback when a command requires a list but none is specified explicitly.

By default, a member has no selected list. When a command requires a list, the member can therefore:

* Specify the list directly in the command,
* set their selected list
* or leave the list unspecified and the community's default selected list is used as a fallback.

### Community Ranks

Every member has a **community rank** that determines which actions they are allowed to perform within that community.

| Rank          | Power | Description                                                                                                                          |
| ------------- | ----: | ------------------------------------------------------------------------------------------------------------------------------------ |
| User          |     0 | Basic member of the community. Can use commands that do not require elevated permissions.                                            |
| Helper        |     1 | Can create tasks.                                                                                                                    |
| Moderator     |     2 | Can create and manage tasks, as well as modify data belonging to other users.                                                        |
| Administrator |     3 | Can manage all aspects of the community, including its lists, attributes, members, and settings. Also has all moderator permissions. |
| Owner         |     4 | Has all community permissions, including the ability to delete the community.                                                        |

Community ranks are specific to a single community. The same user can therefore have different community ranks in different communities.

## Server Ranks

Server ranks describe a user's level of control over Jumpedia within a **Discord server**.

Unlike meta and community ranks, server ranks are **not stored or managed by Jumpedia**. Instead, Jumpedia determines a user's server rank for each interaction based on their Discord permissions.

Server ranks do not grant permissions within Jumpedia's communities. Instead, they control access to **server-level Jumpedia configuration**, such as linking the server to a community and controlling which users or channels can interact with Jumpedia.

| Rank          | Power | Description                                                                             |
| ------------- | ----: | --------------------------------------------------------------------------------------- |
| User          |     0 | The default rank. Has no server-level administrative permissions for Jumpedia.          |
| Administrator |     1 | Can manage Jumpedia's server-level configuration, subject to their Discord permissions. |
| Owner         |     2 | The highest server rank. Has full control over Jumpedia's server-level configuration.   |

## User vs. Member

A **user** represents a person globally across Jumpedia, while a **member** represents that same person within a specific community.

For example:

* A user can exist without being a member of any community.
* The same user can be a member of multiple communities.
* The same user can have a different community rank and selected list in each community.

Users and members are closely related concepts, so Jumpedia's commands generally use the term `user` rather than distinguishing between users and members.

All commands for users and members are therefore located in the [user command group](/commands/user) instead of being split into separate command groups.

The term `member` is primarily used when the distinction between a global user and their membership in a specific community is important.
