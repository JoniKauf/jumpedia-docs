---
title: List
description: Commands for interacting with lists.
sidebar_position: 3
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing and interacting with lists.

## Basic

### Information

<Command
    command="list info"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list for which to show info.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified list.

</Command>

<Command
    command="lists browse"
    args={[]}
    permissions={[]}
>

Shows all lists available in the current community.

</Command>

## Privileged

### Creation & Deletion

<Command
    command="list create"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list to create.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Creates a new list.

</Command>

<Command
    command="list nuke"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list to delete.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Deletes the specified list.

</Command>

### Editing

<Command
    command="list edit name"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list to edit.",
        },
        {
            name: "new_list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The new name of the list.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
        },
    ]}
>

Changes the name of the specified list.

</Command>