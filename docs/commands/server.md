---
title: Server
description: Commands for interacting with Discord servers.
sidebar_position: 4
---

import Command, * as C from "@site/src/components/Command";

Commands for editing how Discord servers can interact with Jumpedia.

## Privileged

### Linking

<Command
    command="server link"
    args={[
        {
            name: "community_name",
            requirement: C.ArgumentRequirement.Required,
            description: "The name of the community to link this server to.",
        },
    ]}
    permissions={[
        {
            type: C.RankType.Server,
            level: "Administrator",
        },
    ]}
>

Links the current server to the specified community.

</Command>

<Command
    command="server unlink"
    args={[]}
    permissions={[
        {
            type: C.RankType.Server,
            level: "Administrator",
        },
    ]}
>

Unlinks the current server from its linked community.

</Command>