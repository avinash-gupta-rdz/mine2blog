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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => {
              // Include all blog posts and main pages
              return !item.url.includes('/tags/');
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // Force dark theme to match main site
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'BLOG',
      logo: {
        alt: 'Mine2 Logo',
        src: 'img/logo.png',
      },
      items: [
        // Blog-specific navigation - Clean & Focused
        {to: '/', label: 'All Posts', position: 'left'},
        {to: '/tags', label: 'Tags', position: 'left'},
        
        // Essential external links only - No arrows, clean design
        {
          href: 'https://mine2.io',
          label: 'Main Site',
          position: 'left',
          className: 'navbar-main-site-link',
        },
        
        // Single primary CTA - Clear visual hierarchy
        {
          href: 'https://mine2.io/demo',
          label: 'Book Demo',
          position: 'right',
          className: 'header-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Digital Mines',
              href: 'https://mine2.io/solutions',
            },
            {
              label: 'Mine2 Fortify',
              href: 'https://mine2.io/solutions',
            },
            {
              label: 'Mine2 Mate',
              href: 'https://mine2.io/solutions',
            },
            {
              label: 'Integrations',
              href: 'https://mine2.io/solutions',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              href: 'https://mine2.io/company/about',
            },
            {
              label: 'Careers',
              href: 'https://mine2.io/careers',
            },
            {
              label: 'Contact',
              href: 'https://mine2.io/contact',
            },
            {
              label: 'Blog',
              to: '/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              href: 'https://mine2.io/terms',
            },
            {
              label: 'Privacy Policy',
              href: 'https://mine2.io/privacy',
            },
            {
              label: 'FAQ',
              href: 'https://mine2.io/faq',
            },
            {
              label: 'Security',
              href: 'https://mine2.io/security-assessment',
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
      copyright: `Copyright © ${new Date().getFullYear()} MINE2 Technologies, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
