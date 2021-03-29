import { TW_SAM } from '../constants/social_media';

function twitter(url, title) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURI(url)}&via=${TW_SAM}`;
}

function linkedin(url, title) {
  // https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin?context=linkedin/consumer/context
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
    url,
  )}&smid=li-share&title=${encodeURIComponent(title)}`;
}

function reddit(url, title) {
  return `https://reddit.com/submit?url=${encodeURI(url)}&smid=re-share&
    title=${encodeURIComponent(title)}`;
}

function facebook(url, title) {
  // developers.facebook.com/docs/sharing/webmasters/
  return `https://www.facebook.com/sharer/sharer.php?text=${encodeURIComponent(
    title,
  )}&u=${encodeURI(url)}`;
}

function email(url, title, description) {
  const descriptionMessage = description
    ? `${encodeURIComponent(description)}%0A%0A`
    : '';
  return `mailto:?subject=${encodeURIComponent(
    title,
  )} | SamanthaMing.com&body=${descriptionMessage}${encodeURI(url)}`;
}

function hackernews(url) {
  return `https://news.ycombinator.com/submitlink?u=${encodeURI(url)}`;
}

function shares(url, title, description) {
  return {
    twitter: {
      icon: 'twitter',
      link: twitter(url, title),
      name: 'Twitter',
      text: 'Share to Twitter',
      type: 'fab',
    },
    linkedin: {
      icon: 'linkedin',
      link: linkedin(url, title),
      name: 'LinkedIn',
      text: 'Share to LinkedIn',
      type: 'fab',
    },
    reddit: {
      icon: 'reddit',
      link: reddit(url, title),
      name: 'Reddit',
      text: 'Share to Reddit',
      type: 'fab',
    },
    facebook: {
      icon: 'facebook',
      link: facebook(url, title),
      name: 'Facebook',
      text: 'Share to Facebook',
      type: 'fab',
    },
    email: {
      icon: 'envelope',
      link: email(url, title, description),
      name: 'Email',
      text: 'Email',
      type: 'fas',
    },
    hackernews: {
      icon: 'hacker-news',
      link: hackernews(url),
      name: 'Hacker News',
      text: 'Share to Hacker News',
      type: 'fab',
    },
  };
}

export function shareLinks(url, title, description) {
  const { twitter, facebook, linkedin, reddit, hackernews, email } = shares(
    url,
    title,
    description,
  );

  return [twitter, facebook, linkedin, reddit, hackernews, email];
}

export function communityEditLink(articlePath) {
  const githubArticlePath =
    'https://github.com/samanthaming/sample-src/blob/master/articles';

  return githubArticlePath + articlePath;
}
