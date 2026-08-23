---
title: User
description: Commands for interacting with users and members.
sidebar_position: 7
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing, and interacting with [users and members](/concepts/users#user-vs-member).

## Basic

### Information

<Command
    command="user info"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user for whom to show information. If unspecified, the interacting user.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified user.

The server rank is only shown when the specified user is the interacting user, since [server ranks](/concepts/users#server-ranks) are determined only for the interacting user on each interaction.

When the command is executed in a server linked to a community, the header is `Member Info` instead of `User Info`, and the information additionally includes the member's selected list and community rank. Otherwise, only information about the user can be determined.

</Command>

### Editing

<Command
    command="user edit selected_list"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user whose selected list should be edited. If unspecified, the interacting user.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The list to select. If unspecified, no selected list is set.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
            description: "Required when editing another user's selected list.",
        },
    ]}
>
Changes the selected list of the specified user.

</Command>

## Staff

### Editing

<Command
    command="user edit meta_rank"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Required,
            description: "The user whose meta rank should be edited.",
        },
        {
            name: "rank",
            requirement: C.ArgumentRequirement.Required,
            description: "The new meta rank to assign to the user.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Meta,
            level: "- Contextual",
            description: "The interacting user must have a higher meta rank than the target user.",
        },
    ]}
    permissionDescription="The specified rank must be lower than the interacting user's meta rank."
>

Changes the meta rank of the specified user.

</Command>

<Command
    command="user edit community_rank"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Required,
            description: "The user whose community rank should be edited.",
        },
        {
            name: "rank",
            requirement: C.ArgumentRequirement.Required,
            description: "The new community rank to assign to the user.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "- Contextual",
            description: "The interacting user must have a higher community rank than the target user.",
        },
    ]}
    permissionDescription="The specified rank must be lower than the interacting user's community rank."
>

Changes the community rank of the specified user.

</Command>