import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Jumpedia Documentation",
    tagline: "Documentation for Jumpedia",
    favicon: "img/favicon.ico",

    url: "https://docs.jumpedia.dev",
    baseUrl: "/",

    organizationName: "JoniKauf",
    projectName: "jumpedia-docs",

    trailingSlash: false,
    staticDirectories: ["static"],

    onBrokenLinks: "throw",
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "warn",
        },
    },

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/",
                },

                blog: false,

                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/jumpedia.png",

        navbar: {
            title: "Jumpedia Docs",
            logo: {
                alt: "Jumpedia",
                src: "img/jumpedia-transparent-no-text.png",
            },
        },

        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Jumpedia`,
        },

        metadata: [
            {
                name: "keywords",
                content:
                    "Jumpedia, documentation, tasks, communities, attributes, DSL",
            },
        ],

        prism: {
            theme: require("prism-react-renderer").themes.github,
            darkTheme: require("prism-react-renderer").themes.dracula,
        },

        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
    },
};

export default config;