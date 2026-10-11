/** Michiana service area, in display order. Single source for the hero carousel, About pills, FAQ, and schema. */
export const areas = [
  { name: 'South Bend', state: 'IN' },
  { name: 'Mishawaka', state: 'IN' },
  { name: 'Elkhart', state: 'IN' },
  { name: 'Goshen', state: 'IN' },
  { name: 'Plymouth', state: 'IN' },
  { name: 'Granger', state: 'IN' },
  { name: 'New Carlisle', state: 'IN' },
  { name: 'Osceola', state: 'IN' },
  { name: 'Bremen', state: 'IN' },
  { name: 'Michiana Shores', state: 'IN' },
  { name: 'La Porte', state: 'IN' },
  { name: 'Michigan City', state: 'IN' },
  { name: 'Niles', state: 'MI' },
  { name: 'Benton Harbor', state: 'MI' },
  { name: 'St. Joseph', state: 'MI' },
  { name: 'Edwardsburg', state: 'MI' },
  { name: 'Cassopolis', state: 'MI' },
  { name: 'Buchanan', state: 'MI' },
  { name: 'New Buffalo', state: 'MI' },
  { name: 'Dowagiac', state: 'MI' },
] as const;

export const areaNames: string[] = areas.map((a) => a.name);

/** "City, ST" strings for schema.org areaServed. */
export const areaServed: string[] = [...areas.map((a) => `${a.name}, ${a.state}`), 'Michiana', 'United States'];

/** "A, B, and C" */
export const areaList = `${areaNames.slice(0, -1).join(', ')}, and ${areaNames[areaNames.length - 1]}`;
