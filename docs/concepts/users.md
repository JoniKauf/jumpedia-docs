---
title: Users
sidebar_position: 2
description: Learn how users and members work in Jumpedia.
---

A **user** represents a person that Jumpedia knows.

Users are created automatically whenever someone uses Jumpedia or is referenced by another user. This allows Jumpedia to keep track of people across different communities.

Jumpedia stores the following data about a user:
- Their Discord ID,
- the last username Jumpedia saw from that user
- and the user's meta rank.

A user is independent from any specific community. When a user joins or interacts with a community, they are a **member** of that community.

### Meta Ranks

Users have a global **Meta Rank** that applies across all of Jumpedia, not bound to any community.

The existing meta ranks are:

| Rank | Power | Description |
| --- | --- | --- |
| User | 0 | Basic Jumpedia user. |
| Administrator | 1 | Also called meta administrator.<br/> Users with this rank can create and manage entire communities. It is more powerful than any community rank. |
| Owner | 2 | The owner of Jumpedia. Can additionally manage meta administrators. |

Users with a meta ranks are official staff of Jumpedia and are there to help and to create and manage communities. Only very few people have a meta rank (with power > 0).

## Members

A member is a user connected to a specific community.

Members have additional community-specific information:
- Their selected list
- and their community rank.

### Selected List

The selected list is used as a fallback when a member executes a command that requires a specific list to be specified. By default a member has no selected list and therefore must either:
- Edit their selected list
- Specify the list in the command directly
- Accept the fact that the community's default selected list is used as a fallback.


### Community Ranks

Every member has a **community rank** that determines which actions they are allowed to perform within a given community.

| Rank | Power | Description |
| --- | ---: | --- |
| User | 0 | Basic member of the community. Can use commands that do not require elevated permissions. |
| Helper | 1 | Can only create tasks. |
| Moderator | 2 | Can create and manage tasks, as well as modify data belonging to other users. |
| Administrator | 3 | Can manage all aspects of the community, including its lists, attributes, members, and settings. Also has all moderator permissions. |
| Owner | 4 | Has all community permissions, including the ability to delete the community. |

Community ranks are specific to a single community. The same user can have different community ranks in different communities.

## User vs Member

A user represents the person globally across Jumpedia, while a member represents that same person inside a specific community.

For example:

- A user can exist without being part of any community.
- The same user can be a member of multiple communities.
- Each community can assign that user a different rank and settings.

Users and members are very similar concepts and therefore all commands of users and members are located in the [user command group](/commands/user) instead of being split up.


