export const SITE = {
  title: 'Imran Ahamed',
  description:
    'Applied AI/ML engineer. Multi-agent systems and RAG in production. Co-founding VEZRAN (Zyberpol).',
  url: 'https://imranahamed.com',
  author: 'Imran Ahamed',
  locale: 'en',
  initials: 'IA',
} as const;

export const SOCIAL = {
  github: 'https://github.com/immu4989',
  linkedin: 'https://www.linkedin.com/in/imranahamed/',
  scholar: 'https://scholar.google.com/citations?user=1wuxc7MAAAAJ',
  email: 'mailto:immu4989@gmail.com',
  vezran: 'https://www.vezran.com',
  zyberpol: 'https://www.zyberpol.com',
} as const;

// Update to your real Substack publication URL once created.
// Form sends visitors to <NEWSLETTER>/subscribe?email=<their email> — Substack handles confirmation.
export const NEWSLETTER = {
  substack: 'https://imranahamed.substack.com',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/writing', label: 'Writing' },
  { href: '/notes', label: 'Notes' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/about', label: 'About' },
] as const;

export const STATS = [
  { value: '8+', label: 'years shipping production ML' },
  { value: '3', label: 'companies (incl. one I co-founded)' },
  { value: '4', label: 'agents in the system I am building' },
] as const;
