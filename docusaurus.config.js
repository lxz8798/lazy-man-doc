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
                to: 'frontend/react',
                label: 'REACT FAMILY  /  RN'
            },
            {
              to: 'frontend/vue',
              label: 'VUE FAMILY'
            },
            {
              to: 'frontend/js',
              label: 'JAVASCRIPT  /  TYPESCRIPT'
            },
            {
              to: 'frontend/web',
              label: 'JAVASCRIPT  /  TYPESCRIPT'
            },
            {
              to: 'frontend/h5',
              label: 'CSS  /  CSS3 / SASS'
            },
            {
              to: 'frontend/css',
              label: 'D3JS / OPENLAYERS / THREEJS'
            }
          ]
        },
        {
          to: 'backend',
          label: 'BACKEND',
          position: 'right',
          items: [
            {
              to: 'backend/node',
              label: 'NODEJS'
            },
            {
              to: 'backend/egg',
              label: 'EGGJS'
            },
            {
              to: 'backend/python',
              label: 'PYTHON'
            }
          ]
        },
        {
          to: 'designer',
          label: 'DESIGNER',
          position: 'right',
          items: [
            {
              to: 'designer/web',
              label: 'PHOTOSHOP'
            },
            {
              to: 'designer/h5',
              label: 'PHOTOSHOP'
            },
            {
              to: 'designer/ps',
              label: 'PHOTOSHOP'
            },
            {
              to: 'designer/ai',
              label: 'ILLUSTRATOR'
            },
            {
              to: 'designer/3d',
              label: 'C4D / MAYA'
            }
          ]
        },
        {
          to: 'hobby',
          label: 'MY HOBBY',
          position: 'right',
          items: [
            {
              to: 'hobby/cg',
              label: 'COMPUTED GRAPHICS'
            },
            {
              to: 'hobby/clip',
              label: 'VIDEO CLIP'
            },
            {
              to: 'hobby/photography',
              label: 'PHOTOGRAPHY'
            },
          ]
        },
        {
          to: 'project',
          label: 'PROJECT',
          position: 'right',
          items: [
            {
              to: 'project/myhome',
              label: 'MY HOME V1 ~ V4'
            },
            {
              to: 'project/mywork',
              label: 'WEB / H5 / RN / UNIAPP'
            }
          ]
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SOURCE',
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
          title: 'ABOUT ME',
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
          title: 'OTHER HOME',
          items: [
            {
              label: 'v1-17年',
              to: 'http://v1.lazy-studio.com',
            },
            {
              label: 'v2-18年',
              to: 'http://v2.lazy-studio.com',
            },
            {
              label: 'v3-19年',
              to: 'http://v3.lazy-studio.com',
            },
            {
              label: 'v4-21年',
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
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ]
};
