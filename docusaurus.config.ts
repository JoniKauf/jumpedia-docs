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
        image: "img/docusaurus-social-card.jpg",

        navbar: {
            title: "Jumpedia Docs",
            logo: {
                alt: "Jumpedia",
                src: "img/logo.svg",
            },
        },

        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Jumpedia`,
        },

        prism: {
            theme: require("prism-react-renderer").themes.github,
            darkTheme: require("prism-react-renderer").themes.dracula,
        },
    },
};

export default config;