import S from '@sanity/desk-tool/structure-builder'
import {MdDashboard, MdSettings} from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['page', 'route', 'site-config', 'city', 'organization', 'province'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem()
        .title('Provinces')
        .schemaType('province')
        .child(S.documentTypeList('province').title('Provinces')),
      S.listItem()
        .title('Cities')
        .schemaType('city')
        .child(S.documentTypeList('city').title('Cities')),
      S.listItem()
        .title('Organizations')
        .schemaType('organization')
        .child(S.documentTypeList('organization').title('Organizations')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
