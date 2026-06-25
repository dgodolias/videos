import type { Resource } from '../data/types';

export function isReleasedOnHomepage(resource: Resource, now: number): boolean {
  const card = resource.card;
  if (!card) return false;

  const status = card.status ?? 'active';
  if (status === 'active') return true;
  if (status === 'inactive') return false;
  if (!card.visibleAfter || now <= 0) return false;

  const visibleAt = Date.parse(card.visibleAfter);
  return Number.isFinite(visibleAt) && now >= visibleAt;
}
