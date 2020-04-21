export default {
  widgets: [
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
                  title: 'admin.kapitbisig.ca | Admin Page',
                  name: 'kapitbisig-admin',
                  apiId: 'adced667-19c9-4c0c-a8db-1bc8a99c6f75'
                },
                {
                  buildHookId: '5e9d14956446ed17fc988ae7',
                  title: 'kapitbisig.ca | Landing Page',
                  name: 'kapitbisig',
                  apiId: '5e23f815-10bc-4f84-a40e-c4c377300c84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a8t/kapit-bisig',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://kapitbisig.ca',
            category: 'apps'
          }
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
