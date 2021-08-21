import { META_DATA } from '../data/meta';
import { SOCIAL_MEDIA_DATA } from '../data/social_media';
import { CONTACT_DATA } from '../data/contact';

const { twitter: TWITTER } = SOCIAL_MEDIA_DATA;
const { siteName: SITE_NAME, host: HOST, author: AUTHOR } = CONTACT_DATA;
const IMAGE_FOLDER = `${HOST}/_ipx/img`;
const SITE_IMAGE = `${IMAGE_FOLDER}/app/samantha-ming-logo.svg`;

// Reference:
// https://github.com/AlekseyPleshkov/nuxt-social-meta/blob/master/index.js
export function routeMeta(route = {}, article = null) {
  const { name: routeName, path: routePath } = route;
  const metaData = META_DATA[routeName];
  const isSlugPage = article !== null;
  const isHomePage = routeName === 'index';
  const isParentPage = metaData !== undefined;
  const isBlogSlugPage = routeName === 'blog-slug';
  const url = HOST + routePath;

  if (isHomePage || (!isParentPage && !isSlugPage)) {
    const { title, description, twDescription } = META_DATA.index;

    return nuxtHeadMetaObject({
      url,
      title,
      description,
      twDescription,
      image: SITE_IMAGE,
    });
  }

  const { title, description, twDescription } = article || metaData;
  const formattedTitle =
    routeName === 'index' || isSlugPage ? title : `${title} | ${SITE_NAME}`;

  const image = imagePath({ isSlugPage, isBlogSlugPage, routePath });

  return nuxtHeadMetaObject({
    url,
    title: formattedTitle,
    description,
    twDescription: twDescription || description,
    image,
  });
}

function imagePath({ isSlugPage, isBlogSlugPage, routePath } = {}) {
  // TODO: add support for custom image (set in metaData or article)
  const imageSize = isBlogSlugPage ? 500 : 400; // assume square image
  const slugImage = IMAGE_FOLDER + routePath + `.jpg?s=${imageSize}`;
  return isSlugPage ? slugImage : SITE_IMAGE;
}

function nuxtHeadMetaObject({ url, title, description, twDescription, image }) {
  const metas = [
    // Facebook and Linkedin
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_US' },
    { property: 'article:author', content: AUTHOR },
    { property: 'og:image', content: image },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: TWITTER.handle },
    { name: 'twitter:creator', content: TWITTER.handle },
    { name: 'twitter:title', content: title },
    { name: 'twitter:url', content: url },
    { name: 'twitter:description', content: twDescription }, // less than 200 characters
    { name: 'twitter:image', content: image },
  ];

  // Add 'hid' to override default otherwise would have duplicate tag
  const hidMetas = metas.map((meta) => {
    meta.hid = meta.name || meta.property;
    return meta;
  });

  return {
    title,
    meta: hidMetas,
  };
}
