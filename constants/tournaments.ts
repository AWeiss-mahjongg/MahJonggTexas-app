export type Tournament = {
  id: string;
  name: string;
  date: string;
  dateLabel: string;
  location?: string;
  benefit?: string;
  notes?: string;
  url?: string;
};

/** Editable seed list — update this module when events change. */
export const TOURNAMENTS: Tournament[] = [
  {
    id: 'paw-jongg-2027',
    name: 'Paw Jongg',
    date: '2027-01-26',
    dateLabel: 'January 26, 2027',
  },
  {
    id: 'kingsland-4th-2027',
    name: 'Kingsland 4th Annual',
    date: '2027-03-17',
    dateLabel: 'March 17, 2027',
    benefit: 'Senior Center',
    notes: 'In honor of Shirley Thiesen. Registration info to be posted later.',
  },
  {
    id: 'hsb-2026',
    name: 'Horseshoe Bay Mah Jongg Tournament',
    date: '2026-09-09',
    dateLabel: 'September 9–10, 2026',
    location: 'Horseshoe Bay Resort',
    benefit: 'Horseshoe Bay Foundation Inc.',
    notes: 'Sold out (as listed on MahJonggTexas.com).',
  },
  {
    id: 'zonta-seguin-2026',
    name: 'Seguin Zonta Club Tournament',
    date: '2026-09-23',
    dateLabel: 'September 23, 2026',
    location: 'Silver Center, Seguin',
    benefit: "Zonta Club — women's advocacy",
    notes: 'Cost $90. Contact via site for registration.',
  },
  {
    id: 'hill-country-2026',
    name: 'Hill Country Mah Jongg Tournament — 2nd Annual',
    date: '2026-10-06',
    dateLabel: 'October 6, 2026',
    location: 'Country Cove–Cedar Sky',
    benefit: 'Sharing the Harvest–Kingsland (honoring Shirley Theisen)',
    notes: 'Contact Laurie (512-971-7314) or Sally (830-637-9280).',
  },
  {
    id: 'georgetown-2026',
    name: 'Georgetown Tournament',
    date: '2026-10-19',
    dateLabel: 'October 19, 2026 (Monday)',
    location: 'Williams County Advocacy Center',
    notes: 'Almost sold out (per site).',
  },
  {
    id: 'tunnel-towers-2026',
    name: 'Tunnel to Towers Foundation Tournament',
    date: '2026-11-10',
    dateLabel: 'November 10, 2026',
    location: 'Silver Center, 510 E Court, Seguin TX 78155',
    benefit: 'Tunnel to Towers Foundation',
    notes: 'Cost $90. Breakfast 8:30am; play begins 9:15am. Registration opens Oct 1.',
  },
  {
    id: 'mahj-for-more',
    name: 'Mahj for More Charity Mahjong Tournament',
    date: '2026-08-29',
    dateLabel: 'August 29 (check year on site)',
    location: 'Onion Creek Club',
    benefit: 'DSACR / Down syndrome community in Central Texas',
    notes: '9:30am–2pm. See app.mahj.events',
    url: 'https://app.mahj.events',
  },
];

export function sortedTournaments(list: Tournament[] = TOURNAMENTS): Tournament[] {
  return [...list].sort((a, b) => a.date.localeCompare(b.date));
}
