export const SITE = {
  title: 'Imran Ahamed',
  description:
    'Applied AI/ML engineer. Multi-agent systems and RAG in production. Co-founding VEZRAN (Zyberpol).',
  url: 'https://imranahamed.com',
  author: 'Imran Ahamed',
  locale: 'en',
} as const;

export const SOCIAL = {
  github: 'https://github.com/immu4989',
  linkedin: 'https://www.linkedin.com/in/imranahamed/',
  scholar: 'https://scholar.google.com/citations?user=1wuxc7MAAAAJ',
  email: 'mailto:immu4989@gmail.com',
  vezran: 'https://www.vezran.com',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const;
