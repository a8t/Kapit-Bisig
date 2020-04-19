export default {
  widgets: [
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
                  buildHookId: '5e9c6f3a8d1bfb621d43a705',
                  title: 'Sanity Studio',
                  name: 'KapitBisigSanity-studio',
                  apiId: 'adced667-19c9-4c0c-a8db-1bc8a99c6f75'
                },
                {
                  buildHookId: '5e9c6f3a8e1a5699b881f90b',
                  title: 'Blog Website',
                  name: 'KapitBisigSanity',
                  apiId: 'd0e1ba5f-f5e5-4e1e-994b-84241820ae20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a8t/KapitBisigSanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://KapitBisigSanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
