import React, { useState } from "react";

import styles from "./styles.module.css";

import {
    ArgumentRequirement,
    type CommandProps,
} from "./types";

export * from "./types";

export default function Command({
    command,
    args,
    permissions,
    permissionDescription,
    children,
}: CommandProps) {
    const [copied, setCopied] = useState(false);

    async function copyCommand() {
        await navigator.clipboard.writeText(`/${command}`);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <div className={styles.command}>
            <code className={styles.commandCode}>
                /{command}

                <button
                    className={styles.copyButton}
                    onClick={copyCommand}
                    aria-label="Copy command"
                >
                    {copied ? "Copied" : "Copy"}
                </button>
            </code>

            {args.length > 0 && (
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>
                        Parameters
                    </h4>

                    <div className={styles.arguments}>
                        {args.map((arg) => (
                            <React.Fragment key={arg.name}>
                                <div className={styles.argumentName}>
                                    <code>
                                        {arg.requirement === ArgumentRequirement.Optional
                                            ? `[${arg.name}]`
                                            : `<${arg.name}>`}
                                    </code>
                                </div>

                                <div className={styles.argumentDescription}>
                                    {arg.description}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                    Permissions Required
                </h4>

                {permissions.length === 0 ? (
                    <div className={styles.noPermission}>
                        No permissions required.
                    </div>
                ) : (
                    <div className={styles.permissions}>
                        {permissions.map((permission) => (
                            <div
                                key={`${permission.type}-${permission.level}`}
                                className={styles.permission}
                            >
                                <div className={styles.permissionName}>
                                    • {permission.type} {permission.level}
                                </div>

                                {permission.description && (
                                    <div className={styles.permissionDescription}>
                                        {permission.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {permissionDescription && (
                    <div className={styles.permissionsDescription}>
                        {permissionDescription}
                    </div>
                )}
            </div>

            {children && (
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>
                        Description
                    </h4>

                    <div className={styles.description}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}