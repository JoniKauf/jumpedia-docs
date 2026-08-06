---
title: Server
description: Commands for interacting with Discord servers.
sidebar_position: 4
---

import Command, * as C from "@site/src/components/Command";

Commands for editing how Discord servers can interact with Jumpedia.

All of these commands do not change anything about Jumpedia's data directly, but instead how Discord servers can interact with specific communities.

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

Links the current server to the specified community. It therefore makes all community specific commands act on the specified community.

Only one community can be connected to a server at once.

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

Unlinks the current server from its linked community. It therefore makes all community specific commands not work anymore until another community is linked to the server again.

</Command>