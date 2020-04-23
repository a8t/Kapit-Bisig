import {MdGroup} from 'react-icons/lib/md'

export default {
  name: 'organization',
  type: 'document',
  title: 'Organization',
  icon: MdGroup,
  fieldsets: [{name: 'social', title: 'Social media handles'}],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'province',
      type: 'reference',
      to: [{type: 'province'}],
      title: 'Province'
    },
    {
      name: 'cities',
      type: 'array',
      title: 'Cities',
      of: [
        {
          name: 'city',
          type: 'reference',
          to: [{type: 'city'}],
          title: 'City'
        }
      ]
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{type: 'hero'}, {type: 'imageSection'}, {type: 'mailchimp'}, {type: 'textSection'}]
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      fieldset: 'social'
    },
    {
      title: 'Phone number',
      name: 'phone',
      type: 'string',
      fieldset: 'social'
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'url',
      fieldset: 'social'
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      fieldset: 'social'
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
      fieldset: 'social'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'email',
      fieldset: 'social'
    }
  ]
}
