import {MdPinDrop} from 'react-icons/lib/md'

export default {
  name: 'City',
  type: 'document',
  title: 'City',
  icon: MdPinDrop,
  fields: [
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'province',
      type: 'string',
      title: 'Province'
    },
    {
      name: 'requestForm',
      type: 'string',
      title: 'Request Form'
    },
    {
      name: 'volunteerForm',
      type: 'string',
      title: 'Volunteer Form'
    },
    {
      name: 'cityLogo',
      type: 'image',
      title: 'City Image',
      description: 'Logo for the city'
    }
  ]
}
