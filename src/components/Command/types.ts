import { ReactNode } from "react";

export enum RankType {
    Server = "Server",
    Community = "Community",
    Meta = "Meta",
}

export enum ArgumentRequirement {
    Required = "Required",
    Optional = "Optional",
}

export interface CommandArgument {
    name: string;
    requirement: ArgumentRequirement;
    description: string;
}

export interface CommandPermission {
    type: RankType;
    level: string;
    description?: string;
}

export interface CommandProps {
    command: string;

    args: readonly CommandArgument[];
    
    permissions: readonly CommandPermission[];

    permissionDescription?: string;

    children?: ReactNode;
}