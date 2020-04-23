import {MdZoomOutMap} from 'react-icons/lib/md'

export default {
  name: 'province', // accidentally made this uppercase...
  type: 'document',
  title: 'Province',
  icon: MdZoomOutMap,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Province'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
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
    }
  ]
}
