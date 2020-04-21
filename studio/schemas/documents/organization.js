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
      name: 'city',
      type: 'reference',
      to: [{type: 'City'}],
      title: 'City'
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
