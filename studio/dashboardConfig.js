export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a1f1a938d8ce02bb4dc4f9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-82vdraa7',
                  apiId: '2d0bc0a9-0628-47d7-bfe8-19bc6abcba95'
                },
                {
                  buildHookId: '62a1f1a9ab07ae03d40c4da5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-9ub4rb37',
                  apiId: '1e578b21-46f9-42ed-82fc-5ce01f8a324d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moenni-ch/sanity-nextjs-landing-pages_2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-9ub4rb37.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
