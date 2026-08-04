---
title: Task
description: Commands for managing tasks.
sidebar_position: 5
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing, and interacting with tasks.

## Basic

### Task Info

<Command
    command="task info"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of a task for which to show info.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified task.

</Command>

<Command
    command="task info_user"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of a task for which to show info.",
        },
        {
            name: "user",
            requirement: C.ArgumentRequirement.Required,
            description: "The user whose task-specific user data should be shown. If unspecified, the interacting user.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified task combined with the target user's user field mapping.

</Command>

## Privileged

### Task Create

<Command
    command="task create"
    args={[
        {
            name: "task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the task to create.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list to create the task in.",
        },
        {
            name: "aliases_dsl_sequence",
            requirement: C.ArgumentRequirement.Required,
            description: "The aliases of the task, specified via the `Sequence DSL`.",
        },
        {
            name: "field_mapping_dsl",
            requirement: C.ArgumentRequirement.Required,
            description: "The field mapping of the task, specified via the `Mapping DSL`.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Helper",
        },
    ]}
>

Creates a new task in the specified list.

</Command>