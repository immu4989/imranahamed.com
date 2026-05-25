const WORDS_PER_MINUTE = 220;

export function readingTime(body: string | undefined): { minutes: number; words: number } {
  if (!body) return { minutes: 1, words: 0 };
  const cleaned = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_~`-]/g, ' ');
  const words = cleaned.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return { minutes, words };
}
