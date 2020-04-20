export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e9d1495c73268298c218710',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bdi5yq35',
                  apiId: '15eba709-d1da-4598-abbf-9da9b909668f'
                },
                {
                  buildHookId: '5e9d14956446ed17fc988ae7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t68qtxtg',
                  apiId: '4535b0d4-1999-492f-865e-6e7554c1e34a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a8t/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t68qtxtg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
