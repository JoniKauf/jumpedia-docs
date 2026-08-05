---
title: Community
description: Commands for interacting with communities.
sidebar_position: 2
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing and interacting with communities.

## Basic

### Information

<Command
    command="community info"
    args={[
        {
            name: "community_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the community for which to show info. If unspecified, the current community.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified community.

</Command>

<Command
    command="community browse"
    args={[]}
    permissions={[]}
>

Shows all available communities.

</Command>

## Privileged

### Creation & Deletion

<Command
    command="community create"
    args={[
        {
            name: "community_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the community to create.",
        },
        {
            name: "community_owner",
            requirement: C.ArgumentRequirement.Required,
            description: "The user who will own the community.",
        },
        {
            name: "community_list_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of lists allowed in the community. If unspecified, the default limit is used.",
        },
        {
            name: "list_attribute_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of attributes allowed per list. If unspecified, the default limit is used.",
        },
        {
            name: "list_task_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of tasks allowed per list. If unspecified, the default limit is used.",
        },
        {
            name: "attribute_alias_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of aliases allowed per attribute. If unspecified, the default limit is used.",
        },
        {
            name: "field_slot_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of field slots allowed per field. If unspecified, the default limit is used.",
        },
        {
            name: "collection_entry_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of entries allowed per collection. If unspecified, the default limit is used.",
        },
        {
            name: "collection_entry_alias_count_max",
            requirement: C.ArgumentRequirement.Optional,
            description: "The maximum number of aliases allowed per collection entry. If unspecified, the default limit is used.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Meta,
            level: "Administrator",
        },
    ]}
>

Creates a new community with the specified owner and limits.

</Command>

<Command
    command="community nuke"
    args={[]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Owner",
        },
    ]}
>

Deletes the current community.

</Command>


### Editing

<Command
    command="community edit default_selected_list"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to set as the default selected list. If unspecified, the default selected list is unset.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Changes the community's default selected list.

</Command>
