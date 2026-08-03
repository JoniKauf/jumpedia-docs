---
title: Communities
description: Learn how Jumpedia communities work and how they organize shared data.
sidebar_position: 1
---

A community in Jumpedia represents an actual existing community of people sharing the same interest. 

Communities are the central place where data is stored. A community contains its own lists, attributes, tasks, members, and settings, allowing each community to define its own structure and workflow.

A community can be connected to one or more Discord servers. This allows members to access the same community data from multiple servers. However, each individual Discord server can only be connected to one community at a time.

## Default Selected List

A community can optionally define a **default selected list**.

This list is used as a fallback when:
- A user does not explicitly specify a list in a command.
- The user does not have a personally selected list.

This allows communities to define a default context for commands without requiring users to select a list every time.

We will learn more about [lists](/concepts/lists) later on.

## Community Limits

Communities can have limits that control how much data they can contain.

Examples of limited concepts include:

- The number of lists.
- The number of attributes.
- The number of tasks.
- And so on...

These limits help ensure that Jumpedia does not get abused by spammers.

## Managing a Community

Community management is controlled through community ranks. Members with sufficient permissions can configure the community, manage its data, and modify settings depending on their rank.

For more information about permissions, see [Community Ranks](/concepts/users#community-ranks).