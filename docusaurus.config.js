/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LAZY-STUDIO',
  tagline: 'v4-lazy-man',
  url: 'https://v4.lazy-studio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lxz8798', // Usually your GitHub org/user name.
  projectName: 'lazy-man-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LAZY-STUDIO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'frontend',
          label: 'FRONTEND',
          position: 'right',
          items: [
            {
              to: 'vue',
              label: 'VUE FAMILY'
            },
            {
              to: 'react',
              label: 'REACT  /  REACT NATIVE'
            },
            {
              to: 'js',
              label: 'JAVASCRIPT  /  TYPESCRIPT'
            },
            {
              to: 'd3js',
              label: 'D3JS / OPENLAYERS / THREEJS'
            },
            {
              to: 'css',
              label: 'CSS  /  CSS3 / SASS'
            },
            {
              to: 'html',
              label: 'HTML / HTML5'
            }
          ]
        },
        {
          to: 'backend',
          label: 'BACKEND',
          position: 'right',
          items: [
            {
              to: 'eggjs',
              label: 'EGGJS'
            },
            {
              to: 'nodejs',
              label: 'NODEJS'
            },
            {
              to: 'python',
              label: 'PYTHON'
            },
            {
              to: 'other',
              label: 'OTHER'
            }
          ]
        },
        {
          to: 'designer',
          label: 'DESIGNER',
          position: 'right',
          items: [
            {
              to: 'ps',
              label: 'ADOBE PHOTOSHOP'
            },
            {
              to: 'ai',
              label: 'ADOBE ILLUSTRATOR'
            },
            {
              to: 'pr',
              label: 'ADOBE PREMIERE'
            },
            {
              to: 'ae',
              label: 'AFTER EFFECT'
            },
            {
              to: 'c4d',
              label: 'C4D'
            }
          ]
        },
        {
          to: 'cg',
          label: 'PHOTO / PAINT',
          position: 'right',
          items: [
            {
              to: 'photos',
              label: 'PHOTO COLLECTION'
            },
            {
              to: 'painter',
              label: 'PAINTER WORKS'
            }
          ]
        },
        {
          to: 'work',
          label: 'WORK',
          position: 'right',
          items: [
            {
              to: 'web',
              label: 'WEB'
            },
            {
              to: 'h5',
              label: 'H5'
            },
            {
              to: 'rn',
              label: 'RN'
            },
            {
              to: 'uniapp',
              label: 'UNIAPP'
            }
          ]
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'source',
          items: [
            {
              label: 'github',
              to: 'https://github.com/lxz8798',
            },
            {
              label: 'docs',
              to: 'docs.lazy-studio.com',
            }
          ],
        },
        {
          title: 'About me',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'home',
          items: [
            {
              label: 'v1',
              to: 'http://v1.lazy-studio.com',
            },
            {
              label: 'v2',
              to: 'http://v2.lazy-studio.com',
            },
            {
              label: 'v3',
              to: 'http://v3.lazy-studio.com',
            },
            {
              label: 'v4',
              to: 'http://v4.lazy-studio.com',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My lazy-studio.com, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
