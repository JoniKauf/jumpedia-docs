---
title: Task
description: Commands for interacting with tasks.
sidebar_position: 6
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing, and interacting with tasks.

## Basic

### Information

<Command
    command="task info"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of a task for which to show information.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows the specified task's field mapping.

</Command>

<Command
    command="task info_user"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of a task for which to show information.",
        },
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
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

Shows the specified task's field mapping and additionally the user's user field mapping of the specified task.

</Command>

<Command
    command="tasks browse"
    args={[
        {
            name: "filter_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The filter to apply, specified via the Filter DSL. If unspecified, no filter is applied.",
        },
        {
            name: "sort_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The sort order to apply, specified via the Sort DSL. If unspecified, the tasks are sorted by name.",
        },
        {
            name: "yield_dsl_sequence",
            requirement: C.ArgumentRequirement.Optional,
            description: "The attributes to display, specified via the Sequence DSL. If unspecified, the name and alias attributes will be displayed.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to browse. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows all tasks' field mappings in the specified list matching the specified filter and sort order.

</Command>

<Command
    command="tasks browse_user"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user whose task-specific user field mappings should be shown. If unspecified, the interacting user.",
        },
        {
            name: "filter_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The filter to apply, specified via the Filter DSL. If unspecified, no filter is applied.",
        },
        {
            name: "sort_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The sort order to apply, specified via the Sort DSL. If unspecified, the tasks are sorted by name.",
        },
        {
            name: "yield_dsl_sequence",
            requirement: C.ArgumentRequirement.Optional,
            description: "The attributes to display, specified via the Sequence DSL. If unspecified, the name, alias and all user attributes will be displayed.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to browse. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows all field mappings together with the specified user's user field mappings of the tasks the user has obtained in the specified list matching the specified filter and sort order.

</Command>

<Command
    command="tasks browse_missing"
    args={[
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user whose missing tasks should be shown. If unspecified, the interacting user.",
        },
        {
            name: "filter_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The filter to apply, specified via the Filter DSL. If unspecified, no filter is applied.",
        },
        {
            name: "sort_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The sort order to apply, specified via the Sort DSL. If unspecified, the tasks are sorted by name.",
        },
        {
            name: "yield_dsl_sequence",
            requirement: C.ArgumentRequirement.Optional,
            description: "The attributes to display, specified via the Sequence DSL. If unspecified, the name and alias attributes will be displayed.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to browse. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows all field mappings of tasks that have not yet been given to the specified user in the specified list matching the specified filter and sort order.

</Command>

### Give & Take

<Command
    command="task give"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of the task to give.",
        },
        {
            name: "user_field_mapping_dsl",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user field mapping to assign, specified via the Mapping DSL. If unspecified, it is considered empty.",
        },
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user to give the task to. If unspecified, the interacting user.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
            description: "Required when giving a task to another user.",
        },
    ]}
>

Gives the specified task to the specified user, marking it as completed. The specified user field mapping is also set.

</Command>

<Command
    command="task take"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of the task to take.",
        },
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user to take the task from. If unspecified, the interacting user.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
            description: "Required when taking a task from another user.",
        },
    ]}
>

Takes the specified task from the specified user, marking it as not completed. 

The specified user's user field mapping for the specified task is also cleared irreversibly!

</Command>

<Command
    command="task edit given"
    args={[
        {
            name: "task_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of the task whose user field mapping should be edited.",
        },
        {
            name: "new_user_field_mapping",
            requirement: C.ArgumentRequirement.Required,
            description: "The new user field mapping, specified via the Mapping DSL.",
        },
        {
            name: "edit_mode",
            requirement: C.ArgumentRequirement.Required,
            description: "How the current and new user field mapping are edited together.",
        },
        {
            name: "user",
            requirement: C.ArgumentRequirement.Optional,
            description: "The user whose task should be edited. If unspecified, the interacting user.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the task in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
            description: "Required when editing another user's task.",
        },
    ]}
>

Edits the user field mapping of the specified task for the specified user according to the selected edit mode.

</Command>


## Privileged

