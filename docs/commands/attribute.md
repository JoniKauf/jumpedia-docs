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
            description: "The name or alias of the attribute for which to show information.",
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

<Command
    command="attribute browse"
    args={[
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Optional,
            description: "The name of the list to browse. If unspecified, the interacting user's selected list if specified, otherwise the community's default selected list.",
        },
    ]}
    permissions={[]}
>

Shows all attributes in the specified list.

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
            description: "The type of the attribute. Either task (fields are bound to a task) or user (fields are bound to a user's completed task).",
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

The min slot count is initially 0 and can only be updated after attribute creation. More about the reasoning behind this can be found in the `/attribute edit min_and_max_slot_count` command documentation.
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

Every field, collection entry, alias and more of this attribute will be irreversibly deleted!

</Command>

### Editing

<Command
    command="attribute edit name"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to edit.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the attribute.",
        },
        {
            name: "new_attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The new name of the attribute.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Changes the name of the specified attribute.

</Command>

<Command
    command="attribute edit aliases"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to edit.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the attribute.",
        },
        {
            name: "new_attr_aliases_dsl_sequence",
            requirement: C.ArgumentRequirement.Required,
            description: "The new aliases of the attribute, specified via the `Sequence DSL`.",
        },
        {
            name: "edit_mode",
            requirement: C.ArgumentRequirement.Required,
            description: "How the specified aliases should be applied to the attribute.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Edits the aliases of the specified attribute according to the selected edit mode.

</Command>


<Command
    command="attribute edit min_and_max_slot_count"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to edit.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the attribute.",
        },
        {
            name: "new_min_slot_count",
            requirement: C.ArgumentRequirement.Required,
            description: "The new minimum number of slots for the attribute.",
        },
        {
            name: "new_max_slot_count",
            requirement: C.ArgumentRequirement.Required,
            description: "The new maximum number of slots for the attribute.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Changes the minimum and maximum number of slots allowed for the specified attribute.

For **user attributes**, the new limits are treated as soft limits. Existing user fields are not checked against the new criteria, allowing staff to migrate users' field data after the edit. Users cannot subsequently set field values that violate the new limits.

For **task attributes**, the new limits are enforced strictly. All existing task fields for the attribute must be adjusted to satisfy the new criteria before the edit can be completed successfully. If the migration cannot logically be performed in a single edit, staff can use two edits to migrate the attribute safely.

For example, suppose the current slot limits are `0–1`, but the desired limits are `3–5`. Applying `3–5` directly would fail because existing task fields may contain between zero and one slots and therefore cannot satisfy the new minimum of three slots.

Instead, staff can first widen the limits to `0–5`. This intermediate state accepts both the existing `0–1` slot counts and the desired `3–5` slot counts, allowing the task fields to be migrated to contain the required number of slots.

Once the migration is complete, the limits can be changed from `0–5` to the desired `3–5`. At that point, all existing task fields already satisfy the new minimum, so the final edit can be performed successfully.

</Command>


<Command
    command="attribute edit collection"
    args={[
        {
            name: "attribute_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the attribute to edit.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list containing the attribute.",
        },
        {
            name: "new_collection_dsl_mapping",
            requirement: C.ArgumentRequirement.Required,
            description: "The new collection of the attribute, specified via the `Mapping DSL`.",
        },
        {
            name: "edit_mode",
            requirement: C.ArgumentRequirement.Required,
            description: "How the specified collection should be applied to the attribute.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Edits the collection of the specified attribute according to the selected edit mode.

For **user attributes**, the new collection is treated as a soft restriction. Existing user field slots are not checked against the new collection, so they may temporarily contain values that are no longer valid. These invalid values are always sorted first when sorting by this attribute in ascending order and can be corrected by staff after the migration.

For **task attributes**, the new collection is enforced strictly. All existing task slots must match an entry in the new collection.

Collection entry aliases can be used to simplify the migration process for task attributes. When validating existing task slots, both entry values and their aliases of the new collection are considered. Staff can therefore temporarily add values from the old collection as aliases to corresponding entries in the new collection. This allows existing task slots to resolve to the new entries during the migration. Once the migration is complete, the temporary aliases can optionally be removed because the resolved entry values are stored directly in the field slots.

For example, suppose the current collection is:

| Value    | Aliases    |
| -------- | ---------- |
| `Easy`   | `Ez`, `E`  |
| `Medium` | `Med`, `M` |
| `Hard`   | `Hrd`, `H` |

The desired collection is:

| Value          | Aliases      |
| -------------- | ------------ |
| `Baby`         | `BB`, `B`    |
| `Intermediate` | `Inter`, `I` |
| `Advanced`     | `Adv`, `A`   |
| `Pro`          | `P`          |

The desired collection can be temporarily modified for the migration:

| Value          | Aliases                    |
| -------------- | -------------------------- |
| `Baby`         | `BB`, `B`, **`Easy`**      |
| `Intermediate` | `Inter`, `I`, **`Medium`** |
| `Advanced`     | `Adv`, `A`, **`Hard`**     |
| `Pro`          | `P`                        |

When the collection is edited (in **overwrite mode** for this example), existing slots containing `Easy`, `Medium`, or `Hard` are resolved through these temporary aliases and stored as `Baby`, `Intermediate`, or `Advanced`, respectively.

After the migration has completed, the temporary aliases (`Easy`, `Medium`, and `Hard`) can optionally be removed from the collection.

</Command>

<Command
    command="attributes edit position_order"
    args={[
        {
            name: "all_attribute_names_dsl_sequence",
            requirement: C.ArgumentRequirement.Required,
            description: "The new order of all attributes, specified via the `Sequence DSL`. Every attribute in the list must be included and will be positioned according to its order in the sequence.",
        },
        {
            name: "list_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the list whose attribute order should be edited.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Community,
            level: "Administrator",
        },
    ]}
>

Changes the position order of all attributes in the specified list.

</Command>