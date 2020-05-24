import { MdPinDrop } from 'react-icons/lib/md'

export default {
	name: 'city', // accidentally made this uppercase...
	type: 'document',
	title: 'City',
	icon: MdPinDrop,
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name'
		},
		{
			name: 'province',
			type: 'reference',
			to: [{ type: 'province' }],
			title: 'Province'
		},
		{
			name: 'description',
			type: 'string',
			title: 'Description'
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
