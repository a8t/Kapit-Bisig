import React from 'react'

const InternalLinkRender = ({children}) => <span>{children} 🔗</span>

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'object',
  description: 'Locate a document you want to link to',
  fields: [
    {
      name: 'to',
      type: 'reference',
      description: 'Locate a document you want to link to',
      to: [
        {type: 'page'},
        {type: 'route'},
        {type: 'organization'},
        {type: 'city'},
        {type: 'province'}
      ]
    },
    {
      name: 'linkDestination',
      type: 'string',
      description: 'Local slug'
    }
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender
  }
}
