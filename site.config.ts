import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '5c59a93ddbe543c7971d02e2a0e9c082',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Next.js Notion Starter Kit',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Brendon Guedes',

  // open graph metadata (optional)
  description: 'Brendon Guedes - Blog development',

  // social usernames (optional)
  twitter: 'brendonguedess',
  github: 'brendonguedes',
  linkedin: 'brendonguedes',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Sobre',
      pageId: 'f4506ea9f69b4d748fca72ff9aefc53b'
    },
    {
      title: 'Contato',
      pageId: '2e1fc137bae54ecf844a3e74ec725785'
    }
  ]
})
