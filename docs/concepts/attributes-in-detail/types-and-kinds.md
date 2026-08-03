---
title: Types and Kinds
description: Learn how attribute types and kinds affect attribute behavior in Jumpedia.
sidebar_position: 1
---

Attributes have a **type** and a **kind**.

The type defines what the attribute belongs to, while the kind gives the attribute special behavior.

## Types

Every attribute has one of two types:

- Task
- User

### Task Attributes

Task attributes store information that belongs directly to a task. These are the types of tasks we already saw in the examples before.

Each task has its own field for every task attribute.

Examples:

- Name
- Difficulty
- Category
- Author

### User Attributes

User attributes store information that belongs to a user's completion of a task.

Each user can have their own value for a user attribute.

Examples:

- Proof
- User Difficulty Rating
- Star Rating
- Comments

Whenver a user completes a task by [giving it to themselves](/commands/basic/task#task-give), the fields of user attributes for the given task can be set. Then the user has custom data assigned to their completion of the task.

## Kinds

Attributes with kinds, so called "kinded attributes" are automatically created with a list when it is created. They are special because Jumpedia either automatically assigns data to tasks for these attributes or because the attributes are used for purposes outside of simply storing task data.

All custom attributes use the `None` kind, so they are "unkinded" or "custom" attributes. Each kinded attribute exists only once and so does its kind.

| Kind | Attribute Type | Slot Configuration | Specialty |
| --- | --- | --- | --- |
| None | Task/User | Custom. | Any custom attribute has this kind. | 
| ID | Task | Slot Type: Integer<br/> Slot Count: 1 | A unique identifier number across all of Jumpedia. Field automatically set on task creation. | 
| Name | Task | Slot Type: String<br/> Slot Count: 1 | The primary name of a task. Jumpedia uses this value to mention specific tasks. Tasks can also be looked up with their name. | 
| Alias | Task | Slot Type: String<br/> Slot Count: 0 to 15<br/> Unique Slots: True | Alternative identifiers that can also be used for looking up tasks. All tasks must have unique names and aliases across an entire list. |
| Created At | Task | Slot Type: String<br/> Slot Count: 1<br/> | The creation timestamp of a task. Field automatically set on task creation. |
| Given At | User | Slot Type: String<br/> Slot Count: 1<br/> | The time when a task was given to a user. Field automatically set on giving task. |
| Given By | User | Slot Type: String<br/> Slot Count: 1<br/> | The user who gave the task. Field automatically set on giving task. | 

All kinded attributes can be renamed and their aliases can be edited as well, but configuring their main properties is not permitted. They can also not be deleted directly, but only by deleting the list they belong to. 