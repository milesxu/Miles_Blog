import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Archive', href: getBlogPermalink() },
    { text: 'Miles Portal', href: 'https://milesxu.com', target: '_blank' },
    { text: 'GitHub', href: 'https://github.com/milesxu', target: '_blank' },
  ],
  actions: [{ text: 'About me', href: 'https://milesxu.com/about', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Blog',
      links: [
        { text: 'All articles', href: getBlogPermalink() },
        { text: 'RSS feed', href: getAsset('/rss.xml') },
      ],
    },
    {
      title: 'Miles Xu',
      links: [
        { text: 'Personal site', href: 'https://milesxu.com', target: '_blank' },
        { text: 'GitHub', href: 'https://github.com/milesxu', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/milesxu', target: '_blank' },
  ],
  footNote: 'Miles Xu Blog · Built with Astro and AstroWind',
};