### Creation & Deletion

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
            description: "The aliases of the task, specified via the Sequence DSL.",
        },
        {
            name: "field_mapping_dsl",
            requirement: C.ArgumentRequirement.Required,
            description: "The field mapping of the task, specified via the Mapping DSL.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Helper",
        },
    ]}
>

Creates a new task in the specified list with the specified aliases and field mapping.

</Command>

<Command
    command="task nuke"
    args={[
        {
            name: "task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the task to delete.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the task.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
        },
    ]}
>

Deletes the specified task from the specified list. 

Every field of this task will be cleared! Every user who has obtained this task will lose it and all its associated user fields will be cleared irreversibly as well!

</Command>

### Editing

<Command
    command="task edit name"
    args={[
        {
            name: "task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the task to edit.",
        },
        {
            name: "new_task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The new name of the task.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the task.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
        },
    ]}
>

Changes the name of the specified task.

</Command>

<Command
    command="task edit aliases"
    args={[
        {
            name: "task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the task to edit.",
        },
        {
            name: "new_task_aliases_dsl_sequence",
            requirement: C.ArgumentRequirement.Required,
            description: "The new aliases of the task, specified via the Sequence DSL.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the task.",
        },
        {
            name: "edit_mode",
            requirement: C.ArgumentRequirement.Required,
            description: "How the current and new aliases are edited together.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
        },
    ]}
>

Edits the aliases of the specified task according to the selected edit mode.

</Command>

<Command
    command="task edit field_mapping"
    args={[
        {
            name: "task_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the task to edit.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the task.",
        },
        {
            name: "new_field_mapping_dsl",
            requirement: C.ArgumentRequirement.Required,
            description: "The new field mapping of the task, specified via the Mapping DSL.",
        },
        {
            name: "edit_mode",
            requirement: C.ArgumentRequirement.Required,
            description: "How the current and new field mapping are edited together.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Moderator",
        },
    ]}
>

Edits the field mapping of the specified task according to the selected edit mode.

</Command>

### Bulk

<Command
    command="tasks bulk"
    args={[
        {
            name: "file",
            requirement: C.ArgumentRequirement.Required,
            description: "A text file containing the commands to execute, with one command per line.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Helper",
            description: "Required when the file contains a command that creates a task.",
        },
        {
            type: C.RankType.Community,
            level: "Moderator",
            description: "Required when the file contains a command that edits a task, or one that gives, takes or edits a task of another user.",
        },
    ]}
>

Executes all commands of the specified file in the order in which they are written.

Each line of the file contains one command. A command is written the same way as when it is pasted into Discord: the command itself, followed by the name of each parameter with a colon and its value.

```text
/task create task_name: Railing Concussions list_name: Main aliases_dsl_sequence: RC field_mapping_dsl: (Location: "Metro Kingdom")
/task give task_name_or_alias: Railing Concussions user: 123456789012345678 list_name: Main
```

Empty lines and lines starting with `#` are skipped. The file has to contain at least one command.

Only the following commands can be used in the file:

- `/task create`
- `/task edit name`
- `/task edit aliases`
- `/task edit field_mapping`
- `/task give`
- `/task take`
- `/task edit given`

Their parameters are the same as documented on this page and optional parameters can be left out. Two kinds of parameters are written differently than in Discord:

- A `user` is specified by the ID of the Discord user or by a mention of the user. Only users that Jumpedia already knows can be specified, for example because they have used Jumpedia before.
- An `edit_mode` is specified by the name that Discord shows when selecting it, for example `Replace Current Field Mapping`.

Before anything is executed, Jumpedia lists how many times each command appears in the file and asks for a confirmation. The commands are only executed after confirming. If the confirmation is aborted, or not given within 60 seconds, nothing changes.

The file is executed in an **all or nothing** manner. If any command of the file fails, Jumpedia shows the line and the error of that command and none of the commands of the file are applied.

Each command requires the same permissions as when it is used on its own.

A value cannot contain the name of another parameter of the same command followed by a colon, because Jumpedia would treat it as the start of that parameter. For example, a task of `/task create` cannot be named `Example list_name: Main`.

The file must contain UTF-8 text and cannot be bigger than 100,000 bytes.

</Command>
