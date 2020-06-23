// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import city from './documents/city'
import organization from './documents/organization'
import province from './documents/province'

// Post document types
import category from './documents/posts/category'
import post from './documents/posts/post'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import pdf from './objects/pdf'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pdf,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    portableText,
    simplePortableText,
    textSection,
    siteConfig,
    page,
    route,
    city,
    organization,
    province,

    // post stuff
    category,
    post
  ])
})
