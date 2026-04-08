// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MOS-Docs',
  tagline: 'Modular Operating System for Servers and Homelabs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.mos-official.net',
  baseUrl: '/',
  organizationName: 'ich777',
  projectName: 'mos-docs',
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        language: 'en',
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/ich777/mos-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'release-0.2.4-beta',
      content: '🚀 <strong>MOS 0.2.4-beta is out!</strong> — SnapRAID 14.1, Filebrowser operations & login security &nbsp;<a href="https://j000k3r.github.io/mos-docs-staging/Release-Notes/Beta/0.2.4-beta" style="color:#ffffff;">Release Notes →</a>',
      backgroundColor: '#fa9725',
      textColor: '#ffffff',
      isCloseable: true,
    },
    image: 'img/mos-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MOS-Docs',
      logo: {
        alt: 'MOS Logo',
        src: 'img/mos_black.png',
        srcDark: 'img/mos_white.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          href: 'https://github.com/ich777/mos-releases',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MOS-Docs',
          items: [
            {
              label: 'Overview',
              href: '/',
            },
            {
              label: 'MOS Website',
              href: 'https://mos-official.net',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/fcTMbuygTV',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/MOS_official_net/',
            },
            {
              label: 'X',
              href: 'https://x.com/mos_offi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ich777/mos-releases',
            },
            {
              label: 'GitHub Issue',
              href: 'https://github.com/ich777/mos-releases/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MOS-Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  scripts: [
    {
      src: 'data:text/css;base64,' + btoa(`
        .heroBanner {
          padding: 4rem 0 !important;
          text-align: center !important;
          background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%) !important;
        }
        .hero__title {
          color: #1f2937 !important;
          font-size: 3rem !important;
        }
        .hero__subtitle {
          color: #374151 !important;
          font-size: 1.25rem !important;
        }
        html[data-theme='dark'] .heroBanner {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%) !important;
        }
        html[data-theme='dark'] .hero__title {
          color: #ffffff !important;
        }
        html[data-theme='dark'] .hero__subtitle {
          color: #e5e7eb !important;
        }
      `),
      defer: false,
    },
  ],
};

export default config;