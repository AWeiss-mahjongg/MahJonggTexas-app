export const LINKS = {
  website: 'https://mahjonggtexas.com',
  youtube: 'https://www.youtube.com/@MahJonggTexas',
  storefront: 'https://link.amazon/B05XN3yfS',
  wordSearch:
    'https://www.amazon.com/stores/Apohl-Atelier/author/B0GWLLPSW5?ref=sr_ntt_srch_lnk_1&qid=1789500462&sr=8-1&shoppingPortalEnabled=true&ccs_id=55fce648-e606-4490-a018-c8a9905a5246',
  book: 'https://amzn.to/4fOTn0u',
  contactEmail: 'mahjonggtexas@gmail.com',
  joinMailto: 'mailto:mahjonggtexas@gmail.com',
} as const;

export const SHOP_ITEMS = [
  {
    id: 'storefront',
    title: 'Main Amazon Storefront',
    subtitle: 'Mahj products & seasonal picks',
    url: LINKS.storefront,
  },
  {
    id: 'word-search',
    title: 'Word Search / Apohl Atelier',
    subtitle: 'Mah Jongg word search & author store',
    url: LINKS.wordSearch,
  },
  {
    id: 'book',
    title: 'Featured Book',
    subtitle: 'Optional Amazon short link',
    url: LINKS.book,
  },
] as const;

/** Social / community links found or provided (YouTube + site hub). */
export const SOCIAL = [
  { id: 'web', label: 'Website', url: LINKS.website },
  { id: 'yt', label: 'YouTube', url: LINKS.youtube },
] as const;
