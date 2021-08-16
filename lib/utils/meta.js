import { META_DATA } from '../data/meta';
import { SOCIAL_MEDIA_DATA } from '../data/social_media';
import { CONTACT_DATA } from '../data/contact';

const { twitter: TWITTER } = SOCIAL_MEDIA_DATA;
const { siteName: SITE_NAME, host: HOST, author: AUTHOR } = CONTACT_DATA;

// Reference:
// https://github.com/AlekseyPleshkov/nuxt-social-meta/blob/master/index.js
export function routeMeta(route = {}, article = null) {
  const { name: routeName, path: routePath } = route;
  const metaData = META_DATA[routeName];

  if (!metaData) {
    return {};
  }

  // const { twDescription } = metaData;
  const { title, description, twDescription } = article || metaData;

  const url = HOST + routePath;
  const formattedTitle =
    routeName === 'index' || article ? title : `${title} | ${SITE_NAME}`;

  // TODO: add image
  // https://github.com/AlekseyPleshkov/nuxt-social-meta/blob/master/index.js

  const metas = [
    // Facebook and Linkedin
    { property: 'og:title', content: formattedTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_US' },
    { property: 'article:author', content: AUTHOR },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: TWITTER.handle },
    { name: 'twitter:creator', content: TWITTER.handle },
    { name: 'twitter:title', content: formattedTitle },
    { name: 'twitter:url', content: url },
    { name: 'twitter:description', content: twDescription || description }, // less than 200 characters
  ];

  // Add 'hid' to override default otherwise would have duplicate tag
  const hidMetas = metas.map((meta) => {
    meta.hid = meta.name || meta.property;
    return meta;
  });

  return {
    title: formattedTitle,
    meta: hidMetas,
  };
}
