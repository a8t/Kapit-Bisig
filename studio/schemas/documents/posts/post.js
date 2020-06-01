import moment from 'moment'
import {MdLibraryBooks} from 'react-icons/lib/md'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdLibraryBooks,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A clear, concise title for the article',
      validation: Rule => [
        Rule.required(),
        Rule.max(50).warning('Shorter titles are usually better'),
        Rule.max(100).error(`Please shorten the title. Max 100 characters`)
      ]
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Body'
    },
    {
      name: 'previewText',
      type: 'string',
      title: 'Summary text',
      description: 'This is used for previews in places like the homepage and the News page',
      validation: Rule => [Rule.required()]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The article link url. Easiest to just click Generate.',
      options: {
        source: doc => `${moment(doc._createdAt).format('YYYY/MM/DD')}/${doc.title}`,
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => [Rule.required()]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => [Rule.required()]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ]
}
