---
title: Help
description: Commands for getting help about specific topics.
sidebar_position: 1
---

import Command, * as C from "@site/src/components/Command";

Commands for getting help about specific topics inside of Jumpedia.

## Basic

### Information

<Command
    command="help command"
    args={[
        {
            name: "command",
            requirement: C.ArgumentRequirement.Required,
            description: "The command to get help about.",
        },
    ]}
    permissions={[]}
>

Shows an url that links to the documentation page of the specified command.

</Command>