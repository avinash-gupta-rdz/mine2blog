import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mine2 Blog',
  tagline: 'Insights, Updates & Cyber Deception Technology',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://blog.mine2.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mine2', // Usually your GitHub org/user name.
  projectName: 'mine2-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs, we only want blog functionality
        blog: {
          routeBasePath: '/', // Make blog the homepage
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
          // Remove edit links
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Mine2 Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'All Posts', position: 'left'},
        {to: '/tags', label: 'Tags', position: 'left'},
        {
          href: 'https://mine2.io',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://mine2.io/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Mine2',
          items: [
            {
              label: 'Main Website',
              href: 'https://mine2.io',
            },
            {
              label: 'About Us',
              href: 'https://mine2.io/about',
            },
            {
              label: 'Services',
              href: 'https://mine2.io/product',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Contact Us',
              href: 'https://mine2.io/contact',
            },
            {
              label: 'Careers',
              href: 'https://mine2.io/career',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/mine2-technologies',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'All Posts',
              to: '/',
            },
            {
              label: 'Tags',
              to: '/tags',
            },
            {
              label: 'Archive',
              to: '/archive',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mine2. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
