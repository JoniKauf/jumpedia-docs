---
title: Attribute
description: Commands for interacting with attributes.
sidebar_position: 1
---

import Command, * as C from "@site/src/components/Command";

Commands for creating, managing and interacting with attributes.

## Basic

### Information

<Command
    command="attribute info"
    args={[
        {
            name: "attribute_name_or_alias",
            requirement: C.ArgumentRequirement.Required,
            description: "The name or alias of the attribute for which to show info.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to search the attribute in. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows information about the specified attribute.

</Command>


## Staff

### Creation & Deletion

<Command
    command="attribute create"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to create.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list to create the attribute in.",
        },
        {
            name: "type",
            requirement: C.ArgumentRequirement.Required,
            description: "The type of the attribute. Either task (field are bound to a task) or user (fields are bound to a user's completed task).",
        },
        {
            name: "slot_type",
            requirement: C.ArgumentRequirement.Required,
            description: "The slot type of the attribute. Either a bool (true or false), an integer, a decimal number or a string.",
        },
        {
            name: "max_slot_count",
            requirement: C.ArgumentRequirement.Required,
            description: "The maximum number of slots the attribute can contain.",
        },
        {
            name: "unique_slots",
            requirement: C.ArgumentRequirement.Required,
            description: "Whether slots must be unique across the field.",
        },
        {
            name: "aliases_dsl_sequence",
            requirement: C.ArgumentRequirement.Required,
            description: "The aliases of the attribute, specified via the `Sequence DSL`.",
        },
        {
            name: "collection_dsl_mapping",
            requirement: C.ArgumentRequirement.Required,
            description: "The collection of the attribute, specified via the `Mapping DSL`.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Creates a new attribute in the specified list.

The min slot count is initially 0 and can only be updated after attribute creation. If any tasks already existed, they would have no slot for the new attribute and therefore would not fulfill the minimum criteria if it's greater than 0. After all tasks' fields are adjusted, this can be updated.

</Command>

<Command
    command="attribute nuke"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to delete.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the attribute.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Deletes the specified attribute from the specified list.

This will also irreversibly delete all tasks' or user's fields for this attribute, as well as its collection (if given) and all other associated data!

</Command>