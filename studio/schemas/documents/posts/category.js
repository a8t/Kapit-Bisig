import {MdGroupWork} from 'react-icons/lib/md'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdGroupWork,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'color',
      type: 'color',
      title: 'Choose color'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The category link url. Easiest to just click Generate.',
      options: {
        source: doc => doc.title,
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => [Rule.required()]
    }
  ]
}
